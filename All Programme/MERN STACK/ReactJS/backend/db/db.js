const mongoose  = require('mongoose');

// const DB = "mongodb+srv://Kuna9861:99387909%4035@cluster0.cvwkho7.mongodb.net/productDB?retryWrites=true&w=majority";
const DB = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.cvwkho7.mongodb.net/productDB?retryWrites=true&w=majority`;
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