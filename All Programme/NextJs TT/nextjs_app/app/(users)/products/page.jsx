import React from 'react'
import ProductList from './ProductList';
const products = async({searchParams}) => {
    const data = await searchParams;
    // console.log(data)
  return (
    <div>
      <h1>Categoty={data.category}, page={data.page}</h1>
      <ProductList/>
    </div>
  )
}

export default products


