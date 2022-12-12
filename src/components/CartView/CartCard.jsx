import React from 'react';
import { Link } from 'react-router-dom';

function CartCard({ product, handleClick }) {
  return (
    <div className="card mb-3" style={{ maxHeight: '150px' }}>
      <div className="row g-0 align-items-center">
        <div className="col-md-3">
          <Link to={`/item/${product.id}`}>
            <img src={product.imgurl} className="rounded-start p-3 " alt="..." style={{ maxHeight: '150px', maxWidth: '100%' }} />
          </Link>
        </div>
        <div className="col-md-6">
          <div className="card-body d-flex row justify-content-center text-center">
            <h2 className="card-title">{product.title}</h2>
            <small className="card-title">{product.description}</small>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-body row align-items-center text-center">
            <h3 className="card-text">${product.price}</h3>
            <p className="card-text">Cantidad {product.count}</p>
            <div>
              <button onClick={handleClick} type="button" className="btn btn-danger">Eliminar</button>            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;