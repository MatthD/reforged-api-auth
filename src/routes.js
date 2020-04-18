const express = require('express');
const login = require('./routes/login');
const signup = require('./routes/signup');

const router = express.Router();

router.route('/login').post(login);
router.route('/signup').post(signup);

module.exports = router;