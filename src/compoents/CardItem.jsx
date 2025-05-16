import React from 'react'

export default function CardItem(props) {

  const {addToCart ,decQuantity ,item :{id,title,price,quantity}} = props

  console.log('title', title)
  return (
    <div className='flex justify-between px-1.5'>
      <p>{title.split(` `)[0] + title.split(` `)[1]}</p>

      <div className='flex gap-1'>
      <p className='btn border w-5 h-5 flex justify-center items-center cursor-pointer'
        onClick={()=>decQuantity(id)}
      >-</p>
      <p className='btn border w-5 h-5 flex justify-center items-center cursor-pointer'
        onClick={()=>addToCart(id)}
      >+</p>
      </div>
      <p className='flex-1 text-end pe-2'>{quantity} * ฿{price}</p>
    </div>
  )
}
