import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Product from './Product';
import Cart from './Cart';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Footer from './Footer';
import { ShoppingCart } from 'lucide-react';
import Loginpage from './Loginpage';

function App() {
  const api = axios.create({
    baseURL: 'https://api.github.com/',
    timeout: 5000,
    headers: {'X-Custom-Header': 'value'}
  });

  const [comman, setComman] = useState([]);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header cartCount={comman.length} />}>  {/* Pass cart count */}
            <Route index element={<Home />} />
            <Route path="/product" element={<Product comman={comman} setComman={setComman} />} />
            <Route path="/cart" element={<Cart comman={comman} setComman={setComman} />} />
            <Route path="/loginpage" element ={ <Loginpage/> }/>
          </Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;