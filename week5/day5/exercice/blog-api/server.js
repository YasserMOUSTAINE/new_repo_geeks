const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Pour lire le JSON dans le body des requêtes

// Simuler une "base de données"
let posts = [
  { id: 1, title: 'Premier post', content: 'Ceci est mon premier article.' },
  { id: 2, title: 'Deuxième post', content: 'Encore un autre article.' }
];

// GET /posts - tous les articles
app.get('/posts', (req, res) => {
  res.json(posts);
});

// GET /posts/:id - un seul article
app.get('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  if (!post) return res.status(404).json({ error: 'Post non trouvé' });
  res.json(post);
});

// POST /posts - créer un nouvel article
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).json({ error: 'Titre et contenu requis' });
  const newPost = {
    id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    title,
    content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT /posts/:id - modifier un article
app.put('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  if (!post) return res.status(404).json({ error: 'Post non trouvé' });

  const { title, content } = req.body;
  if (title) post.title = title;
  if (content) post.content = content;

  res.json(post);
});

// DELETE /posts/:id - supprimer un article
app.delete('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ error: 'Post non trouvé' });

  const deletedPost = posts.splice(index, 1);
  res.json(deletedPost[0]);
});

// Middleware pour les routes non trouvées
app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée' });
});

// Middleware pour erreurs serveur
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erreur serveur' });
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
