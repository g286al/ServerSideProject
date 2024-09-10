
const express = require('express');
const router = express.Router();
const schemas = require('./schema');
const User = schemas.users;

// Welcome Route
router.get('/', (req, res) => {
    res.send('Welcome to Calorie Manager REStful Web Services');
});

/* Get all users */
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        console.log(users);
        if (users.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }
        res.status(200).json(users);
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ error: 'Failed to retrieve users' });
    }
});

module.exports = router;
