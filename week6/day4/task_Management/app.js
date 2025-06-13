const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks');

app.use(express.json());
app.use('/tasks', tasksRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
