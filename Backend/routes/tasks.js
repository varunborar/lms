const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const { authenticateToken } = require('../controller/auth.controller');
const { getTasks, addTask, deleteTask, updateTask } = require('../controller/task.controller');

router.get("/", authenticateToken, getTasks);

router.post('/add', authenticateToken, addTask);

router.delete('/delete/:id', authenticateToken, deleteTask);

router.put('/update/:id', authenticateToken, updateTask);

module.exports = router;