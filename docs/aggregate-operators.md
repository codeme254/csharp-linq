# Aggregate Operators

LINQ Aggregate Operators perform mathematical operations on sequences of numeric data and are also used to compute a single value from a sequence of values. These operators are used to group together the values of multiple rows as the input and then return the output as a single value.

The following are the aggregate methods provided by Linq to perform mathematical operations on a collection:

- `Sum()`: This method calculates the collection's total(sum) value.
- `Max()`: This method is used to find the largest value in the collection
- `Min()`: This method is used to find the smallest value in the collection
- `Average()`: This method is used to calculate the average value of the numeric type of the collection.
- `Count()`: This method counts the number of elements in the collection.
- `Aggregate()`: This method is used to Perform a custom aggregation operation on the values of a collection.

## Sum

The Sum method in LINQ is a widely used aggregate function that calculates the sum of a sequence of numeric values.

It can be applied to arrays, lists, or any other enumerable collections in .NET. The Sum method is available in various overloads, allowing you to sum up different numeric types such as int, double, decimal, etc., and even to sum up a specific numeric property in a collection of objects.

### Example to Understand the Sum Method

In the following example, we are using the Sum method to calculate the sum of the given collection of numbers using both query syntax and method syntax:

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace SumMethod
{
    internal class SumMethod
    {
        static void Main(string[] args)
        {
            List<int> numbers = new List<int>()
            {
                10, 30, 50, 40, 60, 20, 70, 90, 80, 100
            };

            int total1 = numbers.Sum();
            int total2 = (from num in numbers
                          select num).Sum();

            Console.WriteLine(total1);
            Console.WriteLine(total2);
        }
    }
}
```

### Using the Sum Method With a Predicate

We can also use the other overloaded version of the Sum method, which takes a Predicate as a parameter. Within that predicate, we can write the logic to filter the data.

In the example below, we are finding the sum of all numbers that are greater than 50.

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace SumMethod
{
    internal class SumMethod
    {
        static void Main(string[] args)
        {
            List<int> numbers = new List<int>()
            {
                10, 30, 50, 40, 60, 20, 70, 90, 80, 100
            };

            int gt50total = numbers.Sum(num =>
            {
                if (num > 50) return num;
                return 0;
            });
            Console.WriteLine(gt50total);

            gt50total = (from num in numbers
                         select num).Sum(num =>
                         {
                             if (num > 50) return num;
                             return 0;
                         });
            Console.WriteLine(gt50total);
        }
    }
}
```

### Sum Method With Complex Types

The Sum method becomes even more powerful when you need to sum a specific property of objects in a collection.

Let us see an example of using the LINQ Sum Method with Complex Type in C# using both Method and Query Syntax. We are going to work with the following Employee class. As you can see, it is a very simple Employee class with four properties: ID, Name, Salary, and Department. Here, we also created one method, i.e., GetAllEmployees(), which will return the list of all the employees, which will be our data source.

:::code-group

```C# [Employee.cs]
using System.Collections.Generic;
namespace EmployeeData
{
    public class Employee
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Salary { get; set; }
        public string Department { get; set; }

        public static List<Employee> GetAllEmployees()
        {
            List<Employee> employees = new List<Employee>()s
            {
                new Employee{ID= 101,Name = "Preety", Salary = 10000, Department = "IT"},
                new Employee{ID= 102,Name = "Priyanka", Salary = 15000, Department = "Sales"},
                new Employee{ID= 103,Name = "James", Salary = 50000, Department = "Sales"},
                new Employee{ID= 104,Name = "Hina", Salary = 20000, Department = "IT"},
                new Employee{ID= 105,Name = "Anurag", Salary = 30000, Department = "IT"},
                new Employee{ID= 106,Name = "Sara", Salary = 25000, Department = "IT"},
                new Employee{ID= 107,Name = "Pranaya", Salary = 35000, Department = "IT"},
                new Employee{ID= 108,Name = "Manoj", Salary = 11000, Department = "Sales"},
                new Employee{ID= 109,Name = "Sam", Salary = 45000, Department = "Sales"},
                new Employee{ID= 110,Name = "Saurav", Salary = 25000, Department = "Sales"}
            };

            return employees;
        }
    }
}
```

:::

Now, our requirement is to calculate the Sum of the Salaries of all the Employees. The following example calculates the sum of all employees’ salaries using the LINQ Sum method with both Method and Query Syntax.

```C#
using System;
using System.Collections.Generic;
using System.Linq;
using EmployeeData;

namespace SumMethod
{
    internal class SumMethod
    {
        static void Main(string[] args)
        {
            // Method syntax
            int total = Employee.GetAllEmployees().Sum(e => e.Salary);
            Console.WriteLine(total);

            // Query Syntax
            total = (from emp in Employee.GetAllEmployees()
                     select emp).Sum(e => e.Salary);
            Console.WriteLine(total);
        }
    }
}
```

