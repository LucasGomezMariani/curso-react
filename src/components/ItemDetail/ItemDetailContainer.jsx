import { getSingleItem } from './../../service/mockService';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const [product, setProduct] = useState([])

    async function getItemAsync() {
        let answer = await getSingleItem();
        setProduct(answer);
    }

    useEffect(() => {
        getItemAsync();
    }, []);

    return (
        <ItemDetail
            title={product.title}
            imgurl={product.imgurl}
            id={product.id}
            price={product.price}
            description={product.description}
        />

    )
}

export default ItemDetailContainer;