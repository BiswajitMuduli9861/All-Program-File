const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    comfirmpassord:{
        type:String,
        required:true,
    },
    cows:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"cows",
        required:true,
    }
  

});

const userModel = new mongoose.model("users", userSchema);

module.exports = userModel;