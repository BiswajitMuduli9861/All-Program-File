const mongoose = require('mongoose');
    const DB = "mongodb+srv://Kuna9861:99387909%4035@cluster0.cvwkho7.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0"
const connectDB = async () =>{
    try{
        await mongoose.connect("mongodb+srv://Kuna9861:99387909%4035@cluster0.cvwkho7.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connection successfully");
    }catch(error){
        console.log(error)
    }
}
// export default connectDB;  this is not working showing error SyntaxError: Unexpected token 'export'
module.exports = connectDB;

// const mongoose = require('mongoose');
// const DB = "mongodb+srv://Kuna9861:99387909%4035@cluster0.cvwkho7.mongodb.net/Project1?retryWrites=true&w=majority";

// mongoose.connect("mongodb+srv://Kuna9861:99387909%4035@cluster0.cvwkho7.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0")
// .then(()=> console.log("connection successfully"))
// .catch((err)=> console.log("No connection"))