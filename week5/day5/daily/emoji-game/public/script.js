async function loadGame() {
  const res = await fetch('/game');
  const data = await res.json();

  document.getElementById('emoji').textContent = data.emoji;
  const form = document.getElementById('guess-form');
  form.innerHTML = '';
  data.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.type = 'submit';
    btn.name = 'guess';
    btn.value = option;
    form.appendChild(btn);
  });
  document.getElementById('score').textContent = data.score;
}

document.getElementById('guess-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const guess = e.submitter.value;

  const res = await fetch('/guess', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ guess })
  });

  const result = await res.json();
  const feedback = document.getElementById('feedback');

  if (result.correct) {
    feedback.textContent = '✅ Correct!';
  } else {
    feedback.textContent = `❌ Incorrect! It was "${result.answer}". Score reset.`;
  }

  document.getElementById('score').textContent = result.score;
  await loadGame();
  loadLeaderboard();
});

async function loadLeaderboard() {
  const res = await fetch('/leaderboard');
  const list = await res.json();
  const ul = document.getElementById('leaderboard');
  ul.innerHTML = '';
  list.forEach(player => {
    const li = document.createElement('li');
    li.textContent = `${player.name}: ${player.score}`;
    ul.appendChild(li);
  });
}

// Initialiser
loadGame();
loadLeaderboard();
