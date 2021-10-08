const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.static('build'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Database Connection
const db = process.env.MONGODB_CONNECTION;

mongoose.connect(
    db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(
    () => console.log("Database Connected")
).catch(
    err => console.log(err)
);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server up and running on ${PORT}`);
})

// Routers
const authRouter = require('./routes/auth');
app.use('/api', authRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + './build' + 'index.html'));
});