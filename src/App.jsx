import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './context/cartContext';
import CartView from './components/CartView/CartView';
import CheckOut from './components/CheckOut/CheckOut';
import Error404 from './components/404/404';

function App() {
  
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar brand='BARATITO' logo='' />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartView/>} />
          <Route path='/checkout/:idOrder' element={<CheckOut/>} />
          <Route path='*' element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}




export default App;
