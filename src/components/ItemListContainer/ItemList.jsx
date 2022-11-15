import { useState, useEffect } from "react";
import getData from './../../service/mockService';
import Item from './Item';

function ItemList() {
    const [products, setProducts] = useState([]);

    useEffect(
        () => {
            getData().then((respuestaData) => {
                setProducts(respuestaData);
            });

        }, []
    );
return (
        products.map((product) => {
            return (
                <Item
                    key={product.id}
                    
                    id={product.id}
                    title={product.title + " " + product.id}
                    price={"$" + product.price}
                    imgurl={product.imgurl}
                    stock={product.stock}
                    category={product.category}
                />
            )
        })
)
}

export default ItemList;