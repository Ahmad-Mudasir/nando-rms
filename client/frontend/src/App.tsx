
import './App.css'
import Navbar from './Components/Header/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home  from './Components/Home'
import About  from './Components/About'
import Contact from './Components/Contact'
import { CartProvider } from './context/CartContext';
import Cart from './Components/Cart'
import MyOrders from './Components/MyOrders'
function App() {
  return (
    
    
    
    <BrowserRouter>
    <CartProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/orders" element={<MyOrders/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>

    </CartProvider>
    </BrowserRouter>
    
     
    
  );
}

export default App
