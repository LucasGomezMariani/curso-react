import Item from './Item';

function ItemList({ products }) {
  return (
    <div className="row row-cols-3 row-cols-md-4 row-cols-xl-6 row-cols-xxl-8">
      {products.map(product => {
        return (<Item key={product.id} product={product} />)
      })}
    </div>
  )
}

export default ItemList;