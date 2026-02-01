# OfType

The LINQ OfType Operator in C# filters specific data from a data source based on the data type we passed to this operator. For example, if we have a collection that stores integer and string values, and if we need to fetch either the integer values or only the string values from that collection, then we need to use the LINQ OfType Operator.

This is useful when dealing with a non-generic IEnumerable or a collection of objects of various types.

## Example to Understand OfType Operator

In the example below, we have a list that contains strings, integers and floats, we want to fetch only integers from the list:

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace Day55
{
    class OfTypeOperator
    {
        static void Main(string[] args)
        {
            List<object> myList = new List<object>()
            {
                "Hello", 21, 92, 44, 81, "world", 55.5, 98.2f, 800, "Jane"
            };

            // Method Syntax
            IEnumerable<int> integers = myList.OfType<int>();

            foreach(int i in integers)
            {
                Console.WriteLine(i);
            }

            // Query Syntax
            IEnumerable<int> integers2 = from obj in myList.OfType<int>()
                                         select obj;
            foreach(int i in integers2)
            {
                Console.WriteLine(i);
            }
        }
    }
}
```
