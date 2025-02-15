import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){    //only use async method in server componet and not use client component
    // console.log("HII");
    // console.log(connectionStr);
    // await mongoose.connect(connectionStr)
    // const data =await Product.find();
    // console.log(data);
    // return NextResponse.json({result: data});

    let data = []
    try {
        await mongoose.connect(connectionStr)
        data =await Product.find();
    } catch (error) {
        data ={success:false}
    }
    return NextResponse.json({result:data,success:true})
    
}

export async function POST(request){
    await mongoose.connect(connectionStr)
    // let product = new Product({
        // name:"Muna",
        // price:"144",
        // company:"TCS",
        // color:"blue",
        // categiry:"Software Company"



    // });
    console.log(request);
    const payload = await request.json();
    let product = new Product(payload)
    const result = await product.save();
    return NextResponse.json({result,success:true})
}