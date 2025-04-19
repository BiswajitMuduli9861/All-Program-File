const mongoose = require('mongoose');

const cowSchema =new mongoose.Schema({
    cowId:{
        type:Number,
        required:true,
        unique:true,
    },
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
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    DOB:{
        type:Date,
        required:true,
    },
    owner:{       //this field ko change karo localstorage se lao id login user ka   //populate("owner") hoga "users" ke naam par nehi hoga
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        
    },
    milkData:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"milks",   // milks heuchi model
    }],
    healthData:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"healths",
    },
  

}, {timestamps:true});

const cowModel = new mongoose.model("cows", cowSchema);

module.exports = cowModel;