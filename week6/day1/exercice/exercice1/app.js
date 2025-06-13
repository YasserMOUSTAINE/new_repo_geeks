const express = require('express');
const app = express();
const router = require('./routes'); // importe le router

// Utiliser le router
app.use('/', router);

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
