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
  return (
    <div className="container d-flex justify-content-center">
      <div className="card w-50 m-5 text-center">
        <h5 className="card-header">{product.title}</h5>
        <img src={product.imgurl} className="card-img-top" alt={`${product.title} ${product.id}`} />
        <div className="card-body">
          <h2 className="card-title">{`$ ${product.price}`}</h2>
          <p className="card-text">{product.description}</p>
        </div>
        {isInCart ?
          <Link to='/cart'>
            <button className="btn btn-primary m-2">Ir al carrito.</button>
          </Link> :
          // 2° pasamos por Prop el evento al ItemCount 
          <ItemCount inicio={1} stock={product.stock} onAddToCart={onAddToCart} />
        }
      </div>

    </div>
  )
}

export default ItemDetail;