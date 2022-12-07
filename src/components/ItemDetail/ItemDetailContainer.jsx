import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getSingleItem } from './../../service/mockService';
import ItemDetail from './ItemDetail';
import { LinesLoader } from './../loader/Loaders';

function ItemDetailContainer() {

  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams();

  function getItemAsync() {
    getSingleItem(id).then((answer) => {
      setProduct(answer);
      setLoading(false);
    })
  };

    useEffect(() => {
      getItemAsync();
    }, []);

    if (loading) return (<LinesLoader/>);

    return <ItemDetail
      product={product}
    />
  }

  export default ItemDetailContainer;