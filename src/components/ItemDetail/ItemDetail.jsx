function ItemDetail(product) {
    return (
        <div className="container d-flex justify-content-center">
            <div className="card w-50 m-5 text-center">
                <h5 className="card-header">{product.title}</h5>
                <img src={product.imgurl} className="card-img-top" alt={`${product.title} ${product.id}`} />
                <div className="card-body">
                    <h2 className="card-title">{`$ ${product.price}`}</h2>
                    <p className="card-text">{product.description}</p>
                    <a href="/" className="btn btn-primary">Agregar al carrito</a>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;