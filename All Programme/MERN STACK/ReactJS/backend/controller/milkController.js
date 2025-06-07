const cowModel = require("../model/cowModel");
const milkModel = require("../model/milkModel");
const userModel = require("../model/userModel");

const addMilk = async(req,res) =>{
    console.log("HII")
    const {cowId,milk,fat,sat} = req.body;
    console.log(req.body)
    
    try{
        if(!cowId || !milk || !fat || !sat){
            return res.status(422).json({error:"plz fill the field properly"})
        }
        const cowExist = await cowModel.findOne({cowId:cowId})
        if(!cowExist){
            return res.status(400).json({message:"Cow not Register"})
        }
        const milkDataResult = new milkModel({cowId,milk,fat,sat});
        console.log(milkDataResult)
        await milkDataResult.save();

        await cowModel.findOneAndUpdate({ cowId: cowId }, { $push: { milkData: milkDataResult._id } });

            if(!milkDataResult){
                return res.status(404).json({error:"Milk not Found"});
            }
        res.status(201).json({message:"Add Cow Successfully",milkId:milkDataResult._id})
        
    }catch(error){
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
 
}
const allMilkWithCow = async(req,res)=>{
    try {
           const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;
        const skip = (page - 1) * limit;
        const milkData = await userModel.findById({_id:req.params.id}).populate({path:'cowsData', populate:{path:'milkData',model:"milks",option:{skip:skip,limit:limit}}});          // {_id:req.params.id} emiti bi chaliba ||_id| database re store achhi ||req.parama.id|| url me achhi 
            // console.log(milkData)
        if(!milkData){
            return res.status(404).json({error:"Milk not Found"});
        }
        res.status(200).json({ message: "All Milks", milkWithCow: milkData,skip:skip,page:page, totalPages: Math.ceil(milkData / limit),});
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
        
    }
}


// const allMilkWithCow = async(req,res)=>{
//     try {
//         const page = Number(req.query.page) || 1;
//         const limit = Number(req.query.limit) || 3;

//         const skipData = (page-1)*limit;

//         const milkData = await milkModel.find().skip(skipData).limit(limit);
//         // const CowData = await cowModel.findById({_id:req.params.id}).populate({path:"cowId",select:"cowName breed");  // any field populate
//         if(!milkData){
//             return res.status(404).json({error:"Milk not Found"});
//         }  
//         console.log(req.query)

        

    
//         res.status(200).json({ message: "All Cows", milkWithCow: milkData, nHbit:milkData.length});
//     } catch (error) {
//         return res.status(500).json({ error: "Internal Server Error", details: error.message });
        
//     }
// }

const indivitualMilkAndCow = async(req,res) =>{ 
    try {
        const milkDataWithCow = await milkModel.findById({_id:req.params.id});          // {_id:req.params.id} emiti bi chaliba ||_id| database re store achhi ||req.parama.id|| url me achhi 
        res.status(200).json({ message: "All Milks", milkWithCow: milkDataWithCow});
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
        
    }
}

const updateMilk = async(req,res)=>{
    const {cowId,milk,fat,sat} = req.body;
    try {
        if(!cowId || !milk || !fat || !sat){
            return res.status(422).json({error:"plz fill the field properly"})
        }
        const updateMilk = await milkModel.findByIdAndUpdate(req.params.id,{cowId,milk,fat,sat},{new:true});
        if(!updateMilk){
            return res.status(404).json({error:"Milk not Found"});
        }
        res.status(200).json({ message: "Update Milk", updateMilk });
        
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
        
    }
}

const deleteMilk = async(req,res) =>{
    try {
        const deleteMilk = await milkModel.findByIdAndDelete(req.params.id);

        if(!deleteMilk){
            return res.status(404).json({error:"Milk not Found"});
        }
        res.status(200).json({ message: "Delete Milk", deleteMilk });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
        
    }
}

module.exports = {addMilk,indivitualMilkAndCow,allMilkWithCow,updateMilk,deleteMilk}