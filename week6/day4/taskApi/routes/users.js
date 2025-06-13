const express = require('express');
const bcrypt = require('bcrypt');
const fs = require('fs').promises;
const router = express.Router();
const USERS_FILE = './users.json';

const readUsers = async () => JSON.parse(await fs.readFile(USERS_FILE, 'utf-8'));
const writeUsers = async (data) => await fs.writeFile(USERS_FILE, JSON.stringify(data, null, 2));

router.post('/register', async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;
  try {
    const users = await readUsers();
    if (users.find(u => u.username === username)) {
      return res.status(400).send('Username already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword
    };
    users.push(newUser);
    await writeUsers(users);
    res.send(`Welcome ${username}, you are now registered!`);
  } catch (err) {
    res.status(500).send('Server error during registration');
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const users = await readUsers();
    const user = users.find(u => u.username === username);
    if (!user) return res.status(404).send('Username is not registered');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send('Invalid password');

    res.send(`Hi ${username} welcome back again!`);
  } catch (err) {
    res.status(500).send('Server error during login');
  }
});

// Extra Routes (demo only)
router.get('/users', async (_, res) => {
  try {
    const users = await readUsers();
    res.json(users);
  } catch {
    res.status(500).send('Could not read users');
  }
});

router.get('/users/:id', async (req, res) => {
  try {
    const users = await readUsers();
    const user = users.find(u => u.id == req.params.id);
    user ? res.json(user) : res.status(404).send('User not found');
  } catch {
    res.status(500).send('Error fetching user');
  }
});

router.put('/users/:id', async (req, res) => {
  try {
    const users = await readUsers();
    const index = users.findIndex(u => u.id == req.params.id);
    if (index === -1) return res.status(404).send('User not found');
    users[index] = { ...users[index], ...req.body };
    await writeUsers(users);
    res.send('User updated');
  } catch {
    res.status(500).send('Error updating user');
  }
});

module.exports = router;
