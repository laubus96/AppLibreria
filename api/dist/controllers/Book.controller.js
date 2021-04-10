"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteBook = exports.updateBook = exports.createBook = exports.getBookId = exports.getBooks = void 0;

var _Book = _interopRequireDefault(require("../models/Book"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getBooks = async (req, res) => {
  const books = await _Book.default.find({
    genero: req.params.genero
  });
  return res.json(books);
};

exports.getBooks = getBooks;

const getBookId = async (req, res) => {
  const bookId = await _Book.default.findById(req.params.id);
  if (!bookId) return res.status(204).json();
  return res.json(bookId);
};

exports.getBookId = getBookId;

const createBook = async (req, res) => {
  const book = await _Book.default.findOne({
    name: req.body.name
  });

  if (book) {
    return res.status(301).json({
      message: "The book already exists "
    });
  }

  const newBook = new _Book.default(req.body);
  const newBookSave = await newBook.save();
  return res.json(newBookSave);
};

exports.createBook = createBook;

const updateBook = async (req, res) => {
  const bookUpdate = await _Book.default.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.json(bookUpdate);
};

exports.updateBook = updateBook;

const deleteBook = async (req, res) => {
  const bookDelete = await _Book.default.findByIdAndDelete(req.params.id);
  if (!bookDelete) return res.status(204).json();
  return res.json(bookDelete);
};

exports.deleteBook = deleteBook;
//# sourceMappingURL=Book.controller.js.map