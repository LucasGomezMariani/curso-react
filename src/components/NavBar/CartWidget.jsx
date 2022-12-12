import './categorias.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';

function CartWidget() {
	const {itemsInCart} = useContext(cartContext)
	return (
		<Link to={"/cart"}>
			<FontAwesomeIcon icon={faCartShopping} style={{ color: 'white', marginLeft: '10px' }} />
			{(itemsInCart() === 0) || <small style={{ color: 'white' }} className='ms-1'>{itemsInCart()}</small>}

		</Link>
	)
}

export { CartWidget };