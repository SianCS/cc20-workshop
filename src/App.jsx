import { useEffect, useState } from "react"
import CardSummary from "./compoents/CardSummary"
import Header from "./compoents/Header"
import ProductList from "./compoents/ProductList"


function App() {
  const [products, SetProducts] = useState([])
  const [carts, SetCarts ] = useState([])
  const fetchProducts = () =>{
    fetch(`http://localhost:8000/products`)
    .then(resp => resp.json())
    .then(data => SetProducts(data))
  }

  useEffect( ()=>{
    fetchProducts()

  },[])

  const addToCart = (id, title, price) =>{
    let idx = carts.findIndex(el => el.id === id)
    let newItem
    if(idx === -1) {
      newItem = {id: id, title: title, price: price, quantity: 1}
      SetCarts([...carts, newItem])
    } else {
        const clonedCart = [...carts]
        clonedCart[idx].quantity += 1
        SetCarts(clonedCart)
    }
  }

  const decQuantity = (id) =>{
    let idx = carts.findIndex(el => el.id === id)
    const clonedCart = [...carts]

    console.log('idx', idx)

    if(clonedCart[idx].quantity > 1) {
      clonedCart[idx].quantity -= 1
      
    } else {
      clonedCart.splice(idx,1)
    }

    SetCarts(clonedCart)


  }
  // const  incQuantity = () => {
  //   let idx = carts.findIndex(el => el.id === id)
  //   const clonedCart = [...carts]
  //   clonedCart[idx].quantity +=1
  //   SetCarts(clonedCart)
  // }
  
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header itemCount={carts.length}/>
        <div className="flex flex-1">
          <ProductList products={products} addToCart={addToCart}/>
          <CardSummary carts={carts} decQuantity={decQuantity} addToCart={addToCart}/>
        </div>
      </div>
    </>
  )
}

export default App
