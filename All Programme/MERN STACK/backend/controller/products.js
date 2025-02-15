const User = require("../model/userSchema");
const getAllUser = async(req,res)=>{
    // res.status(200).json({message:"This is working"})
        try{
            const result =await User.find();
            // console.log(result)
            res.json({result:result});
        }catch(error){
            console.log(error)
        }

}

const getOneUser = async(req,res)=>{
    // res.status(200).json({message:"This tesing is completed"})
    try{

    
    const _id = "672f6daa7332ba48bc052f43"
    const result = await User.find({_id});
    res.json({result:result});

    }catch(error){
        console.log(error)
    }



}

const registerUser = async(req,res)=>{
    try{

    
    const result = req.body;
    console.log("hii")
    console.log({result})
    res.json({result:result})
    }catch(error){
        console.log(error)
    }

}

// export default getAllProducts;  // this is not working show error woking only package.json() file add "type":"Module"
module.exports = {getAllUser,getOneUser,registerUser};  // coorect