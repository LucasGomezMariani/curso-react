import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
        <NavBar brand='BARATITO' logo='' />
      <Routes>
        <Route path='/' element= {<ItemListContainer />}  />
        <Route path='/detail/*' element= {<ItemDetailContainer />}  />
        
      </Routes>
    </BrowserRouter>
  );
}




export default App;
