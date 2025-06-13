const express = require('express');
const app = express();
const postsRoutes = require('./routes/postsRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/posts', postsRoutes);

// Route invalide
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Erreur serveur
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error' });
});

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
