# Set Operators

LINQ Provides several set operators, these are:

- **Distinct**: removes duplicates. `var uniqueNumbers = numbers.Distinct();`
- **Union**: produces a sequence that contains the unique elements from two or more sequences. `var combinedData = collection1.Union(collection2);`
- **Intersect**: produces a new sequence that includes all elements that exist in both of the source sequences. `var commonElements = collection1.Intersect(collection2);`
- **Except**: Returns the elements from the first sequence that do not exist in the second sequence. `var uniqueItems = collection1.Except(collection2);`

## Distinct Set Operator

The Distinct method in LINQ (Language Integrated Query) is a method used to remove duplicate elements from a collection. It’s commonly used when working with arrays, lists, or any other type of IEnumerable in .NET.

In the example below, we have an integer list that contains duplicate values, we want to remove the duplicate values and return only the distinct ones, we
can use the distinct operator as shown:

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace DistinctOperator
{
    internal class DistinctOperator
    {
        static void Main(string[] args)
        {
            List<int> nums = new List<int>()
            {
                1, 2, 3, 2, 3, 4, 4, 5, 6, 3, 4, 5
            };

            // Method syntax
            IEnumerable<int> unique = nums.Distinct();
            foreach(int num in unique)
            {
                Console.WriteLine(num);
            }

            // Query Syntax
            IEnumerable<int> unique2 = (from num in nums
                                       select num).Distinct();
            foreach(int num in unique2)
            {
                Console.WriteLine(num);
            }
        }
    }
}
```

## Except Set Operator

The Except method in LINQ (Language Integrated Query) for C# produces the set difference of two sequences. This method returns a new sequence containing elements from the first sequence that are not in the second sequence.

In the example below, we have two integer lists, we are going to use the except method to return all the elements in the first list that are not there in the second list.

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace ExceptMethod
{
    internal class ExceptOperator
    {
        static void Main(string[] args)
        {
            List<int> nums1 = new List<int>()
            {
                1, 2, 3, 4, 5, 6
            };
                List<int> nums2 = new List<int>()
            {
                1, 3, 5, 8, 9, 10
            };

            // Method Syntax
            IEnumerable<int> except = nums1.Except(nums2);
            foreach (int x in except)
            {
                Console.WriteLine(x);
            }

            // Query Syntax
            IEnumerable<int> except2 = (from num in nums1
                                        select num).Except(nums2);
            foreach(int num in except2)
            {
                Console.WriteLine(num);
            }
        }
    }
}
```

:::danger NOTE
**The except method will throw an exception if any of the sequences is null**
:::

## Intersect Set Operator

The Intersect method in LINQ finds common elements between two sequences (collections).

It’s useful when you need to compare two sets of data and find the elements that are present in both sets.

In the example below, we have two lists, we would like to fetch common elements that exist in both collections and for this, we will use the
Intersect method as shown:

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace IntersectMethod
{
    internal class IntersectMethod
    {
        static void Main(string[] args)
        {
            List<int> nums1 = new List<int>()
            {
                1, 2, 3, 4, 5, 6,
            };
            List<int> nums2 = new List<int>()
            {
                1, 3, 5, 8, 9, 10
            };

            // Method Syntax
            IEnumerable<int> intersection1 = nums1.Intersect(nums2);
            foreach(int num in intersection1)
            {
                Console.WriteLine(num);
            }

            // Query Syntax
            IEnumerable<int> intersection2 = (from num in nums1
                                              select num).Intersect(nums2);
            foreach(int num in intersection2)
            {
                Console.WriteLine(num);
            }
        }
    }
}
```

:::danger NOTE
**The intersect method will throw an exception if any of the sequences are null.**
:::

## Union Set Operator

The union operator combines the elements from both sequences into a new sequence while removing duplicate elements.

In the example below, we have two lists, we want to combine the elements from both sets while removing the duplicates, for this, we are going to use the
Union set operator:

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace UnionOperator
{
    internal class UnionOperator
    {
        static void Main(string[] args)
        {
            List<int> nums1 = new List<int>()
            {
                1, 2, 3, 4, 5, 6
            };
            List<int> nums2 = new List<int>()
            {
                1, 3, 5, 8, 9, 10
            };

            // Method syntax
            IEnumerable<int> union1 = nums1.Union(nums2);
            foreach(int num in union1)
            {
                Console.WriteLine(num);
            }

            // Query Syntax
            IEnumerable<int> union2 = (from num in nums1
                                       select num).Union(nums2);
            foreach(int num in union2)
            {
                Console.WriteLine(num);
            }
        }
    }
}
```

:::danger NOTE
**The Union Method will throw an exception if any sequence is null.**
:::

## The LINQ Concat Method

The concat method can also be considered a set operator.

The LINQ Concat Method in C# is used to concatenate two sequences into one sequence of the same type. It appends the elements of the second sequence to the end of the first sequence. That means it concatenates two of the same types of sequences or collections and returns a new sequence or collection without removing the duplicate elements.

In the example below, we have two integer lists and we want to concatenate them to one integer list, we will do this using the concat method:

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace ConcatOperator
{
    internal class ConcatOperator
    {
        static void Main(string[] args)
        {
            List<int> nums1 = new List<int>()
            {
                1, 2, 3, 4
            };
            List<int> nums2 = new List<int>()
            {
                2, 4, 6, 8
            };

            // Method Syntax
            IEnumerable<int> concat1 = nums1.Concat(nums2);
            foreach(int i in concat1)
            {
                Console.WriteLine(i);
            }

            // Query Syntax
            IEnumerable<int> concat2 = (from num in nums1
                                        select num).Concat(nums2);
            foreach(int i in concat2)
            {
                Console.WriteLine(i);
            }
        }
    }
}
```
