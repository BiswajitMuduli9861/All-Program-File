const express = require('express')

const router = express.Router();
const { getAllUser, getOneUser, registerUser } = require('../controller/products')

router.get('/', getAllUser);

router.get("/eachUser", getOneUser)
router.post("/registerUser", registerUser)
module.exports = router;