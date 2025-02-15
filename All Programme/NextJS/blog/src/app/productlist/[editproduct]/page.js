"use client"
import React, { useEffect, useState } from "react";
import '../../style.css';
import Link from "next/link";
import { Product } from "@/lib/model/product";
Link

const page = (props) => {

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [color, setColor] = useState("")
  const [company, setCompany] = useState("")
  const [category, setCategory] = useState("")
 
  const getProductDetails = async() =>{
            const productId = (props.params.editproduct)
          let productData = await fetch("http://localhost:3000/products/"+productId);
          productData = await productData.json();
        //   console.log(productData)
        if(productData.success){
              let result = productData.result;
            setName(result.name)
            setPrice(result.price)
            setColor(result.color)
            setCompany(result.company)
            setCategory(result.category)
          }
          
  
      }

      const updateProduct = async()=>{
        const productId = (props.params.editproduct)
        let data = await fetch("http://localhost:3000/products/"+productId,{
            method:"PUT",
            body:JSON.stringify({name,price,color,company,category})
        });
          data = await data.json();
            if(data.success){
                alert("Product has been Updated");
            }
      }


useEffect(()=>{
    
    getProductDetails();
    
},[]);
  return (
    <div>
      <h1>Update Product</h1>
      <input className="input" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Product Name" />
      <input className="input" value={price}  onChange={(e)=>setPrice(e.target.value)} type="text" placeholder="Enter Product Price" />
      <input className="input" value={color}  onChange={(e)=>setColor(e.target.value)} type="text" placeholder="Enter Product Color" />
      <input className="input" value={company}  onChange={(e)=>setCompany(e.target.value)} type="text" placeholder="Enter Product Company" />
      <input className="input" value={category}  onChange={(e)=>setCategory(e.target.value)} type="text" placeholder="Enter Product Category" />
      <button className="btn" onClick={updateProduct}>Update Product</button>
      <Link className="btn" href={"/productlist"} >Go to Product List</Link>
    </div>
  );
};

export default page;
