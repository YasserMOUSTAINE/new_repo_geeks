const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json()); // Middleware pour lire les données JSON

// Simuler une base de données de livres
let books = [
  { id: 1, title: '1984', author: 'George Orwell', publishedYear: 1949 },
  { id: 2, title: 'Le Petit Prince', author: 'Antoine de Saint-Exupéry', publishedYear: 1943 },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 }
];

// GET /api/books - Lire tous les livres
app.get('/api/books', (req, res) => {
  res.status(200).json(books);
});

// GET /api/books/:bookId - Lire un seul livre par ID
app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  res.status(200).json(book);
});

// POST /api/books - Créer un nouveau livre
app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    publishedYear
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
