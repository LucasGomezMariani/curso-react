function Item(prop) {


    return (
        <div className="col">
            <div className="card">
                <img src={prop.imgurl} className="card-img-top" alt={`${prop.title} ${prop.id}`} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center">{prop.title}</h5>
                    <h3 className="card-title text-center pb-3">{prop.price}</h3>
                    <a href="/" className="btn btn-primary justify-content-center">Agregar al carrito</a>
                </div>
            </div>
        </div>
    )
}

export default Item;