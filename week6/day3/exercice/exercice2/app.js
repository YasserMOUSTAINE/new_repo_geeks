const express = require('express');
const app = express();
const booksRoutes = require('./routes/booksRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api/books', booksRoutes);

// Route invalide
app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée' });
});

// Serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Book API running at http://localhost:${PORT}`);
});
