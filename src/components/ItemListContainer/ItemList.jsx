import { useState, useEffect } from "react";
import getData from './../../service/mockService';
import Item from './Item';
import { useParams } from 'react-router-dom';



function ItemList() {
    const [products, setProducts] = useState([]);
    const { id } = useParams(); 
    console.log(useParams());

    useEffect(
        () => {
            getData(id).then((respuestaData) => {
                setProducts(respuestaData);
            });

        }, [id]
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