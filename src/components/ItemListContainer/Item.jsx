function Item (prop) {


    return (
        <div className="container pt-5">
            <div className="card" style={ {width: "18rem"} } >
                <img src={prop.imgurl} className="card-img-top" alt={`${prop.title} ${prop.id}`} />
                    <div className="card-body">
                        <h5 className="card-title">{prop.title}</h5>
                        <p className="card-text">{prop.desciption}</p>
                        <a href="#" className="btn btn-primary">Ver más</a>
                    </div>
            </div>
        </div>
    )
}

export { Item };