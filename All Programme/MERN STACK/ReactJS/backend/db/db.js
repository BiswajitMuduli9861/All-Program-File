const mongoose  = require('mongoose');

<<<<<<< HEAD
// const DB = "mongodb+srv://Kuna9861:99387909%4035@cluster0.cvwkho7.mongodb.net/productDB?retryWrites=true&w=majority";
// const DB ="mongodb://localhost:27017/productDB"
const DB = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.cvwkho7.mongodb.net/productDB?retryWrites=true&w=majority`;
=======
const DB ="mongodb://localhost:27017/productDB"
// const DB = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.cvwkho7.mongodb.net/productDB?retryWrites=true&w=majority`;
>>>>>>> 6832b54b4e64ce62a8f512203aa0f46ffb66aa02
// const connection = mongoose.connect(DB)
// .then(()=>{
//     console.log("coonection secessfully");
    
// }).catch((err)=>{
//     console.log(err)
// })
const connection = async()=>{
    try {
        await mongoose.connect(DB)
        console.log("connection successfully")
    } catch (err) {
        console.log(err)
    }
}
connection();
module.exports = connection;
