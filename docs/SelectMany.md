# SelectMany

The LINQ SelectMany Method in C# is used to project each element of a sequence or collection or data source to an `IEnumerable<T>` type and flatten the resulting sequences into one sequence.

That means the SelectMany Projection Method combines the records from a sequence of results and then converts them into one result.

Imagine you have a list of objects, where each object contains a collection. You want to create a single, flat collection that contains all the elements from all the individual collections. SelectMany does exactly this. For example, if you have a list of three lists, where each inner list contains three numbers, SelectMany will give you a single list of nine numbers.

SelectMany is useful when working with a collection of collections e.g. a list of lists or an array of arrays.

The SelectMany signature is as follows:
```
SelectMany<TSource, TResult>(
    Func<TSource, IEnumerable<TResult>>
)
```

## Example to Understand SelectMany
In the example below, we are using SelectMany to flatten the nested List as shown:

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace SelectManyDemo
{
    class SelectMany
    {
        static void Main(string[] args)
        {
            var numbers = new List<List<int>>()
            {
                new List<int>() { 1, 2, 3 },
                new List<int>() { 4, 5 },
                new List<int>() { 6 }
            };

            IEnumerable<int> flattened = numbers.SelectMany(num => num);
            foreach(int num in flattened)
            {
                Console.WriteLine(num);
            }
        }
    }
}
```

## LINQ SelectMany in Query Syntax
There is no SelectMany operator in query syntax but we can work around this by writing multiple from clauses in the query:

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace SelectManyDemo
{
    class SelectMany
    {
        static void Main(string[] args)
        {
            var numbers = new List<List<int>>()
            {
                new List<int>() { 1, 2, 3 },
                new List<int>() { 4, 5 },
                new List<int>() { 6 }
            };

            IEnumerable<int> flattened2 = from numbersList in numbers
                                          from number in numbersList
                                          select number;
            foreach(int number in flattened2)
            {
                Console.WriteLine(number);
            }
        }
    }
}
```

## Example to Understand LINQ SelectMany Projection Method with Complex Data Type

Create a class file named Student.cs and copy and paste the following code. As you can see, we have created the following Student class with four properties. Further, if you notice, the Programming property of the Student class returns `List<string>`. Here, we have also created one method to return the List of students, which will act as our data source.

```C#
using System.Collections.Generic;

namespace SelectManyDemo
{
    class Student
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public List<string> Programming { get; set; }

        public static List<Student> GetStudents()
        {
            return new List<Student>()
            {
                new Student(){ID = 1, Name = "James", Email = "James@j.com", Programming = new List<string>() { "C#", "Java", "C++"} },
                new Student(){ID = 2, Name = "Sam", Email = "Sara@j.com", Programming = new List<string>() { "WCF", "SQL Server", "C#" }},
                new Student(){ID = 3, Name = "Patrik", Email = "Patrik@j.com", Programming = new List<string>() { "MVC", "Java", "LINQ"} },
                new Student(){ID = 4, Name = "Sara", Email = "Sara@j.com", Programming = new List<string>() { "ADO.NET", "C#", "LINQ" } }
            };
        }
    }
}
```

Now, our requirement is to Project all Programming strings of all the Students to a single `IEnumerable<string>`. As you can see, we have four students, so there will be 4 `IEnumerable<string>` sequences. And, we need to flatten to form a single sequence, i.e., a single `IEnumerable<string>` sequence.

Let's achieve this requirement using both Query and Method syntax.

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace SelectManyDemo
{
    class SelectMany
    {
        static void Main(string[] args)
        {
            IEnumerable<string> programming1 = Student.GetStudents().SelectMany(student => student.Programming);
            foreach(string  programming in programming1)
            {
                Console.WriteLine(programming);
            }

            IEnumerable<string> programming2 = from student in Student.GetStudents()
                                               from program in student.Programming
                                               select program;
            foreach(string program in programming2)
            {
                Console.WriteLine(program);
            }
        }
    }
}
```

## When to Use SelectMany
- **Flattening nested collections**: If you have a collection of objects, each of which contains another collection, and you want to combine all the nested collections into a single flat collection, SelectMany is the right choice.
- **Cross product or Cartesian product**: When you need to perform a cross join or Cartesian product between two sequences where each item from the first sequence is paired with every item of the second sequence. This is often used in scenarios where you want to combine elements from different sources.
- **Querying multi-level hierarchies**: In scenarios where you have multi-level nested structures, and you want to retrieve items from a deeper level directly. For example, accessing grandchild elements in a tree-like structure.
- **Concatenating sequences inside a collection**: If you have a collection where each element itself is a sequence, and you want to concatenate these sequences into one single sequence.