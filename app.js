// Imports
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes');
require('dotenv').config();

// Protection and Port Selection
const app = express();
const connectionString = process.env.MONGODB_URI;
const port = process.env.PORT || 3000;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRoutes);

// MongoDB Connection
mongoose.connect(connectionString).then(r => console.log("Connected to the Database!")).catch(r => console.error(r));

// Start Server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});