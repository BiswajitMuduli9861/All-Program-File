const express = require('express');

const multer = require('multer');
// const upload = multer({dest:'uploads/'})

const storage = multer.diskStorage({
    destination: function(req,file,cb){    // file === res is same   //cb hauchi callback function
        cb(null,'uploads')       // null hauchi error asila pare handle kariba ki nai  // uploads hauchi kou folder re image store kariba
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    }
})


const upload = multer({storage})

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

router.post("/addcow",upload.single('image'),addCow)
router.get("/cowwithuser/:id",allCowWithUsers)
router.get("/indcow/:id",indiavidualCow)
router.put("/updatecow/:id",upload.single('image'),updateCow)
router.delete("/deletecow/:id",deleteCow)

//milk related

router.post("/addmilk",addMilk)
router.get("/allmilks",allMilkWithCow)
router.get("/indmilk/:id",indivitualMilkAndCow)
router.put("/updatemilk/:id",updateMilk)
router.delete("/deletemilk/:id",deleteMilk)

//Health Related
router.post("/addhealth",addHealth);
router.get("/allhealths",allHealthWithCow);
router.get('indhealth/:id',indivitualHealthWithCow);
router.put("/updatehealth/:id",updateHealth)
router.delete("/deletehealth/:id",deleteHealth)
module.exports = router;