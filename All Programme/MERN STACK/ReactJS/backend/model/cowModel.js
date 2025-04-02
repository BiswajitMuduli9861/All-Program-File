const mongoose = require('mongoose');

const cowSchema =new mongoose.Schema({
    cowName:{
        type:String,
        required:true,
    },
    breed:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    weight:{
        type:Number,
        required:true,
    }, 
    height:{
        type:Number,
        requtied:true
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true,
    },
    Dob:{
        type:Date,
        required:true,
    },
  

}, {timestamps:true});

const cowModel = new mongoose.model("cows", cowSchema);

module.exports = cowModel;