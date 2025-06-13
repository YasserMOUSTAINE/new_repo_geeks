const express = require('express');
const app = express();
const todosRouter = require('./routes/todos');

// Middleware pour lire le JSON
app.use(express.json());

// Monter le router
app.use('/todos', todosRouter);

// Lancer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
