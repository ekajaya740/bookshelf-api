const {
  createBookHandler,
  indexBooksHandler,
  updateBookHandler,
  detailsBookHandler,
  deleteBookHandler,
} = require("./handler");

const routes = [
  {
    method: "GET",
    path: "/books",
    handler: indexBooksHandler,
  },
  {
    method: "POST",
    path: "/books",
    handler: () => {},
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: () => {},
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: () => {},
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: () => {},
  },
];

module.exports = routes;
