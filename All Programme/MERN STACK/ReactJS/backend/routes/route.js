const express = require('express');

const router = express.Router();
const {signUp,login,allcows} = require('../controller/controller')
const {addCow,allCowWithUsers,updateCow,deleteCow,indiavidualCow} = require('../controller/cowController')
const {addMilk,indivitualMilkAndCow,allMilkWithCow,updateMilk,deleteMilk} = require("../controller/milkController");
const {addHealth,allHealthWithCow,indivitualHealthWithCow,updateHealth,deleteHealth} = require("../controller/healthController")

// User Related
router.post('/signup', signUp);
router.post('/login', login);
router.get('/userwithallcows/:id', allcows); // get all cows of user

//cows Related
router.post("/addcow",addCow)
router.get("/cowwithuser/:id",allCowWithUsers)
router.get("/indcow/:id",indiavidualCow)
router.put("/updatecow/:id",updateCow)
router.delete("/deletecow/:id",deleteCow)

//milk related

router.post("/addmilk",addMilk)
router.get("/allmilk",allMilkWithCow)
router.get("/indmilk/:id",indivitualMilkAndCow)
router.put("/updatemilk/:id",updateMilk)
router.delete("/deletemilk/:id",deleteMilk)

//Health Related
router.post("/addhealth",addHealth);
router.get("/allhealth",allHealthWithCow);
router.get('indhealth/:id',indivitualHealthWithCow);
router.put("/updatehealth/:id",updateHealth)
router.delete("/deletehealth/:id",deleteHealth)
module.exports = router;