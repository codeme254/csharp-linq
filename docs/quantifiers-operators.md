# Quantifier Operators

Quantifier operators check whether some or all elements in a sequence or collection satisfy a condition.

These operators can be applied to sequences to determine the presence or absence of elements that meet specific criteria.

These operators return a Boolean value indicating whether the condition is true for any or all elements in the collection.

Quantifier operators include:
- **Any**: checks if any elements in a sequence satisfy a given condition. If at least one element meets the condition, it returns true; otherwise, it returns false. It can also be used without a condition to check if the sequence contains any elements at all.
- **All**: determines whether all elements in a sequence satisfy a specified condition. It returns true if every element meets the condition and false if at least one element does not.
- **Contains**: checks if the sequence contains a specific element. It can be used to determine if a sequence contains a particular value, returning true if the value is found and false otherwise.

## All Method
The All method checks whether every element in a collection satisfies a given condition.

It returns true if every element in the sequence satisfies the condition specified by the provided predicate or false if at least one element does not.

### Example to Understand the All Method
In the example below, we have a list of integers and we want to check if all of them are greater than 10.

:::info Note:
there's no operator called All in query syntax so we used mixed syntax here
:::

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace AllMethod
{
    internal class AllMethod
    {
        static void Main(string[] args)
        {
            List<int> nums = new List<int>()
            {
                11, 22, 33, 44, 55
            };

            bool allGT10 = nums.All(num => num > 10);
            if(allGT10)
            {
                Console.WriteLine("All numbers are greater than 10");
            } 
            else
            {
                Console.WriteLine("Not all numbers are greater than 10");
            }

            allGT10 = (from num in nums
                       select num).All(num => num > 10);
            if (allGT10)
            {
                Console.WriteLine("All numbers are greater than 10");
            }
            else
            {
                Console.WriteLine("Not all numbers are greater than 10");
            }
        }
    }
}
```

### All Method With a Complex Type
We are going to work with the following Student and Subject classes. So, create a class file with the name Student.cs and then copy and paste the following code. As you can see, the Student class has four properties: ID, Name, TotalMarks, and Subjects. Here, within the Student class, we have also created one method, i.e., GetAllStudnets(), which will return the list of all the students. The Subject class has only two properties, i.e., SubjectName and Marks.

:::code-group
```C# [Student.cs]
using System.Collections.Generic;
namespace StudentData
{
    public class Subject
    {
        public string SubjectName { get; set; }
        public int Marks { get; set; }
    }
    public class Student
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int TotalMarks { get; set; }
        public List<Subject> Subjects { get; set; }

        public static List<Student> GetStudents()
        {
            List<Student> listStudents = new List<Student>()
            {
                new Student{ID= 101,Name = "Preety", TotalMarks = 265,
                    Subjects = new List<Subject>()
                    {
                        new Subject(){SubjectName = "Math", Marks = 80},
                        new Subject(){SubjectName = "Science", Marks = 90},
                        new Subject(){SubjectName = "English", Marks = 95}
                    }},
                new Student{ID= 102,Name = "Priyanka", TotalMarks = 278,
                    Subjects = new List<Subject>()
                    {
                        new Subject(){SubjectName = "Math", Marks = 90},
                        new Subject(){SubjectName = "Science", Marks = 95},
                        new Subject(){SubjectName = "English", Marks = 93}
                    }},
                new Student{ID= 103,Name = "James", TotalMarks = 240,
                    Subjects = new List<Subject>()
                    {
                        new Subject(){SubjectName = "Math", Marks = 70},
                        new Subject(){SubjectName = "Science", Marks = 80},
                        new Subject(){SubjectName = "English", Marks = 90}
                    }},
                new Student{ID= 104,Name = "Hina", TotalMarks = 275,
                    Subjects = new List<Subject>()
                    {
                        new Subject(){SubjectName = "Math", Marks = 90},
                        new Subject(){SubjectName = "Science", Marks = 90},
                        new Subject(){SubjectName = "English", Marks = 95}
                    }},
                new Student{ID= 105,Name = "Anurag", TotalMarks = 255,
                    Subjects = new List<Subject>()
                    {
                        new Subject(){SubjectName = "Math", Marks = 80},
                        new Subject(){SubjectName = "Science", Marks = 90},
                        new Subject(){SubjectName = "English", Marks = 85}
                    }
                },
            };

            return listStudents;
        }
    }
}
```
:::
Our requirement is to check whether all students have total marks greater than 250, for this, we can use the All method using both method syntax and mixed syntax as shown:

```C#
using System;
using System.Collections.Generic;
using System.Linq;
using StudentData;

