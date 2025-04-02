const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config()    // safabele || dotenv.config() detabase ke upar lekha haba ||
require("./db/db");
// const userModel = require("./model/userDetails")
// console.log(userModel)
const allRoutes = require('./routes/route')

app.use(express.json());
app.use(cors())
app.use("/av1",allRoutes)
app.listen(5000,()=>{
  console.log("Listing the port number 5000")
})