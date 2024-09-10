const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, 'User ID is required'],
        unique: true,
        min: [1, 'User ID must be a positive number'],
    },
    first_name: {
        type: String,
        unique: true,
        required: [true, 'User First name is required'],
        min: [1, 'User First name must be with at least 1 character'],
        MAX: [20, 'User First name must be Shorter than 20 characters']
    },
    last_name: {
        type: String,
        unique: true,
        required: [true, 'User Last name is required'],
        min: [1, 'User Last name must be with at least 1 character'],
        MAX: [20, 'User Last name must be Shorter than 20 characters']
    },
    birthday: {
        type: String,
        unique: true,
        required: [true, 'User Birthday is required']
    }
});
const schemas = {
        users: mongoose.model('users', userSchema)
};

module.exports = schemas;