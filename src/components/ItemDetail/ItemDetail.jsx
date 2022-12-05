import ItemCount from './../ItemListContainer/ItemCount';
import { useContext } from 'react';
import { cartContext } from './../../context/cartContext';

function ItemDetail({ product }) {

    const {addToCart} = useContext(cartContext)


    // 1° declaramos un handler para el evento
    // 4° recibimos por parametro la respuesta de ItemCount
    function onAddToCart (count) {
        alert(`se agregaron al ${count} carrito`)
        addToCart(product, count)
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
                <ItemCount
                    inicio={1}
                    stock={product.stock}
                    // 2° pasamos por Prop el evento al ItemCount
                    onAddToCart={onAddToCart}
                />
            </div>

        </div>
    )
}

export default ItemDetail;