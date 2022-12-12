import './NavBar.css';
import './categorias.css'
import { CartWidget } from './CartWidget';
import { Link } from "react-router-dom";
import Search from './Search';

function NavBar({ logo, brand }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/">{logo}</Link>
        <Link to='/' className="navbar-brand">{brand}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo02">

          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categorias
            </button>
            <ul class="dropdown-menu">
              <li>
                <Link to="/category/electronica" className="dropdown-item" aria-current="page">Electronica</Link>
              </li>
              <li>
                <Link to="/category/calzado" className="dropdown-item" aria-current="page">Calzado</Link>
              </li>
              <li>
                <Link to="/category/accesorios" className="dropdown-item" aria-current="page">Accesorios</Link>
              </li>
            </ul>
            <CartWidget />
          </div>
          <Search />
        </div>
      </div>
    </nav>
  )
}

export { NavBar };