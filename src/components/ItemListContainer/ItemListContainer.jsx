import { Item } from "./Item";
function ItemListContainer (props) {
    return(
        <>
            <h1>{props.greeting}</h1>
            <Item/>
            <Item/>
            <Item/>
        </>
    )
}

export {ItemListContainer};