import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getSingleItem } from './../../service/mockService';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {

    const [product, setProduct] = useState({})
    const { id } = useParams();

    async function getItemAsync() {
        let answer = await getSingleItem(id);
        setProduct(answer);
    };

    useEffect(() => {
        getItemAsync();
    }, []);

    return <ItemDetail 
        title={product.title}
        imgurl={product.imgurl}
        id={product.id}
        price={product.price}
        description={product.description}
        stock={product.stock}
    />
}

export default ItemDetailContainer;