const express = require('express');
const session = require('express-session');
const path = require('path');
const emojis = require('./emojis');
const { addScore, getScores } = require('./leaderboard');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(session({
  secret: 'emoji-secret',
  resave: false,
  saveUninitialized: true
}));

// Utilitaire : choisir aléatoirement
function getRandomEmojiOptions() {
  const shuffled = emojis.sort(() => 0.5 - Math.random());
  const correct = shuffled[0];
  const options = [correct.name];
  while (options.length < 4) {
    const choice = shuffled[options.length];
    if (!options.includes(choice.name)) {
      options.push(choice.name);
    }
  }
  return {
    emoji: correct.emoji,
    answer: correct.name,
    options: options.sort(() => 0.5 - Math.random())
  };
}

// Route principale
app.get('/', (req, res) => {
  if (!req.session.score) req.session.score = 0;

  const game = getRandomEmojiOptions();
  req.session.correctAnswer = game.answer;

  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// API pour obtenir un nouveau jeu
app.get('/game', (req, res) => {
  const game = getRandomEmojiOptions();
  req.session.correctAnswer = game.answer;
  res.json({ emoji: game.emoji, options: game.options, score: req.session.score });
});

// Vérifier réponse
app.post('/guess', (req, res) => {
  const guess = req.body.guess;
  const correct = req.session.correctAnswer;

  if (guess === correct) {
    req.session.score++;
    res.json({ correct: true, score: req.session.score });
  } else {
    addScore('Anonymous', req.session.score); // Pour simplifier
    const finalScore = req.session.score;
    req.session.score = 0;
    res.json({ correct: false, answer: correct, score: finalScore });
  }
});

// Leaderboard
app.get('/leaderboard', (req, res) => {
  res.json(getScores());
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
