import React from 'react';
import { useParams, Link } from 'react-router-dom';


function CheckOut() {
  const idOrder = useParams().idOrder;

  return (
    <div className='container'>
      <div className="container mt-5">
        <div className="card text-center">
          <div className="card-header">
            <h1>Gracias por su compra</h1>
          </div>
          <div className="card-body">
            <h3>El id de tu compra es : <strong>{idOrder}</strong></h3>
            <p className="card-text">Puedes seguir explorando nuestra amplia variedad de productos!</p>
            <Link to={'/'}>
              <button className="btn btn-primary">Seguir explorando</button>
            </Link>
          </div>
        </div>
      </div>
    </div>


  );
}

export default CheckOut;