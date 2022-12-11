import { createContext, useState } from "react";

// 1. Creamos e inicializamos el context con createContext()
export const cartContext = createContext()

// 2. Creamos el context Provider
// Es el componente que habilita el acceso al context
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

  // 3. Retornamos el componente con el Provider del context
  return (
    // 4. pasamos la prop "value" para habilitar las funciones/variables del context
    <cartContext.Provider value={value}> {children} </cartContext.Provider>
  )
}

// 5. conectamos con el context con los componentes que queremos interactuar 'CartWidget'
// import { CartWidget } from "../components/NavBar/CartWidget";