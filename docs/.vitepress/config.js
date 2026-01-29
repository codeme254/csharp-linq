import { defineConfig } from "vitepress";

const config = {
  title: "C# LINQ Tutorial",
  head: [["link", { rel: "icon", href: "/csharp.png" }]],
  cleanUrls: true,
  rewrites: {
    "2-different-ways-to-write-LINQ-queries.md":
      "different-ways-to-write-linq-queries.md",
    "3-IEnumerable-and-IQueryable.md": "IEnumerable-and-IQueryable.md",
    "4-LINQ-extension-methods.md": "LINQ-extension-methods.md",
  },
  themeConfig: {
    nav: [
      { text: "GitHub", link: "https://github.com/codeme254/csharp-linq" },
      {
        text: "Dotnet LINQ Tutorials",
        link: "https://dotnettutorials.net/course/linq/",
      },
    ],
    sidebar: [
      { text: "What is LINQ?", link: "/" },
      {
        text: "Different Ways to Write LINQ Queries",
        link: "/different-ways-to-write-linq-queries.md",
      },
      {
        text: "IEnumerable and IQueryable in C#",
        link: "/IEnumerable-and-IQueryable.md",
      },
      {
        text: "LINQ Extension Methods",
        link: "/LINQ-extension-methods.md",
      },
    ],
  },
};

export default defineConfig(config);
