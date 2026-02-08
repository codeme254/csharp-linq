# Ordering Operators

Ordering operators in LINQ rearrange the data in a particular way i.e Ascending or Descending.

Ordering Operators in LINQ are used to sort the elements of a sequence or collection based on one or more criteria.

The ordering operators are:

- **OrderBy**: sorts elements in ascending order based on a specified key.
- **OrderByDescending**: sorts elements in descending order based on a specified key.
- **ThenBy**: used after OrderBy or OrderByDescending to provide a secondary level of sorting. For instance, you might first sort students by their grades and then use ThenBy to sort students with the same grade by their names in ascending order. So, the ThenBy operator performs a secondary sort on elements with the same values after the primary sort.
- **ThenByDescending**: similar to **ThenBy** but in descending order.
- **Reverse**: reverses the order of elements in a sequence.

## OrderBy

The OrderBy method is used to sort the elements of a collection in ascending order based on a specified key.

It can be used with any collection that implements the `IEnumerable<T>` interface, such as arrays, lists, or any other enumerable types.

One important aspect of LINQ is deferred execution. When you call OrderBy, it doesn’t immediately sort the data. Instead, it returns an `IOrderedEnumerable<T>` containing the sorting logic. The actual sorting happens when you iterate over this enumerable, for example, by using a for each loop or converting it to a list.

### Example of OrderBy

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace OrderByOperator
{
    internal class OrderByOperator
    {
        static void Main(string[] args)
        {
            List<int> intList = new List<int>()
            {
                10, 45, 35, 29, 100, 69, 58, 50
            };

            // Method Syntax
            IEnumerable<int> sorted1 = intList.OrderBy(num => num);
            foreach(int num in sorted1)
            {
                Console.WriteLine(num);
            }

            // Query Syntax
            IEnumerable<int> sorted2 = from num in intList
                                       orderby num
                                       select num;
            foreach(int num in sorted2)
            {
                Console.WriteLine(num);
            }
        }
    }
}
```

### OrderBy With Complex Data Type

We are going to work with the following student class, create a file named Student.cs and paste the following code into the file.

As you can see, we created the Student class with four properties: ID, FirstName, LastName, and Brach. We then created one method, i.e., GetAllStudents(), to return a list of students.

::: code-group

```C# [Student.cs]
using System.Collections.Generic;

namespace Students
{
    class Student
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Branch { get; set; }

        public static List<Student> GetAllStudents()
        {
            return new List<Student>()
            {
                new Student{ ID = 101, FirstName = "Preety", LastName = "Tiwari", Branch="CSE" },
                new Student{ ID = 102, FirstName = "Preety", LastName = "Agrawal", Branch="ETC" },
                new Student{ ID = 103, FirstName = "Priyanka", LastName = "Dewangan", Branch="ETC" },
                new Student{ ID = 104, FirstName = "Hina", LastName = "Sharma", Branch="ETC" },
                new Student{ ID = 105, FirstName = "Anugrag", LastName = "Mohanty", Branch="CSE" },
                new Student{ ID = 106, FirstName = "Anugrag", LastName = "Sharma", Branch="CSE" },
                new Student{ ID = 107, FirstName = "Pranaya", LastName = "Kumar", Branch="CSE" },
                new Student{ ID = 108, FirstName = "Manoj", LastName = "Kumar", Branch="ETC" },
                new Student{ ID = 109, FirstName = "Pranaya", LastName = "Rout", Branch="ETC" },
                new Student{ ID = 101, FirstName = "Saurav", LastName = "Rout", Branch="CSE" },
            };
        }
    }
}
```

:::

Let's say we want to sort the students based on the branch in ascending order, to do so, we will use the OrderBy operator as shown:

```C#
using Students;
using System;
using System.Collections.Generic;
using System.Linq;

