const express = require('express');
const router = express.Router();

// Fake DB (en mémoire)
let todos = [];
let id = 1;

// GET: tous les todos
router.get('/', (req, res) => {
  res.json(todos);
});

// POST: ajouter un todo
router.post('/', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const newTodo = { id: id++, title };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT: mettre à jour un todo
router.put('/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const { title } = req.body;
  const todo = todos.find(t => t.id === todoId);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  todo.title = title || todo.title;
  res.json(todo);
});

// DELETE: supprimer un todo
router.delete('/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== todoId);
  res.status(204).send();
});

module.exports = router;
