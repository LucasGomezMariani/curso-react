function ItemDetail({title, imgurl, id, price, description}) {
    return (
        <div className="container d-flex justify-content-center">
            <div className="card w-50 m-5 text-center">
                <h5 className="card-header">{title}</h5>
                <img src={imgurl} className="card-img-top" alt={`${title} ${id}`} />
                <div className="card-body">
                    <h2 className="card-title">{`$ ${price}`}</h2>
                    <p className="card-text">{description}</p>
                    <a href="/" className="btn btn-primary">Agregar al carrito</a>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;