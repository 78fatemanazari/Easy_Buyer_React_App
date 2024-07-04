import { useState } from "react"


export const useCart = () =>{
  const [cartItems, setCarItems] = useState([]);

  const addToCart =(itemId)=>{
    if( !cartItems?.find((item)=> item.id === itemId))
      setCarItems([...cartItems, {id: itemId, count: 1}])
    else
      setCarItems(cartItems.map((item)=>{
        if(item.id === itemId)
          return {...item, count: item.count + 1}
        else
          return item
  }))
    console.log(cartItems);
  }

  const removeFromCart =(itemId)=>{
    setCarItems(cartItems.map((i)=>{
      if(itemId === i.id)
        return{...i, count: i.count === 0 ? 0 : i.count - 1}
      else
        return i
    }))
  }
  return{cartItems, addToCart, removeFromCart}
}