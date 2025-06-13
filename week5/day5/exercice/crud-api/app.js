
const express = require('express');
const app = express();
const PORT = 5000;

// Importer le module data
const { fetchPosts } = require('./data/dataService');

// Définir la route GET /posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('✅ Données récupérées depuis JSONPlaceholder');
    res.status(200).json(posts);
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des données :', error.message);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
