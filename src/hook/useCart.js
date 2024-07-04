import { useEffect, useState } from "react"


export const useCart = () =>{
  const [cartItems, setCarItems] = useState();

  useEffect(()=>{
    const data = localStorage.getItem("save_product");
    setCarItems(!!JSON.parse(data) ? JSON.parse(data) : [])
  },[])

  useEffect(()=>{
    if(cartItems !== undefined)
    localStorage.setItem("save_product", JSON.stringify(cartItems))
  },[cartItems])

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

  const resetCart = () => {
    setCarItems()
    localStorage.removeItem("save_product");
  }
  return{cartItems, addToCart, removeFromCart, resetCart}
}