## Max

The LINQ Max method is used to find the maximum value in a collection.

The Max method comes in various forms, allowing you to find the maximum value in different ways depending on the type of the collection and the data it contains.

### Example to Understand the Max Method

In the following example, we have a list of numbers, we want to find the max number among these numbers, for these, we will use the Max method:

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace MaxMethod
{
    class MaxMethod
    {
        static void Main(string[] args)
        {
            List<int> numbers = new List<int>()
            {
                10, 30, 50, 40, 60, 20, 70, 90, 80, 100
            };

            // Method syntax
            int max = numbers.Max();
            Console.WriteLine(max);

            // Query syntax
            max = (from num in  numbers
                   select num).Max();
            Console.WriteLine(max);
        }
    }
}
```

### Using the Max Method With a Predicate

We can also use the other overloaded version of the Max method, which takes a Predicate as a parameter, and using the predicate, we can write the logic to filter the data.

In the example below, we want to find the maximum number among the numbers that are less than 50.

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace MaxMethod
{
    class MaxMethod
    {
        static void Main(string[] args)
        {
            List<int> numbers = new List<int>()
            {
                10, 30, 50, 40, 60, 20, 70, 90, 80, 100
            };

            int lt50Max = numbers.Max(num =>
            {
                if (num < 50) return num;
                return 0;
            });
            Console.WriteLine(lt50Max);

            lt50Max = (from num in numbers
                       select num).Max(num =>
                       {
                           if (num < 50) return num;
                           return 0;
                       });
            Console.WriteLine(lt50Max);
        }
    }
}
```

### Max Method With Complex Types

With the following employee class and the following employee data.

:::code-group

```C# [Employee.cs]
using System.Collections.Generic;
namespace EmployeeData
{
    public class Employee
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Salary { get; set; }
        public string Department { get; set; }

        public static List<Employee> GetAllEmployees()
        {
            List<Employee> employees = new List<Employee>()s
            {
                new Employee{ID= 101,Name = "Preety", Salary = 10000, Department = "IT"},
                new Employee{ID= 102,Name = "Priyanka", Salary = 15000, Department = "Sales"},
                new Employee{ID= 103,Name = "James", Salary = 50000, Department = "Sales"},
                new Employee{ID= 104,Name = "Hina", Salary = 20000, Department = "IT"},
                new Employee{ID= 105,Name = "Anurag", Salary = 30000, Department = "IT"},
                new Employee{ID= 106,Name = "Sara", Salary = 25000, Department = "IT"},
                new Employee{ID= 107,Name = "Pranaya", Salary = 35000, Department = "IT"},
                new Employee{ID= 108,Name = "Manoj", Salary = 11000, Department = "Sales"},
                new Employee{ID= 109,Name = "Sam", Salary = 45000, Department = "Sales"},
                new Employee{ID= 110,Name = "Saurav", Salary = 25000, Department = "Sales"}
            };

            return employees;
        }
    }
}
```

:::

Say we want to find the highest salary, we can also use the Max method for this using both method and query syntax as shown:

```C#
using System;
using System.Collections.Generic;
using System.Linq;
using EmployeeData;

namespace MaxMethod
{
    class MaxMethod
    {
        static void Main(string[] args)
        {
            int highestSalary = Employee.GetAllEmployees().Max(e =>  e.Salary);
            Console.WriteLine(highestSalary);

            highestSalary = (from emp in Employee.GetAllEmployees()
                             select emp).Max(e => e.Salary);
            Console.WriteLine(highestSalary);
        }
    }
}
```

## Min

The LINQ Min method finds the smallest numeric value in a collection on which it is applied.

The Min method comes in various forms, allowing you to find the minimum value in different ways depending on the type of the collection and the data it contains.

### Example to Understand the Min Method

In the following example, we have a list of numbers and we want to find the smallest among these numbers, we will use the min method for that using both method and query syntax:

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace MinMethod
{
    internal class MinMethod
    {
        static void Main(string[] args)
        {
            List<int> numbers = new List<int>()
            {
                10, 30, 50, 40, 60, 20, 70, 90, 80, 100
            };
            int min = numbers.Min();
            Console.WriteLine(min);

            min = (from num in numbers
                   select num).Min();
            Console.WriteLine(min);
        }
    }
}
```

### Using the Min Method With a Predicate

We can also use the other overloaded version of the Min Extension method, which takes a Predicate as a parameter, and using the predicate, we can write the logic to filter the data.

In the example below, we are finding the minimum among all numbers that are greater than 50:

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace MinMethod
{
    internal class MinMethod
    {
        static void Main(string[] args)
        {
            List<int> numbers = new List<int>()
            {
                10, 30, 50, 40, 60, 20, 70, 90, 80, 100
            };

            int gt50Min = numbers.Min(num =>
            {
                if (num > 50) return num;
                return null;
            }).GetValueOrDefault();
            Console.WriteLine(gt50Min);

            gt50Min = (from num in numbers
                       select num).Min(num =>
                       {
                           if (num > 50) return num;
                           return null;
                       }).GetValueOrDefault();
            Console.WriteLine(gt50Min);
        }
    }
}
```