namespace AllMethod
{
    internal class AllMethod
    {
        static void Main(string[] args)
        {
            bool allGt250 = Student.GetStudents().All(s => s.TotalMarks > 250);
            Console.WriteLine(allGt250);

            allGt250 = (from s in Student.GetStudents()
                        select s).All(s => s.TotalMarks > 250);
            Console.WriteLine(allGt250);
        }
    }
}
```

If you see our student’s collection, you will observe that each student object has another collection called Subjects. Now we need to fetch all the student details whose mark on each subject exceeds 80. That means we will not apply the LINQ All method to the student’s collection. Rather, we will apply the LINQ All method to the Subject collection of each student.

The Where Extension method takes a predicate as a parameter, returning a boolean true and false. Boolean TRUE means the element will return, and False means the record will not return. We are applying the LINQ All method on the Subject property within the Where Extension method. Now, for each student, the LINQ All method will execute, and it will check whether all the Subject Marks satisfied the given condition, i.e., Marks > 80, and if satisfied, the All Method will return True, and Where extension method will return that Student in output.

```C#
using System;
using System.Collections.Generic;
using System.Linq;
using StudentData;

namespace AllMethod
{
    internal class AllMethod
    {
        static void Main(string[] args)
        {
            IEnumerable<Student> result = Student.GetStudents().Where(s => s.Subjects.All(st => st.Marks > 80));

            foreach(Student student in result)
            {
                Console.WriteLine($"{student.Name}");
                foreach(Subject subject in student.Subjects)
                {
                    Console.WriteLine($" {subject.SubjectName} - {subject.Marks}");
                }
            }

            result = (from s in Student.GetStudents()
                      select s).Where(s => s.Subjects.All(st => st.Marks > 80));

            foreach (Student student in result)
            {
                Console.WriteLine($"{student.Name}");
                foreach (Subject subject in student.Subjects)
                {
                    Console.WriteLine($" {subject.SubjectName} - {subject.Marks}");
                }
            }
        }
    }
}
```

## Any Method
It is used to check whether any sequence element satisfies a condition or if the sequence contains any elements when no condition is specified. If any of the elements satisfy the given condition, it returns true; otherwise, it returns false.

It is useful for determining the existence of an element(s) that satisfies a condition without needing to iterate through the entire collection manually.

The any method has two overloads:
- **Any()**: checks if a sequence contains any elements at all. Does not require a condition, returns true if the sequence has at least one element, otherwise, it returns false.
- **Any(predicate)**: This overload takes a predicate function as a parameter, representing the condition to check for the elements in the sequence. It returns true if at least one element in the sequence satisfies the condition specified by the predicate; otherwise, it returns false.

### Example to Understand the Any Method
In the example below, we have a list of integers, we want to check whether the collection contains at least one integer that is greater than 50.

:::info NOTE:
There's no Any method in the query syntax, so we use the mixed syntax as shown in the example
:::

```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace AnyMethod
{
    internal class AnyMethod
    {
        static void Main(string[] args)
        {
            List<int> nums = new List<int>()
            {
                11, 22, 33, 44, 55
            };
            bool anyGT50 = nums.Any(x => x > 50);
            Console.WriteLine(anyGT50);

            anyGT50 = (from num in nums 
                       select num).Any(x => x > 50);
            Console.WriteLine(anyGT50);
        }
    }
}
```

### Any Method With Complex Type
We are going to work with the following Student and Subject classes. Create a class file named Student.cs and copy and paste the following code. As you can see, the Student class has four properties, i.e., ID, Name, TotalMarks, and Subjects. Here, within the Student class, we have also created one method, i.e., GetAllStudnets(), which will return the list of all the students. The Subject class has only two properties, i.e., SubjectName and Marks.

:::code-group
```C# [Student.cs]
using System.Collections.Generic;
namespace StudentData
{
    public class Subject
    {
        public string SubjectName { get; set; }
        public int Marks { get; set; }
    }
    public class Student
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int TotalMarks { get; set; }
        public List<Subject> Subjects { get; set; }

