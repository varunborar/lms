const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();

// Middlewares
app.use(express.static('build'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors()); // For handling cors request in development server.

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

// Handling options request for cors
const defaultRouter = express.Router();
defaultRouter.options('/', cors());

const authRouter = require('./routes/auth');
app.use('/api/auth', authRouter);

const taskRouter = require('./routes/tasks');
app.use('/api/task', taskRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/' + 'index.html'));
});