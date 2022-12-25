import type { Data } from "$lib/types";

const data: Data = [
  {
    id: "index",
    pages: [
      { id: "0000" },
      {
        id: "0001",
        body: {
          tag: "div",
          content: {
            tag: "div",
            className: "text-center m-auto",
            content: [
              {
                tag: "h1",
                className: "text-6xl font-bold",
                content: "ならしな",
              },
              { tag: "h2", className: "text-2xl", content: "執筆書庫" },
            ],
          },
        },
      },
      {
        id: "0002",
        body: {
          tag: "div",
          content: { tag: "p", content: "About Me" },
        },
      },
      {
        id: "0003",
        body: {
          tag: "div",
          content: { tag: "p", content: "Jason Karjadi" },
        },
      },
      {
        id: "0004",
        body: {
          tag: "div",
          content: { tag: "p", content: "Lorem ipsum" },
        },
      },
      {
        id: "0005",
        body: {
          tag: "div",
          content: { tag: "p", content: "placeholder" },
        },
      },
    ],
  },
  {
    id: "about",
    breadcrumbs: ["あらまし"],
    pages: [{ id: "0000" }],
  },
  {
    id: "books",
    breadcrumbs: ["ふみぐら"],
    pages: [{ id: "0000" }],
  },
  {
    id: "books/001",
    breadcrumbs: ["ふみぐら", "國語學槪論"],
    pages: [{ id: "0000" }],
  },
];

export default data;
