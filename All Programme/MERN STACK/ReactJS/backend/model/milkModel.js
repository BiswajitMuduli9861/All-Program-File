const mongoose = require('mongoose');

const milkSchema =new mongoose.Schema({
    
    cowId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"cows",
        
    },
    milk:{
        type:Number,
        required:true,
    },
    fat:{
        type:Number,
        required:true,
    },
    sat:{
        type:Number,
        required:true,
    },
},{timestamps:true});

const milkModel = mongoose.model("milks",milkSchema); 
module.exports = milkModel; 