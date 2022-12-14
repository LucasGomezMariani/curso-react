import { createContext, useState } from "react";

export const cartContext = createContext()
export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product, count) {
    let newCart = [...cart]
    let itemExistInCart = cart.findIndex(item => item.id === product.id)

    if (itemExistInCart !== -1) {
      newCart[itemExistInCart].count += count
      setCart(newCart)
    } else {
      product.count = count
      newCart.push(product)
      setCart(newCart)
    }
  }

  function clearCart() {
    setCart([])
  }

  function removeItem(idRemove) {
    let newCart = cart.filter(item => item.id !== idRemove)
    setCart(newCart)
  }

  function itemsInCart() {
    let total = 0
    cart.forEach(item => total = total + item.count)
    return total
  }

  function priceInCart() {
    let totalPrice = 0
    cart.forEach(item => totalPrice = totalPrice + (item.count * item.price))
    return totalPrice
  }

  const value = {
    cart,
    addToCart,
    clearCart,
    removeItem,
    itemsInCart,
    priceInCart
  }

  return (
    <cartContext.Provider value={value}> {children} </cartContext.Provider>
  )
}