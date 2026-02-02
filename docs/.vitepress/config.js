import { defineConfig } from "vitepress";

const config = {
  title: "C# LINQ Tutorial",
  head: [["link", { rel: "icon", href: "/csharp.png" }]],
  cleanUrls: true,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: '/csharp.png',
    // siteTitle: "LINQ Tutorial",
    search: {
      provider: 'local'
    },
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
        link: "/different-ways-to-write-LINQ-queries.md",
      },
      {
        text: "IEnumerable and IQueryable in C#",
        link: "/IEnumerable-and-IQueryable.md",
      },
      {
        text: "LINQ Extension Methods",
        link: "/LINQ-extension-methods.md",
      },
      {
        text: "LINQ Operators",
        link: "/LINQ-Operators.md",
      },
      {
        text: "Select",
        link: "/Select.md",
      },
      {
        text: "SelectMany",
        link: "/SelectMany.md",
      },
      {
        text: "Where",
        link: "/Where.md",
      },
      {
        text: "OfType",
        link: "/OfType.md",
      },
      {
        text: "Set Operators",
        link: "/SetOperators.md",
      },
      {
        text: "Ordering Operators",
        link: "/ordering-operators.md",
      },
    ],
  },
};

export default defineConfig(config);
