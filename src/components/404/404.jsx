import React from 'react';
import { Link } from 'react-router-dom';

function Error404 () {
  return (
    <div className="container mt-5">
      <div className="card text-center">
        <div className="card-header">
          <h2>ERROR 404 :c</h2>
        </div>
        <div className="card-body">
          <h5 className="card-title">No hay nada por aqui! esta pagina no existe, lo 100to.</h5>
          <p className="card-text">Continua explorando nuestra amplia variedad de productos!</p>
          <Link to={'/'}>
            <button className="btn btn-primary">Seguir explorando</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error404;