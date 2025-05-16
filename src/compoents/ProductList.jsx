// import React, { useState } from 'react'
import ProductCard from "./ProductCard"

export default function ProductList(props) {
  const {products, addToCart} = props
  console.log(products[0])
 
  return (
    <div className='w-2/3 bg-blue-400 '>
      <h2 className="text-2xl rounded py-2 text-slate-600">Product List</h2>
      <div className="flex gap-3 flex-wrap">

    { products.map( el =>(
      <ProductCard key={el.id} productItem={el} addToCart={addToCart}/>
    ))}
    </div>
  </div>
  )
}
