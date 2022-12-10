import React from 'react';
import { useParams } from 'react-router-dom';


function CheckOut() {
  const idOrder = useParams().idOrder;

  return (
    <div className='container'>
      <h1>Gracias por su compra</h1>
      <h3>El id de tu compra es : <strong>{idOrder}</strong></h3>
    </div>
  );
}

export default CheckOut;