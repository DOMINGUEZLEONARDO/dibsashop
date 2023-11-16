
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemList/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout'
import { CartProvider } from '../src/context/CartContext';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <CartProvider>
       <NavBar />       
        <Routes>
        <Route path='/' element ={<ItemListContainer/>}/>
          <Route path='/inicio' element ={<ItemListContainer/>}/>
          <Route path='/category/:category' element ={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element ={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='*' element ={<h1>404 not found</h1>}/>
       </Routes>
       </CartProvider>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
