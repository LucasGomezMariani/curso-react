import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";


function App() {
  return (
    <>
      <NavBar brand='BARATITO' logo= ''/>
      <ItemListContainer greeting='Productos'/>
    </>
  );
}




export default App;
