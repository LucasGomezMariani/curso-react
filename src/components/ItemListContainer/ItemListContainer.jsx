import { Item } from "./Item";
import { Title } from "../Title/Title";
import ItemCount from './ItemCount';
import products from './../../data/data';

function ItemListContainer() {
    return (
        <>
            <Title greeting='Productos' />
            <Item />
        </>
    )
}

export { ItemListContainer };