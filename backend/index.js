const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// In-memory user storage
const users = [];

// Sign Up Endpoint
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const userExists = users.find(user => user.username === username);

    if (userExists) {
        return res.status(400).json({ message: 'User already exists!' });
    }

    users.push({ username, password });
    res.status(201).json({ message: 'User signed up successfully!' });
});

// Sign In Endpoint
app.post('/signin', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials!' });
    }

    res.status(200).json({ message: 'Sign in successful!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
