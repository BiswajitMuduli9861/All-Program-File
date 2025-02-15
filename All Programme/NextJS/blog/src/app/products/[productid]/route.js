import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content){
    const productId= content.params.productid;
    
    // console.log(content);
    // console.log(productId)
    const filter = {_id:productId}
    const payload = await request.json();
    console.log(payload);
    await mongoose.connect(connectionStr);
    const result = await Product.findByIdAndUpdate(filter,payload);

    return NextResponse.json({result, suceess:true})
}


export async function GET(request, content){
    const productId= content.params.productid;
    

    const record = {_id:productId}
    // await mongoose.connect(connectionStr);
    mongoose.connect(connectionStr)
.then(()=>{
    console.log("Connection successful")
}).catch((err)=>{
    console.log(err);
})
    const result = await Product.findById(record);

    return NextResponse.json({result, success:true})
}