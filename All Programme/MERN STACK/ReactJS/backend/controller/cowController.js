const allCows = async(req,res) =>{
    const allCowData = await userModel.find();
    res.send(allUserData)
}

module.exports = {allCows}