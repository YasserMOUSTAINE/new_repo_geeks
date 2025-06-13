const express = require('express');
const app = express();
const path = require('path');
const userRoutes = require('./routes/users');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', userRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
