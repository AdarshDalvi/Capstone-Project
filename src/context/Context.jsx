import React, {createContext, useState, useEffect} from 'react'

const Context = createContext()

function ContextProvider(props) {
  const [photos, setPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
    .then(res=>res.json())
    .then(resJson=>setPhotos(prevData=>resJson))
  },[])

  function toggleFavorite(id){
    setPhotos(prevData=>prevData.map(photo=>{
      return photo.id === id ? {
        ...photo,
        isFavorite : !photo.isFavorite
      }: photo
    }))
  }

  function addImageToCart(img){
    setCartItems(prevCartItems=> [...prevCartItems, img])
  }
  

  function removeFromCart(id){
    let updatedCart = cartItems.filter(element=>element.id!== id)
    setCartItems(prevCartItems=> updatedCart)
  }

  function emptyCart(){
    setCartItems(prevData=>[])
  }
  
  return (
    <Context.Provider value={{photos, toggleFavorite, addImageToCart,cartItems,removeFromCart,emptyCart}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}
