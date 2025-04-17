const healthModel = require('../model/healthModel');
const cowModel = require('../model/cowModel');


    const addHealth = async (req, res) => {

        const {cowId,cowName,healthStatus,symptoms,diagnosis,treatment,medication,temperature,pulse,respiratoryRate,description} = req.body;

        try {
            // console.log(req.body)
            if (!cowId || !cowName || !healthStatus) {
                return res.status(422).json({ error: "Please fill the fields properly" });
            }

            const healthData = new healthModel({cowId,cowName,healthStatus,symptoms,diagnosis,treatment,medication,temperature,pulse,respiratoryRate,description});
            await healthData.save();
            await cowModel.findByIdAndUpdate({ _id: cowId }, { $push: { healthData: healthData._id } });

            res.status(201).json({ message: "Health data added successfully", healthId: healthData._id });

        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error", details: error.message });
        }
    }

    const allHealthWithCow = async(req,res)=>{
        try {
            const healthData = await healthModel.find({}).populate('cowId');          // {_id:req.params.id} emiti bi chaliba ||_id| database re store achhi ||req.parama.id|| url me achhi 

            if(!healthData){
                return res.status(404).json({error:"Health not Found"});
            }
            res.status(200).json({ message: "All Cows", healthWithCow: healthData});
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error", details: error.message });
            
        }
    }
    const indivitualHealthWithCow = async(req,res) =>{ 
        try {
            const healthDataWithCow = await healthModel.findById({_id:req.params.id}).populate('cowId');          // {_id:req.params.id} emiti bi chaliba ||_id| database re store achhi ||req.parama.id|| url me achhi 
            res.status(200).json({ message: "All Cows", healthWithCow: healthDataWithCow});
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error", details: error.message });
            
        }
    }
    
    const updateHealth = async(req,res)=>{
        const {cowId, cowName, healthStatus, symptoms, diagnosis, treatment, medication, temperature, pulse, respiratoryRate,description} = req.body;
        try {
            if(!cowId || !cowName || !healthStatus){
                return res.status(422).json({error:"plz fill the field properly"})
            }
            const updateHealth = await milkModel.findByIdAndUpdate(req.params.id, {cowId, cowName, healthStatus, symptoms, diagnosis, treatment, medication, temperature, pulse, respiratoryRate,description},{new:true});
            if(!updateHealth){
                return res.status(404).json({error:"Healrh not Found"});
            }
            res.status(200).json({ message: "Update Health", updateHealth });
            
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error", details: error.message });
            
        }
    }
    
    const deleteHealth = async(req,res) =>{
        try {
            const deleteHealth = await healthModel.findByIdAndDelete(req.params.id);
    
            if(!deleteHealth){
                return res.status(404).json({error:"Milk not Found"});
            }
            res.status(200).json({ message: "Delete Milk", deleteHealth });
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error", details: error.message });
            
        }
    }

    
module.exports ={addHealth,allHealthWithCow,indivitualHealthWithCow,updateHealth,deleteHealth}