const { nanoid } = require('nanoid');
const books = require('./books');

const createBookHandler = (request, h) => {
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

  if (!name || (name && name === '')) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    }).code(400);
  }

  if (readPage > pageCount) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    }).code(400);
  }

  const id = nanoid(16);

  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const data = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished,
    insertedAt,
    updatedAt
  };

  books.push(data);

  return h.response({
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: {
      bookId: id,
    },
  }).code(201);
};

const indexBooksHandler = (request, h) => {
  const { name, reading, finished } = request.query;


  const filtered = books.filter((book) => (name === undefined || book.name.toLowerCase().includes(name.toLowerCase())) &&
    (reading === undefined || book.reading === (reading === '1')) &&
    (finished === undefined || book.finished === (finished === '1'))
  );

  const data = filtered.map((book) => ({
    id: book.id,
    name: book.name,
    publisher: book.publisher
  }));

  return h.response({
    status: 'success',
    data: {
      books: data,
    },
  });
};

const updateBookHandler = (request, h) => {
  const { bookId } = request.params;

  const data = books.find((book) => book.id === bookId);

  if (!data) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan'
    }).code(404);
  }

  const index = books.findIndex((v) => v.id === bookId);

  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

  if (!name || (name && name === '')) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    }).code(400);
  }

  if (readPage > pageCount) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    }).code(400);
  }

  const finished = pageCount === readPage;
  const updatedAt = new Date().toISOString();

  const updated = {
    ...data,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished,
    updatedAt
  };

  books.splice(index, 1, updated);


  return h.response({
    status: 'success',
    message: 'Buku berhasil diperbarui'
  });
};

const detailsBookHandler = (request, h) => {
  const { bookId } = request.params;

  const data = books.find((book) => book.id === bookId);

  if (!data) {
    return h.response({
      status: 'fail',
      message: 'Buku tidak ditemukan'
    }).code(404);
  }


  return h.response({
    status: 'success',
    data: {
      book: data
    }
  });
};

const deleteBookHandler = (request, h) => {
  const { bookId } = request.params;

  const index = books.findIndex((v) => v.id === bookId);

  if (index === -1) {
    return h.response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan'
    }).code(404);
  }


  books.splice(index, 1);


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
