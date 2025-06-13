const express = require('express');
const router = express.Router();

// Route pour la page d'accueil
router.get('/', (req, res) => {
  res.send('Welcome to the Homepage');
});

// Route pour la page "About"
router.get('/about', (req, res) => {
  res.send('About Us Page');
});

module.exports = router;
