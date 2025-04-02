const express = require('express');

const router = express.Router();
const {signUp,login} = require('../controller/controller')
const {allCows} = require('../controller/cowController')

// User Related
router.post('/signup', signUp);
router.post('/login', login);

//cows Related
router.get("/allusers",allCows)


module.exports = router;