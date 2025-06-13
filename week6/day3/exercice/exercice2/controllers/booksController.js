const Book = require('../models/bookModel');

exports.getAll = async (req, res) => {
  try {
    const books = await Book.getAllBooks();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.getOne = async (req, res) => {
  try {
    const book = await Book.getBookById(req.params.bookId);
    if (!book) return res.status(404).json({ error: 'Livre non trouvé' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.create = async (req, res) => {
  try {
    const [newBook] = await Book.createBook(req.body);
    res.status(201).json(newBook);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Données invalides' });
  }
};


exports.update = async (req, res) => {
  try {
    const [updatedBook] = await Book.updateBook(req.params.bookId, req.body);
    if (!updatedBook)
      return res.status(404).json({ error: 'Livre non trouvé' });
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ error: 'Données invalides' });
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Book.deleteBook(req.params.bookId);
    if (!deleted) return res.status(404).json({ error: 'Livre non trouvé' });
    res.json({ message: 'Livre supprimé' });
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};
