import './App.css';
import ItemListConteiner from './components/ItemListConteiner';
import Links from './components/Links';
import NavBar from './components/NavBar';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
   <>
      <NavBar/>
      <Links/>
      <ItemListConteiner greeting="Esto es una prop"/>
      <h2>Las ofertas de la semana</h2>
      <ToastContainer/>
   </>
  );
}

export default App;
