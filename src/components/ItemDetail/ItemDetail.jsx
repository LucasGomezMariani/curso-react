import ItemCount from './../ItemListContainer/ItemCount';

function ItemDetail({ title, imgurl, id, price, description, stock }) {
    // 1° declaramos un handler para el evento
    // 4° recibimos por parametro la respuesta de ItemCount
    function onAddToCart (count) {
        alert(`se agregaron al ${count} carrito`)
    }
    return (
        <div className="container d-flex justify-content-center">
            <div className="card w-50 m-5 text-center">
                <h5 className="card-header">{title}</h5>
                <img src={imgurl} className="card-img-top" alt={`${title} ${id}`} />
                <div className="card-body">
                    <h2 className="card-title">{`$ ${price}`}</h2>
                    <p className="card-text">{description}</p>
                </div>
                <ItemCount
                    inicio={1}
                    stock={stock}
                    // 2° pasamos por Prop el evento al ItemCount
                    onAddToCart={onAddToCart}
                />
            </div>

        </div>
    )
}

export default ItemDetail;