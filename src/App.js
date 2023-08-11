import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavB from './components/NavB';
import Products from './components/Products';
import Carts from './components/Carts'

function App() {
  return (
    <div className="App">
      <NavB/>
      
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart' element={<Carts/>}/>
      </Routes>
    </div>
  );
}

export default App;
