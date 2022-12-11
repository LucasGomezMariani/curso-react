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
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/category/electronica" className="nav-link active" aria-current="page">Electronica</Link>
            </li>
            <li className="nav-item">
              <Link to="/category/calzado" className="nav-link active" aria-current="page">Calzado</Link>
            </li>
            <li className="nav-item">
              <Link to="/category/accesorios" className="nav-link active" aria-current="page">Accesorios</Link>
            </li>
            <li className="nav-item" style={{ alignSelf: 'center' }}>
              <CartWidget />
            </li>
          </ul>
          <Search />
        </div>
      </div>
    </nav>
  )
}

export { NavBar };