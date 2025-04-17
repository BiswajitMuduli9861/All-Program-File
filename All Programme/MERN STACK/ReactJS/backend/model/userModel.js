const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    comfirmpassord:{
        type:String,
        required:true,
    },
    cowsData:[{  // refrence of cow model // jetebele reference anya model ku naba  || required: true|| nehi karna error aega   // populate("cowsData") hoga "cows" ke naam par nehi hoga
        type:mongoose.Schema.Types.ObjectId,  
        ref:"cows",     // ref:"cows"  // cows heuchi model 
    }]
  

},{ timestamps: true });

const userModel = new mongoose.model("users", userSchema);

module.exports = userModel;