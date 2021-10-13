const Task = require('../models/task.model');

module.exports.getTasks = (req, res) => {
    Task.find({
        "user-id": req.user.user_id
    }, (err, docs) => {
        if (err) return res.status(400).json({ 'error': "no tasks found" })

        return res.status(200).json(docs);
    });
}

module.exports.addTask = (req, res) => {
    const newTask = new Task({
        "user-id": req.user.user_id,
        "description": req.body.description,
        "deadLine": req.body.deadline,
        "isCompleted": req.body.isCompleted
    });

    newTask.save();
    return res.status(200).json(newTask);
}

module.exports.deleteTask = (req, res) => {
    Task.findOneAndRemove({ _id: req.params.id }, (err, docs) => {
        if (err) return res.status(400).json({ 'error': 'no document found' });
        return res.status(200).json(docs);
    })
}

module.exports.updateTask = (req, res) => {
    Task.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "description": req.body.description,
            "deadline": req.body.deadline,
            "isCompleted": req.body.isCompleted
        }
    }, { "new": true }).then(result => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(400).json({ 'error': err });
    })
}