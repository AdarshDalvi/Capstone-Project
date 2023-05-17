import React, { useContext } from 'react'
import '../App.css'
import {NavLink,Outlet} from 'react-router-dom'
import { Context } from '../context/Context'

export default function Header() {

  const {cartItems} = useContext(Context)
    
  return (
    <>
        <header>
          <NavLink to='.'>
            <h1>PIC SOME</h1>
          </NavLink>
          <NavLink to='cart'>
            {
              cartItems.length>0
              ? <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>:
              <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
            }
          </NavLink>
        </header>
        <Outlet/>
    </>
  )
}