namespace OrderByOperator
{
    internal class OrderByOperator
    {
        static void Main(string[] args)
        {
            // Method Syntax
            IEnumerable<Student> branch1 = Student.GetAllStudents().OrderBy(s => s.Branch);
            foreach(Student s in branch1)
            {
                Console.WriteLine($"{s.Branch} - {s.FirstName} {s.LastName}");
            }
            // Query Syntax
            IEnumerable<Student> branch2 = from student in Student.GetAllStudents()
                                           orderby student.Branch
                                           select student;
            foreach(Student s in branch2)
            {
                Console.WriteLine($"{s.Branch} - {s.FirstName} {s.LastName}");
            }
        }
    }
}
```

## OrderByDescending

The OrderByDescending method in LINQ is used to sort elements of a collection in descending order based on a specified key.

You can use OrderByDescending with any collection that implements the `IEnumerable<T>` interface, such as lists, arrays, or other enumerable types.

When you call OrderByDescending, it doesn’t immediately sort the data. Instead, it returns an `IOrderedEnumerable<T>` containing the sorting logic. The actual sorting happens when you iterate over this enumerable, for example, by using a for each loop or converting it to a list.

### Example of OrderByDescending

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace OrderByDescendingOperator
{
    internal class OrderByDescending
    {
        static void Main(string[] args)
        {
            List<int> intList = new List<int>()
            {
                10, 45, 35, 29, 100, 69, 58, 50
            };

            // Method Syntax
            IEnumerable<int> sorted1 = intList.OrderByDescending(x => x);
            foreach(int i in sorted1)
            {
                Console.WriteLine(i);
            }

            // Query Syntax
            IEnumerable<int> sorted2 = from i in intList
                                       orderby i descending
                                       select i;
            foreach(int i in sorted2)
            {
                Console.WriteLine(i);
            }
        }
    }
}
```

### OrderByDescending With Complex Data Type

We are going to work with the following student class, create a file named Student.cs and paste the following code into the file.

As you can see, we created the Student class with four properties: ID, FirstName, LastName, and Brach. We then created one method, i.e., GetAllStudents(), to return a list of students.

::: code-group

```C# [Student.cs]
using System.Collections.Generic;

namespace Students
{
    class Student
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Branch { get; set; }

        public static List<Student> GetAllStudents()
        {
            return new List<Student>()
            {
                new Student{ ID = 101, FirstName = "Preety", LastName = "Tiwari", Branch="CSE" },
                new Student{ ID = 102, FirstName = "Preety", LastName = "Agrawal", Branch="ETC" },
                new Student{ ID = 103, FirstName = "Priyanka", LastName = "Dewangan", Branch="ETC" },
                new Student{ ID = 104, FirstName = "Hina", LastName = "Sharma", Branch="ETC" },
                new Student{ ID = 105, FirstName = "Anugrag", LastName = "Mohanty", Branch="CSE" },
                new Student{ ID = 106, FirstName = "Anugrag", LastName = "Sharma", Branch="CSE" },
                new Student{ ID = 107, FirstName = "Pranaya", LastName = "Kumar", Branch="CSE" },
                new Student{ ID = 108, FirstName = "Manoj", LastName = "Kumar", Branch="ETC" },
                new Student{ ID = 109, FirstName = "Pranaya", LastName = "Rout", Branch="ETC" },
                new Student{ ID = 101, FirstName = "Saurav", LastName = "Rout", Branch="CSE" },
            };
        }
    }
}
```

:::

Let's say we want to sort the students based on the branch in descending order, to do so, we will use the OrderByDescending operator as shown:

```C#
using System;
using System.Collections.Generic;
using System.Linq;
using Students;

namespace OrderByDescendingOperator
{
    internal class OrderByDescending
    {
        static void Main(string[] args)
        {
            // Method Syntax
            IEnumerable<Student> branch1 = Student.GetAllStudents().OrderByDescending(s => s.Branch);
            foreach(Student s in branch1)
            {
                Console.WriteLine($"{s.Branch} - {s.FirstName} {s.LastName}");
            }

            // Query Syntax
            IEnumerable<Student> branch2 = from s in Student.GetAllStudents()
                                           orderby s.Branch descending
                                           select s;
            foreach(Student s in branch2)
            {
                Console.WriteLine($"{s.Branch} - {s.FirstName} {s.LastName}");
            }
        }
    }
}
```

## ThenBy and ThenByDescending

The ThenBy and ThenByDescending methods in LINQ are used for secondary sorting.

These methods come into play when you want to sort a collection based on multiple criteria. They are typically used after OrderBy or OrderByDescending to provide further sorting on the elements of a collection.

That means if you want to sort the data by multiple keys, the first key will be sorted by the OrderBy or OrderByDescending method. And then, from the second key onwards, the data will be sorted by ThenBy and ThenByDescending methods.

:::info NOTE
You can use the ThenBy or ThenByDescending method more than once in the same LINQ query, but you can use the OrderBy or OrderByDescending methods only once in the same query.
:::

### Example to understand ThenBy and ThenByDescending

