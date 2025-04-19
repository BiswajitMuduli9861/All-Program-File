const cowModel = require("../model/cowModel");
const userModel = require("../model/userModel");


const addCow = async(req,res) =>{
    const {cowId,cowName,breed,age,weight,height,price,description,DOB,ownerId} = req.body;
    // const {image} = req.file.originalname;
    const image = req.file ? req.file.originalname : null;
    // console.log(image)
    // console.log(ownerId)
    // console.log(req.body)
    // console.log(req.file.originalname);   //image only access karipariba req.file se  
    try{
        if(!cowId || !cowName || !breed || !age || !weight || !height || !price || !description ||!image  || !DOB || !ownerId){
            return res.status(422).json({error:"plz fill the field properly"})
        }
        const cow = new cowModel({cowId,cowName,breed,age,weight,height,price,description,image,DOB,ownerId});
        await cow.save();
        await userModel.findByIdAndUpdate({_id:ownerId}, { $push: { cowsData: cow._id } });
        res.status(201).json({message:"Add Cow Successfully",cowId:cow._id})
        
    }catch(error){
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
 
}
const allCowWithUsers = async(req,res) =>{ 
    try {
        const CowDataWithUser = await cowModel.findById({_id:req.params.id}).populate({path:"owner",select:"_id name email"},).populate("milkData");          // {_id:req.params.id} emiti bi chaliba ||_id| database re store achhi ||req.parama.id|| url me achhi 
        // const CowData = await cowModel.findById({_id:req.params.id}).populate({path:"users",select:"name email"});  // any field populate
        res.status(200).json({ message: "All Cows", cowWthUser: CowDataWithUser});
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
        
    }
}

//get individual cow data
const indiavidualCow = async(req,res) =>{ 
    try {
        const individualCowData = await cowModel.findById({_id:req.params.id}).populate("users");          // {_id:req.params.id} emiti bi chaliba ||_id| database re store achhi ||req.parama.id|| url me achhi 
        res.status(200).json({ message: "All Cows", cow: individualCowData});
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
        
    }
}


const updateCow = async(req,res) =>{
    const {cowId,cowName,breed,age,weight,height,price,description,DOB} = req.body;
    try {
        const updateCow = await cowModel.findByIdAndUpdate(req.params.id,{cowId,cowName,breed,age,weight,height,price,description,DOB},{new:true});

        if(!updateCow){
            return res.status(404).json({error:"Cow not Found"});
        }
        res.status(200).json({ message: "Update Cow", updateCow });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
        
    }
}

const deleteCow = async(req,res) =>{
    try {
        const deleteCow = await cowModel.findByIdAndDelete(req.params.id);

        if(!deleteCow){
            return res.status(404).json({error:"Cow not Found"});
        }
        res.status(200).json({ message: "Delete Cow", deleteCow });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
        
    }
}
module.exports = {addCow, allCowWithUsers,indiavidualCow,updateCow,deleteCow}