### Min Method With Complex Types

With the following employee class and the employee data:

:::code-group

```C# [Employee.cs]
using System.Collections.Generic;
namespace EmployeeData
{
    public class Employee
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Salary { get; set; }
        public string Department { get; set; }

        public static List<Employee> GetAllEmployees()
        {
            List<Employee> employees = new List<Employee>()s
            {
                new Employee{ID= 101,Name = "Preety", Salary = 10000, Department = "IT"},
                new Employee{ID= 102,Name = "Priyanka", Salary = 15000, Department = "Sales"},
                new Employee{ID= 103,Name = "James", Salary = 50000, Department = "Sales"},
                new Employee{ID= 104,Name = "Hina", Salary = 20000, Department = "IT"},
                new Employee{ID= 105,Name = "Anurag", Salary = 30000, Department = "IT"},
                new Employee{ID= 106,Name = "Sara", Salary = 25000, Department = "IT"},
                new Employee{ID= 107,Name = "Pranaya", Salary = 35000, Department = "IT"},
                new Employee{ID= 108,Name = "Manoj", Salary = 11000, Department = "Sales"},
                new Employee{ID= 109,Name = "Sam", Salary = 45000, Department = "Sales"},
                new Employee{ID= 110,Name = "Saurav", Salary = 25000, Department = "Sales"}
            };

            return employees;
        }
    }
}
```

:::

Say we want to find the lowest salary, we can use the Min method using both method and query syntax as shown:

```C#
using System;
using System.Collections.Generic;
using System.Linq;
using EmployeeData;

namespace MinMethod
{
    internal class MinMethod
    {
        static void Main(string[] args)
        {
            int lowestSalary = Employee.GetAllEmployees().Min(e => e.Salary);
            Console.WriteLine(lowestSalary);

            lowestSalary = (from emp in  Employee.GetAllEmployees()
                            select emp).Min(e => e.Salary);
            Console.WriteLine(lowestSalary);
        }
    }
}
```

## Average

The LINQ Average method computes the average value of a numeric collection or the average of a specific numeric property in a collection of complex objects.

### Example to Understand the Average Method

In the example below, we have a list of integers and we would like to compute the average of the list, to do this, we will use the `Average` method as shown:

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace AverageMethod
{
    class AverageMethod
    {
        static void Main(string[] args)
        {
            List<int> numbers = new List<int>()
            {
                10, 30, 50, 40, 60, 20, 70, 90, 80, 100
            };

            double avg = numbers.Average();
            Console.WriteLine(avg);

            avg = (from num in numbers
                   select num).Average();
            Console.WriteLine(avg);
        }
    }
}
```

Since Average returns a double data type, you could cast it to int or any other numeric data type, for example: `int avg = (int)numbers.Average()`

### Using the Average Method With a Predicate

We can also use the other overloaded version of the Average method, which takes a Predicate as a parameter. Within that predicate, we can write the logic to filter the data.

In the example below, we are finding the average of all numbers greater than 50:

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace AverageMethod
{
    class AverageMethod
    {
        static void Main(string[] args)
        {
            List<int> numbers = new List<int>()
            {
                10, 30, 50, 40, 60, 20, 70, 90, 80, 100
            };

            double gt50Avg = numbers.Average(num =>
            {
                if (num > 50) return num;
                return 0;
            });
            Console.WriteLine(gt50Avg);

            gt50Avg = (from num in numbers
                       select num).Average(num =>
                       {
                           if (num > 50) return num;
                           return 0;
                       });
            Console.WriteLine(gt50Avg);
        }
    }
}
```

### Average Method With Complex Types

With the following employee data:

:::code-group

