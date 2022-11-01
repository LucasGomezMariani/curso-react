import './NavBar.css';
import './categorias.css'
import { CartWidget } from './CartWidget';

function NavBar(prop) {
    
    return(
        <nav className="NavBar">
            <a href='/'>{prop.logo}</a>
            <h2>{prop.brand}</h2>
            
            <lu className="Categorias">
                <li>
                    <a href='/'>Electronica</a>
                </li>
                <li>
                    <a href='/'>Calzado</a>
                </li>
                <li>
                    <a href='/'>Accesorios</a>
                </li>
            </lu>
            <CartWidget />
        </nav>
    )
}

export {NavBar};