# GroupBy
The LINQ GroupBy method is a powerful feature in .NET that allows us to organize elements of a collection into groups based on a specified key value.

The GroupBy Method groups elements that share a common attribute, allowing us to perform operations on each group. This method is especially useful for aggregating data, performing calculations on subsets of data, and organizing data into a more manageable format.

Each group is represented by an `IGrouping<TKey, TSource>` object, where TKey is the type of the key, and TSource is the type of the elements in the group.

## Example to Understand the GroupBy Method

We will use the following Student class to understand the GroupBy Method. So, create a class file named Student.cs and copy and paste the following code. This class has five properties: ID, Name, Gender, Branch, and Age. This class also has one method called GetStudents(), which returns a list of all students and will be our data source.

:::code-group
```C# [Student.cs]
using System.Collections.Generic;
namespace StudentData
{
    public class Student
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public string Branch { get; set; }
        public int Age { get; set; }
        public static List<Student> GetStudents()
        {
            return new List<Student>()
            {
                new Student { ID = 1001, Name = "Preety", Gender = "Female", Branch = "CSE", Age = 20 },
                new Student { ID = 1002, Name = "Snurag", Gender = "Male", Branch = "ETC", Age = 21  },
                new Student { ID = 1003, Name = "Pranaya", Gender = "Male", Branch = "CSE", Age = 21  },
                new Student { ID = 1004, Name = "Anurag", Gender = "Male", Branch = "CSE", Age = 20  },
                new Student { ID = 1005, Name = "Hina", Gender = "Female", Branch = "ETC", Age = 20 },
                new Student { ID = 1006, Name = "Priyanka", Gender = "Female", Branch = "CSE", Age = 21 },
                new Student { ID = 1007, Name = "santosh", Gender = "Male", Branch = "CSE", Age = 22  },
                new Student { ID = 1008, Name = "Tina", Gender = "Female", Branch = "CSE", Age = 20  },
                new Student { ID = 1009, Name = "Celina", Gender = "Female", Branch = "ETC", Age = 22 },
                new Student { ID = 1010, Name = "Sambit", Gender = "Male",Branch = "ETC", Age = 21 }
            };
        }
    }
}
```
:::

### Grouping by a Single Property
Now, we want to group the students based on Branch. The following example organizes the students into groups based on their branch. This means that students with the same branch will be stored in the same group, where each group has a key corresponding to the student collection. Here, the key will be the branch and the collection will be the student(s) belonging to that branch.

```C#
using System;
using System.Collections.Generic;
using System.Linq;
using StudentData;

namespace GroupByMethod
{
    internal class GroupByMethod
    {
        static void Main(string[] args)
        {
            // Method Syntax
            IEnumerable<IGrouping<string, Student>> studentGrouping = Student.GetStudents().GroupBy(s => s.Branch);
            foreach(IGrouping<string, Student> group in studentGrouping)
            {
                Console.WriteLine($"{group.Key} : {group.Count()}");
                foreach(Student student in group)
                {
                    Console.WriteLine($" {student.Name} - {student.Branch}");
                }
            }

            // Query Syntax
            studentGrouping = (from std in Student.GetStudents()
                               group std by std.Branch);
            foreach (IGrouping<string, Student> group in studentGrouping)
            {
                Console.WriteLine($"{group.Key} : {group.Count()}");
                foreach (Student student in group)
                {
                    Console.WriteLine($" {student.Name} - {student.Branch}");
                }
            }
        }
    }
}
```