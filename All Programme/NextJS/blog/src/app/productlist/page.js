import React from 'react'
import Link from "next/link";

const getProduct = async() =>{
  let data = await fetch("http://localhost:3000/products");
  data = await data.json();
  if(data.success){
    return data.result;
  }else{
    return {success:false};
  }
}
const page = async() => {
    let products = await getProduct();
    console.log(products)
  return (
    <div>
      <h1>Product List</h1>
      <button style={{color:"yellow",backgroundColor:"red"}}><Link href="/addproduct">Add Product</Link></button>
      <table border="1">
        <thead>

        <tr>
            <td>Product Name</td>
            <td>Product Price</td>
            <td>Product Color</td>
            <td>Product Company</td>
            <td>Product Category</td>
        </tr>
        
        </thead>
        <tbody>
          {
            products.map((item)=>(
              
              <tr key={item._id}>

                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.color}</td>
                <td>{item.company}</td>
                <td>{item.category}</td>
                <td><Link href={"/productlist/"+item._id}>Edit</Link></td>
              </tr>
              
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default page
