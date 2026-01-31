# Select
LINQ Select operator allows us to specify what properties we want to retrieve. We need to specify whether we want to retrieve all or some of the properties in the Select Operator.

We will be using the following Employee class to learn about the **Select** operator, we have 4 properties, ID, FirstName, LastName and Salary, we also have a Static
method called Get Employees that returns a list of 6 employees:

```C#
using System.Collections.Generic;

namespace SelectDemo
{
    class Employee
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Salary { get; set; }

        public static List<Employee> GetEmployees()
        {
            return new List<Employee>
            {
                new Employee { ID = 101, FirstName = "John", LastName = "Doe", Salary = 60000 },
                new Employee { ID = 102, FirstName = "Jane", LastName = "Doe", Salary = 70000 },
                new Employee { ID = 103, FirstName = "Jack", LastName = "Ripper", Salary = 80000 },
                new Employee { ID = 104, FirstName = "Ken", LastName = "Thompson", Salary = 90000 },
                new Employee { ID = 105, FirstName = "Alison", LastName = "Krugger", Salary = 100000 },
                new Employee { ID = 106, FirstName = "Bill", LastName = "Ackman", Salary = 160000 },
            };
        }
    }
}
```

## Overview of How Select Works
Select works as follows:
- **Iteration**: The Select operator iterates over each element in the source sequence.
- **Transformation**: For each element, it applies the transformation logic defined in the lambda expression.
- **Result**: It produces a new sequence where each element is the result of the applied transformation on the corresponding element from the source sequence.

**Deferred Execution**: An important aspect of the Select operator in LINQ is that it uses deferred execution. This means that the actual transformation of elements doesn’t happen when you define the Select call but when you iterate over the resulting sequence. This can be important for performance, especially with large data sets or complex queries.

## Selecting Elements Using `Select` With Both Query Syntax and Method Syntax
Note that `Select` is lazy, it is not executed when we form the method, it is only executed when we use the query variable, in this case `employees` or `employees1`
or when we use methods such as `ToList()`, `Sum()` e.t.c.
```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace SelectDemo
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Select Using the Query Syntax
            IEnumerable<Employee> employees = from emp in Employee.GetEmployees()
                                              select emp;
            foreach(Employee emp in employees)
            {
                Console.WriteLine($"{emp.FirstName} {emp.LastName}");
            }

            // Selecting using the Method Syntax
            IEnumerable<Employee> employees2 = Employee.GetEmployees().Select(e => e);
            foreach(Employee emp in employees2)
            {
                Console.WriteLine($"{emp.ID} {emp.FirstName}");
            }
        }
    }
}
```

## Select a Single Property using LINQ Select
In our previous example, we returned the data in its original form. What if we want to return a single property value?

Let's select the employee IDs using both the query syntax and method syntax:

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace SelectDemo
{
    internal class Program
    {
        static void Main(string[] args)
        {
            IEnumerable<int> iDsQuerySyntax = from emp in Employee.GetEmployees()
                                              select emp.ID;
            foreach(int id in iDsQuerySyntax)
            {
                Console.WriteLine(id);
            }

            IEnumerable<int> iDsMethodSyntax = Employee.GetEmployees().Select(emp => emp.ID);
            foreach(int id in iDsMethodSyntax)
            {
                Console.WriteLine(id);
            }
        }
    }
}
```

## Selecting a Few Properties
Let's say we want to select only the Employee's FirstName, LastName and Salary properties.

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace SelectDemo
{
    internal class Program
    {
        static void Main(string[] args)
        {
            IEnumerable<Employee> empDetails1 = from emp in Employee.GetEmployees()
                                                select new Employee()
                                                {
                                                    FirstName = emp.FirstName,
                                                    LastName = emp.LastName,
                                                    Salary = emp.Salary,
                                                };

            foreach(Employee emp in empDetails1)
            {
                Console.WriteLine($"{emp.FirstName} - {emp.LastName} - {emp.Salary}");
            }

            IEnumerable<Employee> empDetails2 = Employee.GetEmployees().Select(emp => new Employee()
            {
                FirstName = emp.FirstName,
                LastName = emp.LastName,
                Salary = emp.Salary
            });
            foreach(Employee emp in empDetails2)
            {
                Console.WriteLine($"{emp.FirstName} - {emp.LastName} - {emp.Salary}");
            }
        }
    }
}
```

## Selecting a Few Properties to a Different Class
It is also possible to project or select the data to a different class using the LINQ Select Operator or Method. In our previous example, we have seen how to select a few properties (First Name, Last Name, and Salary properties) to the same class using the LINQ Select Projection Operator. Let us create a new class with the above three properties, and we will project the data to this class.

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace SelectDemo
{
    class EmployeeBasicInfo
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Salary { get; set; }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            IEnumerable<EmployeeBasicInfo> basicInfo1 = from emp in Employee.GetEmployees()
                                                        select new EmployeeBasicInfo()
                                                        {
                                                            FirstName = emp.FirstName,
                                                            LastName = emp.LastName,
                                                            Salary = emp.Salary
                                                        };
            foreach(EmployeeBasicInfo emp in basicInfo1)
            {
                Console.WriteLine($"{emp.FirstName}, {emp.LastName}, {emp.Salary}");
            }

            IEnumerable<EmployeeBasicInfo> basicInfo2 = Employee.GetEmployees().Select(emp => new EmployeeBasicInfo()
            {
                FirstName = emp.FirstName,
                LastName = emp.LastName,
                Salary = emp.Salary
            });
            foreach(EmployeeBasicInfo emp in basicInfo2)
            {
                Console.WriteLine($"{emp.FirstName}, {emp.LastName}, {emp.Salary}");
            }
        }
    }
}
```

## Projecting Data to Anonymous Type

Instead of projecting the data to a particular type like Employee or EmployeeBasicInfo, we can also project the data to an anonymous type in LINQ using the Select Method or Operator.

In the example below, we are creating an anonymous object (i.e., creating an object without specifying the type) and creating and populating the FirstName, LastName, and Salary properties from the data source which we can access using the emp object.

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace SelectDemo
{
    class EmployeeBasicInfo
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Salary { get; set; }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            var anonymous1 = from emp in Employee.GetEmployees()
                             select new
                             {
                                 FirstName = emp.FirstName,
                                 LastName = emp.LastName,
                                 Salary = emp.Salary
                             };
            foreach(var emp in anonymous1)
            {
                Console.WriteLine($"{emp.FirstName}_{emp.LastName}_{emp.Salary}");
            }

            var anonymous2 = Employee.GetEmployees().Select(emp => new
            {
                FirstName = emp.FirstName,
                LastName = emp.LastName,
                Salary = emp.Salary
            });

            foreach(var emp in anonymous2)
            {
                Console.WriteLine($"{emp.FirstName}_{emp.LastName}_{emp.Salary}");
            }
        }
    }
}
```