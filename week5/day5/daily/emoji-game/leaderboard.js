// leaderboard.js
let scores = [];

function addScore(name, score) {
  scores.push({ name, score });
  scores.sort((a, b) => b.score - a.score);
  scores = scores.slice(0, 10); // top 10
}

function getScores() {
  return scores;
}

module.exports = { addScore, getScores };
