import React,{useState,useContext} from 'react'
import '../App.css'
import { Context } from '../context/Context'
import PropTypes from 'prop-types';
import useHover from '../hooks/useHovered';

export default function Image({className, img}) {
  const {toggleFavorite, addImageToCart, cartItems,removeFromCart} = useContext(Context)
  const [hovered,ref] = useHover()

  const favorite = img.isFavorite ? <i onClick={()=>toggleFavorite(img.id)}  className="ri-heart-fill favorite"></i> : hovered? <i onClick={()=>toggleFavorite(img.id)} className="ri-heart-line favorite"></i> : null
  const cart = cartItems.some(element => element.id === img.id)
                ? <i onClick={()=> removeFromCart(img.id)} className="ri-shopping-cart-fill cart"></i>
                : hovered && <i onClick={() => addImageToCart(img)} className="ri-add-circle-line cart"></i>
  return (
    <div 
      className={`${className} image-container`}
      ref={ref}
    >
      <img src={img.url} className="image-grid"/>
      {favorite}
      {cart}
    </div>
  )
}


Image.propTypes = {
  className : PropTypes.string,
  img : PropTypes.shape({
    id : PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
    url: PropTypes.string.isRequired
  })
}
