import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { postOrder, postProducts } from '../../service/fireStore';
import { cartContext } from './../../context/cartContext';
import CartCard from './CartCard';
import CartEmpty from './CartEmpty';

function CartView() {
  const { cart, clearCart, removeItem, priceInCart } = useContext(cartContext)
  const navigate = useNavigate();
  async function handleBuy() {
    const orderData = {
      buyer: {
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        phone: '555-555-5555',
        adress: '123 Main Street'
      },
      items: cart,
      total: priceInCart(),
      date: new Date(),
    };
    const orderId = await postOrder(orderData);

    navigate(`/checkout/${orderId}`);

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
        <button onClick={handleBuy} type="button" className="btn btn-success m-1">Comprar</button>
        <h3 className='m-1'>Total de la compra <strong>${priceInCart()}</strong> </h3>
      </div>
    </div>
  );
}

export default CartView;