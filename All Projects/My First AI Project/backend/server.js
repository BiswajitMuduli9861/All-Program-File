const { GoogleGenAI }= require("@google/genai");
const express = require("express");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());
dotenv.config();
const connection = require("./db/db");
connection();
const cors = require("cors");

const route  = require("./route/route");
app.use(cors());
// const ai = new GoogleGenAI({ apiKey: "" });
// const ai = new GoogleGenAI({ apiKey: process.env.apiKey });

// async function main(data) {
//   const result = await ai.models.generateContent({
//     model: "gemini-2.5-flash-preview-05-20",
//     contents: data,
//   });
//   // console.log(result.text,13);
//   return result.text;
// }
// app.get("/",async(req,res)=>{
// try{
//   const data = req.body.question;
//   const result = await main(data);
  
//   res.send({"result":result});
// }catch(err){
//   res.status(500).json({status:500, message:"Internal Server Error", error: err.message});
// }
// })

app.use('/api',route)

app.listen(5000,()=>{
  console.log("Server is running on port 5000");
})