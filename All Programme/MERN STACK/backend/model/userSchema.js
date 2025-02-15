const mongoose = require("mongoose");


const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true,
    },
    company:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    }

});

const allProducts = new mongoose.model("products", userSchema);    // modle name is products and database model ka naam  hai products both are same 
// then successfully find data and each operation 
module.exports = allProducts;