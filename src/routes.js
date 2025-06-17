const {
  createBookHandler,
  indexBooksHandler,
  updateBookHandler,
  detailsBookHandler,
  deleteBookHandler,
} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/books',
    handler: indexBooksHandler,
  },
  {
    method: 'POST',
    path: '/books',
    handler: createBookHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: detailsBookHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBookHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookHandler,
  },
];

module.exports = routes;
