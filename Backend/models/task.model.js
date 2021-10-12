const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('dotenv').config();

const TaskSchema = new Schema({

    "description": {
        'type': String,
        'required': true
    },
    "isCompleted": {
        'type': Boolean,
        'default': false
    },
    "deadLine": {
        'type': Date
    },
    "user-id": {
        'type': String,
        'required': true
    }
});


const Task = mongoose.model('task', TaskSchema);
module.exports = Task;