import Book from "../models/Book";

export const getBooks = async (req, res) => {
  const books = await Book.find({ genero: req.params.genero });
  return res.json(books);
};

export const getBookId = async (req, res) => {
  const bookId = await Book.findById(req.params.id);
  if (!bookId) return res.status(204).json();
  return res.json(bookId);
};

export const createBook = async (req, res) => {
  const book = await Book.findOne({ name: req.body.name });
  if (book) {
    return res.status(301).json({ message: "The book already exists " });
  }
  const newBook = new Book(req.body);
  const newBookSave = await newBook.save();
  return res.json(newBookSave);
};

export const updateBook = async (req, res) => {
  const bookUpdate = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(bookUpdate);
};

export const deleteBook = async (req, res) => {
  const bookDelete = await Book.findByIdAndDelete(req.params.id);
  if (!bookDelete) return res.status(204).json();
  return res.json(bookDelete);
};
