import './navBar.css';
import './categorias.css'
import { CartWidget } from './CartWidget';
import { Link } from "react-router-dom";

function NavBar(prop) {

    return (
        <>
        <nav className="navBar_">
            <Link to="/">{prop.logo}</Link>
            <Link to='/'><h2>{prop.brand}</h2></Link>

            <lu className="Categorias">
                <li>
                    <Link to="/category/electronica">Electronica</Link>
                </li>
                <li>
                    <Link to="/category/calzado">Calzado</Link>
                </li>
                <li>
                    <Link to="/category/accesorios">Accesorios</Link>
                </li>
            </lu>
            <CartWidget />
        </nav>
        </>
    )
}

export { NavBar };