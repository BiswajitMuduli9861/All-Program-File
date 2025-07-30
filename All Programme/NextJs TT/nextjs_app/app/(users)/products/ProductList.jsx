'use client'
import { useSearchParams } from 'next/navigation'
import React, { use } from 'react'
const ProductList = (props) => {
    const data = useSearchParams()
    console.log(data)
    const category = data.get("category")
    const page = data.get("page")
    console.log("inside", category, page)
   
  return (
    <div>
        <h1>ProductList</h1>
      {/* <h1>Categoty={category}, page={page}</h1> */}
    </div>
  )
}

export default ProductList