```C# [Employee.cs]
using System.Collections.Generic;
namespace EmployeeData
{
    public class Employee
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Salary { get; set; }
        public string Department { get; set; }

        public static List<Employee> GetAllEmployees()
        {
            List<Employee> employees = new List<Employee>()s
            {
                new Employee{ID= 101,Name = "Preety", Salary = 10000, Department = "IT"},
                new Employee{ID= 102,Name = "Priyanka", Salary = 15000, Department = "Sales"},
                new Employee{ID= 103,Name = "James", Salary = 50000, Department = "Sales"},
                new Employee{ID= 104,Name = "Hina", Salary = 20000, Department = "IT"},
                new Employee{ID= 105,Name = "Anurag", Salary = 30000, Department = "IT"},
                new Employee{ID= 106,Name = "Sara", Salary = 25000, Department = "IT"},
                new Employee{ID= 107,Name = "Pranaya", Salary = 35000, Department = "IT"},
                new Employee{ID= 108,Name = "Manoj", Salary = 11000, Department = "Sales"},
                new Employee{ID= 109,Name = "Sam", Salary = 45000, Department = "Sales"},
                new Employee{ID= 110,Name = "Saurav", Salary = 25000, Department = "Sales"}
            };

            return employees;
        }
    }
}
```

:::

Say we want to compute average employees salary, we can do this using the query and method syntax as shown:

```C#
using System;
using System.Collections.Generic;
using System.Linq;
using EmployeeData;

namespace AverageMethod
{
    class AverageMethod
    {
        static void Main(string[] args)
        {
            double avgSalary = Employee.GetAllEmployees().Average(e => e.Salary);
            Console.WriteLine(avgSalary);

            avgSalary = (from emp in Employee.GetAllEmployees()
                         select emp).Average(e => e.Salary);
            Console.WriteLine(avgSalary);
        }
    }
}
```

## Count

The LINQ Count Method returns the number of elements present in the collection or the number of elements that have satisfied a given condition.

### Example to Understand the Count Method

In the following example, we have a list of integers, we want to find how many integers we have, for this, we will use the Count method as shown:

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace AddMethod
{
    internal class AddMethod
    {
        static void Main(string[] args)
        {
            List<int> nums = new List<int>()
            {
                60, 80, 50, 90, 10, 30, 70, 40, 20, 100
            };

            int count = nums.Count();
            Console.WriteLine(count);
            count = (from num in nums
                     select num).Count();
            Console.WriteLine(count);
        }
    }
}
```

### Using the Count Method With a Predicate

We can also use the other overloaded version of the Count method, which takes a Predicate as a parameter. Within that predicate, we can write the logic to filter the data.

In the following example, we are using the count method with a predicate to count the number of elements that are greater than 40:

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace AddMethod
{
    internal class AddMethod
    {
        static void Main(string[] args)
        {
            List<int> nums = new List<int>()
            {
                60, 80, 50, 90, 10, 30, 70, 40, 20, 100
            };

            int gt40Count = nums.Count(num => num > 40);
            Console.WriteLine(gt40Count);

            gt40Count = (from num in nums
                         select num).Count(num => num > 40);
            Console.WriteLine(gt40Count);
        }
    }
}
```

### Count Method With Complex Types

Given the following employee class and employee data:
:::code-group

```C# [Employee.cs]
using System.Collections.Generic;
namespace EmployeeData
{
    public class Employee
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Salary { get; set; }
        public string Department { get; set; }

        public static List<Employee> GetAllEmployees()
        {
            List<Employee> employees = new List<Employee>()s
            {
                new Employee{ID= 101,Name = "Preety", Salary = 10000, Department = "IT"},
                new Employee{ID= 102,Name = "Priyanka", Salary = 15000, Department = "Sales"},
                new Employee{ID= 103,Name = "James", Salary = 50000, Department = "Sales"},
                new Employee{ID= 104,Name = "Hina", Salary = 20000, Department = "IT"},
                new Employee{ID= 105,Name = "Anurag", Salary = 30000, Department = "IT"},
                new Employee{ID= 106,Name = "Sara", Salary = 25000, Department = "IT"},
                new Employee{ID= 107,Name = "Pranaya", Salary = 35000, Department = "IT"},
                new Employee{ID= 108,Name = "Manoj", Salary = 11000, Department = "Sales"},
                new Employee{ID= 109,Name = "Sam", Salary = 45000, Department = "Sales"},
                new Employee{ID= 110,Name = "Saurav", Salary = 25000, Department = "Sales"}
            };

            return employees;
        }
    }
}
```

:::

We want to count the number of employees who work in IT, for this, we will use the count method as shown:

```C#
using System;
using System.Collections.Generic;
using System.Linq;
using EmployeeData;

namespace AddMethod
{
    internal class AddMethod
    {
        static void Main(string[] args)
        {
            int numEmployeesInIt = Employee.GetAllEmployees().Count(e => e.Department == "IT");
            Console.WriteLine(numEmployeesInIt);

            numEmployeesInIt = (from emp in Employee.GetAllEmployees()
                                select emp).Count(e => e.Department == "IT");
            Console.WriteLine(numEmployeesInIt);
        }
    }
}
```
