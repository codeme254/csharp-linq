# IEnumerable and IQueryable in C#

IEnumerable and IQueryable are two interfaces that are frequently used for data manipulation and querying,
but they serve different purposes and have distinct behaviors.

## IEnumerable

IEnumerable in C# is an interface that defines one method, GetEnumerator, which returns an IEnumerator object.

This interface is found in **System.Collections** namespace.

**IEnumerable is used to iterate over a collection of objects**

### `GetEnumerator` method

This is the only method defined in the IEnumerable interface. It returns an IEnumerator object, which provides the
ability to iterate through the collection by exposing a `Current` property and `MoveNext()` and `Reset()` methods.

- `Current`: a property that gets the current element in the collection.
- `MoveNext()`: advances the enumerator to the next element in the collection.
- `Reset()`: sets the enumerator to its initial position, which is before the first element in the collection.

IEnumerable is typically used with a foreach loop in C#. The foreach loop automatically uses the GetEnumerator
method and the IEnumerator object to iterate over the elements of the collection.

```C#:line-numbers
using System;
using System.Collections.Generic;
using System.Linq;

namespace IEnumerableAndIQueryable
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<int> list = new List<int>()
            {
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10
            };

            IEnumerable<int> evenNumbers = from obj in list
                              where obj % 2 == 0
                              select obj;

            foreach(int num in evenNumbers)
            {
                Console.WriteLine(num);
                Console.WriteLine(evenNumbers);
            }
        }
    }
}
```

## IQueryable

IQueryable in C# is an interface that is used to query data from a data source.

It is part of the System.Linq namespace and is a key component in LINQ (Language Integrated Query).

Unlike IEnumerable, which is used for iterating over in-memory collections, IQueryable is designed for querying data
sources where the query is not executed until the object is enumerated. This is particularly useful for remote data
sources, like databases, enabling efficient querying by allowing the query to be executed on the server side.

```C#:line-numbers
using System;
using System.Collections.Generic;
using System.Linq;

namespace IEnumerableAndIQueryable
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<int> list = new List<int>()
            {
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10
            };

            IQueryable<int> oddNumbers =  list.AsQueryable()
                .Where(num =>  num % 2 != 0);

            foreach(int num in oddNumbers)
            {
                Console.WriteLine(num);
            }
        }
    }
}
```

The point you need to remember is to return a collection of IQueryable type and call the `AsQueryable()`
method on the data source, as we did in the above example.

## Choosing Between IEnumerable and IQueryable

- Use IEnumerable when working with in-memory data collections where the data set is not excessively large.
- Use IQueryable when querying data from out-of-memory sources like databases, especially when dealing with large
  data sets, to take advantage of server-side processing and optimizations.

## Differences Between IEnumerable and IQueryable

### Namespace

- **IEnumerable**: defined in **System.Collections** namespace.
- **IQueryable**: defined in **System.Linq** namespace.

### Purpose and Data Sources

- **IEnumerable**: Primarily used for querying and manipulating in-memory collections, such as arrays, lists, and
  IEnumerable-compatible collections. Designed for querying data that is already in memory.
- **IQueryable**: Used for querying data from external data sources that may not be in memory, such as databases,
  web services, or remote data stores. Designed for querying data that resides outside the application’s memory.

### Data Source

- **IEnumerable**: It can be used with any in-memory data collection, like arrays, lists, etc.
- **IQueryable**: It is typically used for remote data sources like databases, especially with ORM frameworks
  like Entity Framework.

### Querying and Capability

- **IEnumerable**: It supports LINQ-to-Objects, meaning it can execute LINQ queries on in-memory collections.
- **IQueryable**: It supports LINQ-to-Entities, meaning it can translate LINQ queries into database-specific query
  languages (like SQL for relational databases).

### Execution Location

- **IEnumerable**: Operations are executed in memory. All data is retrieved from the collection, and subsequent
  operations are performed in memory.
- **IQueryable**: Operations are typically translated into a query language (e.g., SQL for databases) and executed
  on the data source. This allows for server-side processing and optimization.

### Lazy Evaluation

- **IEnumerable**: Supports lazy evaluation. Operations are only executed when the collection is enumerated
  (e.g., in a for each loop).
- **IQueryable**: Also supports lazy evaluation. Queries are not executed until you enumerate the results,
  allowing for efficient resource use.

### Common Use Cases

- **IEnumerable**: Used for querying and manipulating in-memory collections, filtering data, and applying
  transformations.
- **IQueryable**: Used with Entity Framework for querying databases using LINQ, where queries are translated
  into SQL statements.
