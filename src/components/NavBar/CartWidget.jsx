import './categorias.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
// 1.Importamos el hook useContext
import { useContext } from 'react';
// 2. Importamos el context a utilizar
import { cartContext } from '../../context/cartContext';

function CartWidget() {
	// 3. Inicializamos el contexto
	const miContext = useContext(cartContext)
	return (
		<Link to={"/cart"}>
			<FontAwesomeIcon icon={faCartShopping} />
			<span>{miContext.itemsInCart()}</span>
		</Link>
	)
}

export { CartWidget };