        public static List<Student> GetStudents()
        {
            List<Student> listStudents = new List<Student>()
            {
                new Student{ID= 101,Name = "Preety", TotalMarks = 265,
                    Subjects = new List<Subject>()
                    {
                        new Subject(){SubjectName = "Math", Marks = 80},
                        new Subject(){SubjectName = "Science", Marks = 90},
                        new Subject(){SubjectName = "English", Marks = 95}
                    }},
                new Student{ID= 102,Name = "Priyanka", TotalMarks = 278,
                    Subjects = new List<Subject>()
                    {
                        new Subject(){SubjectName = "Math", Marks = 90},
                        new Subject(){SubjectName = "Science", Marks = 95},
                        new Subject(){SubjectName = "English", Marks = 93}
                    }},
                new Student{ID= 103,Name = "James", TotalMarks = 240,
                    Subjects = new List<Subject>()
                    {
                        new Subject(){SubjectName = "Math", Marks = 70},
                        new Subject(){SubjectName = "Science", Marks = 80},
                        new Subject(){SubjectName = "English", Marks = 90}
                    }},
                new Student{ID= 104,Name = "Hina", TotalMarks = 275,
                    Subjects = new List<Subject>()
                    {
                        new Subject(){SubjectName = "Math", Marks = 90},
                        new Subject(){SubjectName = "Science", Marks = 90},
                        new Subject(){SubjectName = "English", Marks = 95}
                    }},
                new Student{ID= 105,Name = "Anurag", TotalMarks = 255,
                    Subjects = new List<Subject>()
                    {
                        new Subject(){SubjectName = "Math", Marks = 80},
                        new Subject(){SubjectName = "Science", Marks = 90},
                        new Subject(){SubjectName = "English", Marks = 85}
                    }
                },
            };

            return listStudents;
        }
    }
}
```
:::

Our requirement is to check whether any students have total marks greater than 250, for this, we can use the Any  method as shown:

```C#
using System;
using System.Collections.Generic;
using System.Linq;
using StudentData;

namespace AnyMethod
{
    internal class AnyMethod
    {
        static void Main(string[] args)
        {
            bool anyHasGT250 = Student.GetStudents().Any(s => s.TotalMarks > 250);
            Console.WriteLine(anyHasGT250);

            anyHasGT250 = (from student in Student.GetStudents()
                           select student).Any(s => s.TotalMarks > 250);
            Console.WriteLine(anyHasGT250);
        }
    }
}
```

## Contains Method
Used to check if a sequence contains a specific element.

It returns a boolean value indicating whether the element exists in the sequence. The method returns a Boolean value: true if the element is found in the collection and false otherwise.

:::info NOTE:
The Contains method is available in both `System.Collection.Generic` and `System.Linq` namespaces
:::

### Example to understand the Contains Method
In the example below, we have a list of integers and we are using the contains method to check whether 33 exists using both method and query syntax:

```C#
using System;
using System.Linq;

namespace ContainsMethod
{
    internal class ContainsMethod
    {
        static void Main(string[] args)
        {
            int[] nums = { 11, 22, 33, 44, 55 };

            bool exists33 = nums.Contains(33);
            Console.WriteLine(exists33);

            exists33 = (from num in nums
                        select num).Contains(33);
            Console.WriteLine(exists33);
        }
    }
}
```