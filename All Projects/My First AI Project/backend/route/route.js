const express = require('express');
const {resultData} = require('../controller/controller');
const {signUp} = require('../controller/userController');


const router = express.Router();

//Ai response Route
router.post('/content', resultData)

// User registration Route
router.post('/signup', signUp);

module.exports = router;