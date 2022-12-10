import React, { useContext, useEffect } from 'react';
import { cartContext } from './../../context/cartContext';
import CartCard from './CartCard';

function CartView() {
  const { cart, clearCart, removeItem, priceInCart } = useContext(cartContext)
  return (
    <div className='container p-5'>
      {cart.map(item => {
        return (<CartCard product={item} handleClick={() => removeItem(item.id)} />)
      })}
    </div>
  );
}

export default CartView;