# LINQ Extension Methods

Extension Methods allow us to add methods to existing types without creating a new derived type, recompiling, or
modifying the original type.

In simple words, we can say that the Extension methods can be used as an approach to extending the functionality of
a class by adding new methods into the existing class if the source code of the class is not available or if we don’t
have any permission in making changes to the existing class.

## When to use extension methods in C#

- You need a method on an existing type, and you are not the owner of the source code of that type.
- You need a method on an existing type; you do not own the source code of that type, but that type is an interface.
- You need a method on an existing type, you do not own the source code, and that type is not an interface, but adding
  the method creates undesired coupling.

## How to Implement Extension Methods in C#

Assuming we want to add our own method to the string class, the method is called **GetWordCount()**, which will count
the number of words present in a string separated by a space. For example, if the string is "Hello World", calling the
method on the string, i.e. `"Hello World".GetWordCount()` should return 2.

We cannot define the GetWordCount() method directly in the string class as we do not own the string class. The string
class belongs to the System namespace, owned by the .NET framework.

The alternative solution is to write a wrapper class as shown below:

```C#:line-numbers{5-15}
using System;

namespace ExtensionMethods
{
    public class ExtensionHelper
    {
        public static int GetWordCount(string str)
        {
            if (!String.IsNullOrEmpty(str))
            {
                return str.Split(' ').Length;
            }
            return 0;
        }
    }
}
```

The above ExtensionHelper Wrapper class works fine, but the problem is that we cannot call the GetWordCount()
method using the string object, as shown below which was our goal:

`int wordCount = sentence.GetWordCount();`

Instead, we need to call the GetWordCount() method, as shown below

`int wordCount = ExtensionHelper.GetWordCount(sentence);`

### How do you convert the above GetWordCount() method to an Extension Method of the String class?

To make the above GetWordCount() method an extension method, we need to make the following changes:

- Make `ExtensionHelper` class a static class.
- The type the method extends (i.e. string), should be passed as the first parameter preceding the "this" keyword to the
  `GetWordCount()` method.

To make the above GetWordCount() method an extension method, we need to make the following changes.

```C#:line-numbers{16-23}
using System;

namespace ExtensionMethods
{
    class ExtensionMethods
    {
        static void Main(string[] args)
        {
            string sentence = "Hello World, C# is fun";
            int wordCount = sentence.GetWordCount();
            Console.WriteLine(wordCount); // 5
        }
    }
    public static class ExtensionHelper
    {
        public static int GetWordCount(this string str)
        {
            if (!String.IsNullOrEmpty(str))
            {
                return str.Split(' ').Length;
            }
            return 0;
        }
    }
}
```

Under the hood, this is how the extension methods are executed:

`int wordCount = sentence.GetWordCount();` &rarr; `int wordCount = ExtensionHelper.GetWordCount(sentence);`

## LINQ Extension Methods

LINQ (Language Integrated Query) extension methods in C# are a set of methods provided by the System.Linq namespace
that extends the capabilities of collections (like arrays, lists, and other types implementing `IEnumerable<T>`) by
adding query functionality.

These methods enable querying collections using a SQL-like syntax directly in C#. Here’s an overview of some commonly
used LINQ extension methods:

### Where

Filters a sequence based on a predicate

`var filteredResult = collection.Where(item => item.Property == someValue);`

### Select

Projects each element of a sequence into a new form.

`var projectedResult = collection.Select(item => new { item.Property1, item.Property2 });`

### OrderBy/OrderByDescending

Sorts the elements of a sequence in ascending or descending order.

```C#
var sortedResult = collection.OrderBy(item => item.Property);
var sortedDescendingResult = collection.OrderByDescending(item => item.Property);
```

### GroupBy

Groups the elements of a sequence.

`var groupedResult = collection.GroupBy(item => item.Property);`

### FirstOrDefault / LastOrDefault

Returns the first or last element of a sequence or a default value if no element is found.

```C#
var firstItem = collection.FirstOrDefault();
var lastItem = collection.LastOrDefault();
```

### Sum / Min / Max / Average

Computes the sum, minimum, maximum, or average of a sequence.

`var total = collection.Sum(item => item.NumericProperty);`

### Any/All

Checks if any or all sequence elements satisfy a condition.

```C#
bool hasItems = collection.Any();
bool allMatchCondition = collection.All(item => item.Property > someValue);
```

### Distinct

Returns distinct elements from a sequence.

`var distinctItems = collection.Distinct();`

### Count

Counts the elements in a sequence, optionally matching a specific condition.

```C#
int count = collection.Count();
int conditionalCount = collection.Count(item => item.Property == someValue);
```

### Intersect / Except / Union

Performs set operations like intersection, difference, and union on sequences.

`var commonElements = collection1.Intersect(collection2);`
