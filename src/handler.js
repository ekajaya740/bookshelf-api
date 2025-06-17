const books = require("./books");

const createBookHandler = (request, h) => {};

const indexBooksHandler = (request, h) => {
  return h.response({
    status: "success",
    data: {
      books: books,
    },
  });
};

const updateBookHandler = (request, h) => {};

const detailsBookHandler = (request, h) => {};

const deleteBookHandler = (request, h) => {};

module.exports = {
  createBookHandler,
  indexBooksHandler,
  updateBookHandler,
  detailsBookHandler,
  deleteBookHandler,
};
