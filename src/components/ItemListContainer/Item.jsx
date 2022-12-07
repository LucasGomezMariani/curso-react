import { Link } from 'react-router-dom';
function Item({ product }) {

  const urlDetail = `/item/${product.id}`

  return (
    <div className="col">
      <div className="card">
        <img src={product.imgurl} className="card-img-top" alt={`${product.title} ${product.id}`} />
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title text-center">{product.title}</h5>
          <h3 className="card-title text-center pb-3">{product.price}</h3>
          <Link to={urlDetail}>
            <button className="btn btn-primary">Ver Más</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Item;