import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { postOrder } from '../../service/fireStore';
import { cartContext } from './../../context/cartContext';
import CartCard from './CartCard';
import CartEmpty from './CartEmpty';
import CartForm from './CartForm';

function CartView() {
  const { cart, clearCart, removeItem, priceInCart } = useContext(cartContext)
  const navigate = useNavigate();

  async function handleBuy(evt, data) {
    const orderData = {
      buyer: data,
      items: cart,
      total: priceInCart(),
      date: new Date(),
    };
    const orderId = await postOrder(orderData);
    navigate(`/checkout/${orderId}`);
    clearCart()
  }

  if (cart.length === 0) return <CartEmpty />

  return (
    <div className='container p-5 align-center'>
      {cart.map(item => {
        return (<CartCard key={item.id} product={item} handleClick={() => removeItem(item.id)} />)
      })}
      {/* botonera */}
      <div className="d-flex justify-content-center">
        <button onClick={clearCart} type="button" className="btn btn-danger m-1">Vaciar carrito</button>
        <h3 className='m-1'>Total de la compra <strong>${priceInCart()}</strong> </h3>
      </div>
      <CartForm onSubmit={handleBuy}/>
    </div>
  );
}

export default CartView;