const express = require('express');
const app = express();
const products_routes = require('./routes/products')
const PORT = 5000;
const connection = require('./conn');
connection()
app.get('/', (req, res) => {
    res.send("My family is my love")
})
app.use("/av1/products", products_routes)
app.listen(PORT,()=>{
    console.log(`Listing the port number ${PORT}`)
})
