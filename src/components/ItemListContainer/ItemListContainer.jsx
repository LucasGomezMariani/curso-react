import { useState, useEffect } from "react";
import { getData, getDocumentByCategory } from './../../service/fireStore';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { Title } from "../Title/Title";
import { LinesLoader } from './../loader/Loaders';

function ItemListContainer() {

  const [products, setProducts] = useState(null);
  const { id } = useParams();

  async function getDataAsync() {
    if (!id) {
      let answer = await getData();
      setProducts(answer);
    } else {
      let answer = await getDocumentByCategory(id)
      setProducts(answer);
    };
  }

  useEffect(() => {
    // 1° funcion del efecto. La que ejecuta el efecto
    getDataAsync()
    // 2° funcion del efecto. Se ejecuta cuando se desmonta el componente
    return () => { setProducts(null) }
  }, [id]);

  return (
    <div className="container">
      <Title greeting='Productos' />
      {products ? <ItemList products={products} /> : <LinesLoader />}
    </div>
  )
}

export { ItemListContainer };