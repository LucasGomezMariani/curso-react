import React from 'react';
import { Link } from 'react-router-dom';

function CartEmpty() {
  return (
    <div className="container mt-5">
      <div className="card text-center">
        <div className="card-header">
          <h2>Carrito de compras</h2>
        </div>
        <div className="card-body">
          <h5 className="card-title">El carrito está vacio :c</h5>
          <p className="card-text">Explora nuestra amplia variedad de productos!</p>
          <Link to={'/'}>
            <button className="btn btn-primary">Seguir explorando</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartEmpty;