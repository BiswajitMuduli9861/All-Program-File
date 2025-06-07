//signup function

const bcrypt = require('bcrypt')
const userModel = require("../model/userModel");

const signUp = async(req,res) =>{
    const {name,email,password,comfirmpassord} = req.body;
    
    try{
        if(!name || !email || !password || !comfirmpassord){
            return res.status(422).json({error:"plz fill the field properly"})
        }
        const userExsit = await userModel.findOne({email:email})
        if(userExsit){
            return res.status(400).json({error:"user already exist"})
        }
        if(password !== comfirmpassord){
            return res.status(402).json({error:"password not match"})
        }
        const hashPassword =  await bcrypt.hash(password, 10)
        const hashConfirmPassword =  await bcrypt.hash(comfirmpassord, 10)
        const user = new userModel({name,email,password:hashPassword,comfirmpassord:hashConfirmPassword});
        await user.save();
        res.status(201).json({message:"user register successfully"})
        console.log("kjdjfkjkdf")
    }catch(error){
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
 
}

const login = async(req,res)=>{
    const {email,password} = req.body;
    try {
        if(!email || !password){
            return res.status(422).json({error:"plz fill the field properly"})
        }
        const findUser = await userModel.findOne({email:email})
        // console.log(findEmail)
        if(!findUser){
            return res.status(400).json({message:"Email not Register"})
        }
        // const findPassword = await userModel.findOne({password:password})  // not write this field kahinki password achhi ||findUser|| variable me
        const matchPassword = await bcrypt.compare(password, findUser.password)
        // if(password !== findUser.password){   // this is plane password match 
        //      return res.status(401).json({error:"Password Not match"})
        // }
        if(!matchPassword){   // this is bcrypt hased password match
             return res.status(401).json({error:"Invalid Credential"})
        }
        // console.log("User login successfully")
        res.status(201).json({message:"User login successfully",userId:findUser._id})
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}


 const allcows = async(req,res)=>{
    try {
        console.log(req.params.id)
        
        const allcowsData = await userModel.findById({_id:req.params.id}).populate("cowsData");          // {_id:req.params.id} emiti bi chaliba ||_id| database re store achhi ||req.parama.id|| url me achhi
        res.status(201).json({message:"All cows",userAllCows:allcowsData})
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
 }



module.exports={signUp,login,allcows}