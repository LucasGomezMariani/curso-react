import Item from './Item';

function ItemList({ products }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-5">
      {products.map(product => {
        return (<Item key={product.id} product={product} />)
      })}
    </div>
  )
}

export default ItemList;