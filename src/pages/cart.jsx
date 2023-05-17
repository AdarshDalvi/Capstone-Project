import React, { useContext, useEffect, useState } from 'react'
import {Context} from '../context/Context'
import CartItem from '../components/cartItem'
import '../App.css'

export default function Cart() {
  const {cartItems,emptyCart} = useContext(Context)
  const [buttonText, setButtonText] = useState("Place Order")
  const [orderPlaced, setOrderPlaced] = useState(false)
  const totalCost = 5.99 * cartItems.length
  const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
  const elements = cartItems.map(item=>{
    return (
      <CartItem
        key={item.id}
        item={item}
      />
    )
  })

  if(cartItems.length===0){
    return (
      <div className='empty-cart'>
        <h1>Your Cart is empty.</h1>
      </div>
    )
  }

  function placeOrder(){
    setButtonText(prevText=>'Ordering...')
    setTimeout(()=>{
      setButtonText("Order Placed !")
    },3000)
    setTimeout(()=>{
      setOrderPlaced(true)
      emptyCart()
    },4000)
  }

  return (
    !orderPlaced ?
    <main className="cart-page">
        <h1>Check out</h1>
        {elements}
        <p className="total-cost">Total: {totalCostDisplay} </p>
        <div className="order-button">
            <button onClick={placeOrder}>{buttonText}</button>
        </div>
    </main>
    : <div className='empty-cart'>
        <h1>Your Cart is empty.</h1>
      </div>
    
  )
}
