import ItemCount from './../ItemListContainer/ItemCount';
import { useContext, useState } from 'react';
import { cartContext } from './../../context/cartContext';
import { Link } from 'react-router-dom';

function ItemDetail({ product }) {

  const { addToCart } = useContext(cartContext)
  const [isInCart, setIsInCart] = useState(false)

  // 1° declaramos un handler para el evento
  // 4° recibimos por parametro la respuesta de ItemCount
  function onAddToCart(count) {
    addToCart(product, count)
    setIsInCart(true)
  }
  return (<>
    <div className="container ">
      <div className="card w-100 m-4 text-center">
        <h5 className="card-header">{product.title}</h5>
        <div className="row">
          <div className="col-4">
            <img className='img-fluid' src={product.imgurl} style={{maxHeight: '250px'}} alt={`${product.title} ${product.id}`} />
          </div>
          <div className="col-8 d-flex">
            <div className="card-body" style={{alignSelf: 'center'}}>
              <h2 className="card-title">{`$ ${product.price}`}</h2>
              <p className="card-text">{product.description}</p>
              {isInCart ?
                <Link to='/cart'>
                  <button className="btn btn-primary m-2">Ir al carrito</button>
                </Link> :
                // 2° pasamos por Prop el evento al ItemCount 
                <ItemCount inicio={1} stock={product.stock} onAddToCart={onAddToCart} />
              }
            </div>
          </div>
        </div>
      </div>

    </div>
    <div className="container w-75">
      <div className="col-md-6">
        <Link to={`/`}>
          <button className="btn btn-primary m-2">Volver</button>
        </Link>
      </div>
    </div>

  </>
  )
}

export default ItemDetail;