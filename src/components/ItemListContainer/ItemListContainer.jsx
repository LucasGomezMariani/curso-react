import { Title } from "../Title/Title";
import ItemList from './ItemList';

function ItemListContainer() {

    return (
        <div className="container">
            <Title greeting='Productos' />
            <div className="row row-cols-1 row-cols-md-3 g-5">
                <ItemList />
            </div>
        </div>
    )
}

export { ItemListContainer };