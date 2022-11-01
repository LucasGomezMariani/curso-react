import './categorias.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
    return(
        <>
        <a href="/"><FontAwesomeIcon icon={ faCartShopping } /></a>
         
        </>

    )
}

export {CartWidget};