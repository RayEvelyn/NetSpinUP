import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const users = []; // In-memory user storage (Replace with DB in production)
const SECRET_KEY = process.env.SECRET_KEY || 'your_jwt_secret';

app.use(cors());
app.use(express.json());

// Signup Route
app.post('/api/signup', (req, res) => {
    const { email, password } = req.body;
    if (users.find(user => user.email === email)) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const newUser = { email, password }; // In real apps, hash the password
    users.push(newUser);
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ user: newUser, token });
});

// Login Route
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ user, token });
});

// Protected Route Example
app.get('/api/protected', (req, res) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ message: 'No token provided' });
    
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Failed to authenticate token' });
        res.json({ message: 'Welcome to protected route', user: decoded });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