It is not possible to use these two methods with primitive data types as we are going to sort the data based on multiple keys. So, let us see how we can work with Complex data types using LINQ ThenBy or ThenByDescending methods. We will use the following Student class to understand the use of the ThenBy and ThenByDescending methods in C#. So, create a class file named Student.cs and copy and paste the following code.

::: code-group

```C# [Student.cs]
using System.Collections.Generic;

namespace Students
{
    class Student
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Branch { get; set; }

        public static List<Student> GetAllStudents()
        {
            return new List<Student>()
            {
                new Student{ ID = 101, FirstName = "Preety", LastName = "Tiwari", Branch="CSE" },
                new Student{ ID = 102, FirstName = "Preety", LastName = "Agrawal", Branch="ETC" },
                new Student{ ID = 103, FirstName = "Priyanka", LastName = "Dewangan", Branch="ETC" },
                new Student{ ID = 104, FirstName = "Hina", LastName = "Sharma", Branch="ETC" },
                new Student{ ID = 105, FirstName = "Anugrag", LastName = "Mohanty", Branch="CSE" },
                new Student{ ID = 106, FirstName = "Anugrag", LastName = "Sharma", Branch="CSE" },
                new Student{ ID = 107, FirstName = "Pranaya", LastName = "Kumar", Branch="CSE" },
                new Student{ ID = 108, FirstName = "Manoj", LastName = "Kumar", Branch="ETC" },
                new Student{ ID = 109, FirstName = "Pranaya", LastName = "Rout", Branch="ETC" },
                new Student{ ID = 101, FirstName = "Saurav", LastName = "Rout", Branch="CSE" },
            };
        }
    }
}
```

:::

Now, we want to sort the student by FirstName in ascending order and then by LastName in Descending order:

```C#
using System;
using System.Collections.Generic;
using System.Linq;
using Students;

namespace ThenByAndThenByDescendingMethods
{
    internal class ThenByAndThenByDescending
    {
        static void Main(string[] args)
        {
            Console.WriteLine("===Before ThenByDescending===");
            IEnumerable<Student> students = Student.GetAllStudents().OrderBy(s => s.FirstName);
            foreach(Student student in students)
            {
                Console.WriteLine($"{student.FirstName} {student.LastName}");
            }

            Console.WriteLine("\n\n===After ThenByDescending===");
            students = Student.GetAllStudents().OrderBy(s => s.FirstName).ThenByDescending(s => s.LastName);
            foreach (Student student in students)
            {
                Console.WriteLine($"{student.FirstName} {student.LastName}");
            }
        }
    }
}
```

Notice the difference in the output below when we apply ThenByDescending
![ThenByDescending Output](/images/ThenByDescending-Output.png)

ThenBy would work the same way but in ascending order.

There's no ThenBy and ThenByDescending in Query syntax but you can apply some workarounds.

## Reverse Method

The Reverse method in LINQ is used to invert the order of elements in a collection.

It’s a straightforward and useful method for reversing the sequence of the elements in an array, list, or any other collection that implements the `IEnumerable<T>` interface without needing manual looping or additional logic. This method will not change the data; rather, it simply reverses the data stored in the data source. As a result, we will get the output in reverse order.

In the example below, we have a list of characters that we would like to reverse, to do this, we will use the reverse method as follows:

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace ReverseMethod
{
    internal class ReverseMethod
    {
        static void Main(string[] args)
        {
            List<char> charList = new List<char>()
            {
                'd', 'l', 'r', '0', 'w', ' ', 'o', 'l', 'l', 'e', 'h'
            };

            // Method Syntax
            //IEnumerable<char> reversed1 = charList.Reverse();
            IEnumerable<char> reversed1 = Enumerable.Reverse(charList);
            foreach(char c in reversed1)
            {
                Console.WriteLine(c);
            }
        }
    }
}
```

:::info NOTE
There is a method name clash in the code because both System.Collections.Generic and System.Linq define a method called Reverse. `List<T>.Reverse()` (from System.Collections.Generic) is an instance method that reverses the list in place and returns void, while `Enumerable.Reverse()` (from System.Linq) is an extension method that returns an `IEnumerable<T>` without modifying the original collection. When both namespaces are in scope, the C# compiler always prefers instance methods over extension methods, so `List<T>.Reverse()` is selected, causing a compile-time error when the result is assigned to an `IEnumerable<T>`.

This is the reason why we have to write it as: `Enumerable.Reverse(charList);`
:::

NOTE: there's no reverse method in the query syntax but you can apply workarounds for example:
`IEnumerable<int> ArrayReversedData = (from num in intArray select num).Reverse();`
