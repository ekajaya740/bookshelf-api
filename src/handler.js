const books = require('./books');

const createBookHandler = (request, h) => {
  return h.response({
    status: 'success',
    message: '',
    data: {
      bookId: '',
    },
  });
};

const indexBooksHandler = (request, h) => {
  return h.response({
    status: 'success',
    data: {
      books: books,
    },
  });
};

const updateBookHandler = (request, h) => {
  return h.response({
    status: 'success',
    message: 'Buku berhasil diperbarui'
  });
};

const detailsBookHandler = (request, h) => {

  return h.response({
    status: 'success',
    data: {
      book: {}
    }
  });
};

const deleteBookHandler = (request, h) => {
  return h.response({
    status: 'success',
    message: 'Buku berhasil dihapus'
  });
};

module.exports = {
  createBookHandler,
  indexBooksHandler,
  updateBookHandler,
  detailsBookHandler,
  deleteBookHandler,
};
