import React, { useContext, useEffect } from 'react';
import { cartContext } from './../../context/cartContext';
import CartCard from './CartCard';
import CartEmpty from './CartEmpty';

function CartView() {
  const { cart, clearCart, removeItem, priceInCart } = useContext(cartContext)
  if (cart.length === 0) return <CartEmpty/>
  return (
    <div className='container p-5 align-center'>
      {cart.map(item => {
        return (<CartCard key={item.id} product={item} handleClick={() => removeItem(item.id)} />)
      })}
      <div className="d-flex justify-content-center">
        <button onClick={clearCart} type="button" className="btn btn-danger">vaciar carrito</button>

      </div>
    </div>
  );
}

export default CartView;