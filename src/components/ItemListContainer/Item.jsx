import { Link } from 'react-router-dom';
function Item({imgurl, title, id, price}) {

    const urlDetail = `/item/${id}`

    return (
        <div className="col">
            <div className="card">
                <img src={imgurl} className="card-img-top" alt={`${title} ${id}`} />
                <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title text-center">{title}</h5>
                    <h3 className="card-title text-center pb-3">{price}</h3>
                    <Link to={urlDetail}>
                    <button className="btn btn-primary">Ver Más</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Item;