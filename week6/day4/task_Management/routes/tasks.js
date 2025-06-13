const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const filePath = path.join(__dirname, '../data/tasks.json');

// Helper : lire les tâches
function readTasks() {
    try {
        const data = fs.readFileSync(filePath);
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

// Helper : écrire les tâches
function writeTasks(tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

// GET /tasks
router.get('/', (req, res) => {
    const tasks = readTasks();
    res.json(tasks);
});

// GET /tasks/:id
router.get('/:id', (req, res) => {
    const tasks = readTasks();
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
});

// POST /tasks
router.post('/', (req, res) => {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });

    const tasks = readTasks();
    const newTask = {
        id: Date.now(),
        title,
        description: description || '',
        completed: false
    };

    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
});

// PUT /tasks/:id
router.put('/:id', (req, res) => {
    const { title, description, completed } = req.body;
    const tasks = readTasks();
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Task not found' });

    if (!title) return res.status(400).json({ error: 'Title is required' });

    tasks[index] = {
        ...tasks[index],
        title,
        description: description || '',
        completed: completed ?? false
    };

    writeTasks(tasks);
    res.json(tasks[index]);
});

// DELETE /tasks/:id
router.delete('/:id', (req, res) => {
    const tasks = readTasks();
    const filtered = tasks.filter(t => t.id !== parseInt(req.params.id));
    if (tasks.length === filtered.length) return res.status(404).json({ error: 'Task not found' });

    writeTasks(filtered);
    res.json({ message: 'Task deleted' });
});

module.exports = router;
