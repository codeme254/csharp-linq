# Where

The Where operator comes under filtering operators category in LINQ.

Filtering is the process of getting only those elements from a data source that satisfy the given condition.

Two methods provided by LINQ in C# are used for filtering are:
- Where method
- OfType method

The LINQ Where Method is used for filtering collections based on a predicate that takes each element in the collection and returns a boolean value. If the function returns true for an element, it is included in the result; otherwise, it’s excluded.

A predicate is a function that takes an element of the sequence as input and returns a boolean value (true or false).

The Where method returns all the elements for which the predicate returns true.

:::info NOTE
It's important to note that the Where method uses deferred execution. This means the filtering is not actually performed when the Where method is called. Instead, the filtering happens when you iterate over the filtered collection, like when using a for each loop or converting it to a list or an array.
:::

## Example to Understand the Where Operator
In the example below, we have a list of number and we are using the Where operator to get all the numbers that are greater than 5:

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace WhereDemo
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = new List<int>() { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

            // Method Syntax
            IEnumerable<int> filterdData1 = numbers.Where(number => number > 5);
            
            foreach(int num in filterdData1)
            {
                Console.WriteLine(num);
            }

            // Query Syntax
            IEnumerable<int> filteredData2 = from num in numbers
                                             where num > 5
                                             select num;
            foreach(int num in filteredData2)
            {
                Console.WriteLine(num);
            }
        }
    }
}
```

:::info
The delegate that is passed to the Where function takes in two parameters, the first parameter is the element itself, the second parameter is the index of that element
:::



