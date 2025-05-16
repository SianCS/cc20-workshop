import React from 'react'
import CardItem from "./CardItem"

export default function CardSummary(props) {
  const {carts, decQuantity, addToCart} = props
  const total = carts.reduce( (a,c)=> a+c.price*c.quantity, 0)
  const vat = total * 0.07
  const finalTotal = total + vat
  return (
    <div className='w-1/3 bg-orange-300'>
      <h2 className='text-2xl rounded py-2 text-slate-600'>Cart Item :</h2>
      {carts.length ===0 && <p>Emtpy cart</p>}
      <div className="flex flex-col gap-2">
      { carts.map(el =>(
        <CardItem key={el.id} item={el} decQuantity={decQuantity} addToCart={addToCart}/>
      ))}
      </div>
      { carts.length > 0 &&(
        <>
         <div className="divider"></div>
      <div className='flex justify-between px-1.5'>
        <p className='font-bold'>Total</p>
        <p>฿{total.toFixed(2)}</p>
      </div>
      <div className='flex justify-between px-1.5'>
        <p className='font-bold'>Vat</p>
        <p>฿{vat.toFixed(2)}</p>
      </div>
      <div className='flex justify-between px-1.5'>
        <p className='font-bold'>Final Total</p>
        <p className='underline decoration-double'>฿{finalTotal.toFixed(2)}</p>
      </div>
    
        </>
      ) }
     
    </div>
  )
}
