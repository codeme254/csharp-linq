# C# LINQ

LINQ stands for Language Integrated Query, a Microsoft .NET Framework that provides a standardized way to query
data from various data sources using a common syntax within programming languages like C# or VB.

LINQ allows developers to write queries to retrieve, manipulate, and transform data from different data sources,
such as databases, collections, XML, and In-Memory objects.

## LINQ Supported Data Sources

LINQ can be used with several data sources, and there are different flavors of LINQ based on what you are querying:

- **LINQ to Objects**: Refers to using LINQ queries with any IEnumerable or `IEnumerable<T>` collection directly in
  memory.
- **LINQ to SQL**: Allows querying of SQL Server databases, translating LINQ queries into SQL queries that are then
  executed against the database.
- **LINQ to XML (formerly known as XLINQ)**: Provides an in-memory XML programming interface that leverages LINQ to
  offer a simpler and more declarative way to read, manipulate, and write XML data.
- **LINQ to Entities**: A part of the ADO.NET Entity Framework, LINQ to Entities allows querying data sources defined
  by the Entity Data Model (EDM) through LINQ.
- **LINQ to DataSet**: A part of the ADO.NET Entity Framework, LINQ to Entities allows querying data sources
  defined by the Entity Data Model (EDM) through LINQ.

:::info NOTE
All LINQ operators are available in `System.Linq` namespace
:::
