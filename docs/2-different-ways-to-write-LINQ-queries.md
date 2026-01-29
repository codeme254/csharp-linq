# Different Ways to Write LINQ Queries

To write a LINQ query, we need the following three things:

- Data source (In-Memory objects, SQL Server, XML Document, e.t.c)
- Query
- Execution of the query

A query refers to a set of instructions applied to a data source to perform certain operations and then tells the shape
of the output from the query.

A LINQ query is made up of 3 things:

- Initialization (to work with a particular data source)
- Condition (where, filter, sort e.t.c)
- Selection (single selection, group selection, or joining)

## Different Ways to Write a LINQ Query

We can write LINQ queries in 3 different ways:

- Query Syntax
- Method Syntax
- Mixed Syntax (Query + Method)

Note: From the performance point of view, there is no difference between the above three approaches. So, which you
need to use totally depends on your personal preference. But the point that you need to keep in mind is, behind the
scenes, the LINQ queries written using query syntax are translated into their lambda expressions before they are
compiled.

### Query Syntax

Query Syntax is more similar to SQL, providing a readable and declarative way of writing queries.

Under the hood, it gets translated into Method Syntax at compile time.

This is one of the easy ways to write complex LINQ queries in an easy and readable format.

If you are familiar with SQL Queries, it will be easy for you to write LINQ queries using this query syntax.

The syntax is given below.

![LINQ Query Syntax](/images/LINQ-query-syntax.png)

Characteristics:

- Resembles SQL-like declarative style.
- It can be more readable, especially if you are familiar with SQL.
- Not all operations can be expressed in query syntax, some require a switch to method syntax.

#### Query Syntax Example 1:

In the example below, we have a list of integers, and we need to write a LINQ query using the query syntax to find all
the numbers that are greater than 5.

```C#:line-numbers{17-19}
using System;
using System.Collections.Generic;
using System.Linq;

namespace LINQ
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Data source
            List<int> integerList = new List<int>()
            {
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            };

            var numbersGreaterThan5 = from obj in integerList // Data Source
                                      where obj > 5 // Condition
                                      select obj; // Selection
            foreach(int item in numbersGreaterThan5)
            {
                Console.WriteLine($"{item}");
            }
        }
    }
}
```

#### Query Syntax Example 2

In the example below, we have a list of integers, and we need to write a LINQ query using the query syntax to find all
the numbers that are even numbers and all numbers that are odd numbers.

```C#:line-numbers{17,18,19}
using System;
using System.Collections.Generic;
using System.Linq;

namespace LINQ
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Data source
            List<int> integerList = new List<int>()
            {
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            };

            var evenNumbers = from obj in integerList
                              where obj % 2 == 0
                              select obj;
            foreach(int number  in evenNumbers)
            {
                Console.WriteLine($"{number} is an even number");
            }

            var oddNumbers = from obj in integerList
                             where obj % 2 != 0
                             select obj;
            foreach(int number in  oddNumbers)
            {
                Console.WriteLine($"{number} is an odd number");
            }
        }
    }
}
```

### Method Syntax

Method Syntax (also known as Fluent Syntax or Lambda Syntax) uses extension methods included in the
`System.Linq` namespace and can be chained together to perform complex queries.

It is similar to calling methods in a traditional object-oriented programming language.

Method syntax has become most popular nowadays for writing LINQ queries.

In this approach, the LINQ query is written using multiple methods by combining them with a dot (.), i.e., method
chaining.

The Syntax is given below:

![LINQ method syntax](/images/LINQ-method-syntax.png)

Characteristics:

- Utilizes lambda expressions
- It can be more concise for complex queries
- Offers slightly more flexible methods and flexibility than query syntax
- It can be easier to understand for those familiar with lambda expressions and functional programming.

#### Method Syntax Example 1

In the example below, we have a list of integers, and we need to write a LINQ query using the method syntax to find all
the numbers that are greater than 5.

```C#:line-numbers{16}
using System;
using System.Collections.Generic;
using System.Linq;

namespace LINQ
{
    internal class MethodSyntax
    {
        static void Main(string[] args)
        {
            List<int> integerList = new List<int>()
            {
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            };

            var greaterThan5 = integerList.Where(x => x > 5).ToList();

            foreach(int item in greaterThan5)
            {
                Console.WriteLine(item);
            }
        }
    }
}
```

#### Method Syntax Example 2

In the example below, we have a list of integers, and we need to write a LINQ query using the method syntax to find all
the numbers that are even numbers and all numbers that are odd numbers.

```C#:line-numbers{16}
using System;
using System.Collections.Generic;
using System.Linq;

namespace LINQ
{
    internal class MethodSyntax
    {
        static void Main(string[] args)
        {
            List<int> integerList = new List<int>()
            {
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            };

            var evenNumbers = integerList.Where(x => x % 2 == 0).ToList();

            foreach( int number in evenNumbers)
            {
                Console.WriteLine($"{number} is an even number");
            }

            var oddNumbers = integerList.Where(x => x % 2 != 0).ToList();

            foreach(int number in oddNumbers)
            {
                Console.WriteLine($"{number} is an odd number");
            }
        }
    }
}
```

### Mixed Syntax

You can also mix both syntaxes, although this is less common. This is the combination of both Query and Method syntax.

The syntax is given below.

![LINQ Mixed Syntax](/images/LINQ-mixed-syntax.png)

#### Mixed Syntax Example

In the example below, we are filtering out all numbers that are greater than 5 and then we are finding their sum:

```C#:line-numbers{16,17,18}
using System;
using System.Collections.Generic;
using System.Linq;

namespace LINQ
{
    internal class MixedSyntax
    {
        static void Main(string[] args)
        {
            List<int> integerList = new List<int>()
            {
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10
            };

            int sum = (from obj in integerList
                       where obj > 5
                       select obj).Sum();
            Console.WriteLine(sum);
        }
    }
}

```
