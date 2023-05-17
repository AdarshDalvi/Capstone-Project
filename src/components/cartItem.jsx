import React, { useContext, useRef, useState } from 'react'
import '../App.css'
import useHover from '../hooks/useHovered'
import { Context } from '../context/Context'

export default function CartItem({item}) {

    const {removeFromCart} = useContext(Context)
    const [hovered, ref] = useHover()

  return (
    <div className='cart-item'>
        <i ref={ref}  className={`ri-delete-bin-${hovered?'fill':'line'}`} onClick={()=>removeFromCart(item.id)}></i>
        <img src={item.url} width="130px" />
        <p>$5.99</p>
    </div>
  )
}
