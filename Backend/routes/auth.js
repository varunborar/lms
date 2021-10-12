const express = require('express');
const router = express.Router();

const { register, login, authenticateToken } = require('../controller/auth.controller');
const { updateDetails } = require('../controller/user.controller');

router.post("/register", register);

router.post("/login", login);

router.put("/user/update/:id", authenticateToken, updateDetails);


module.exports = router;