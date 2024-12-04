import { Outlet, Link } from 'react-router-dom';
import './App.css';
import logo from './images/logo.png'
import { ShoppingBasket } from 'lucide-react';

function Header({ cartCount }) {  // Accept cartCount prop
  return (
    <div> 
      <nav className="navigatio12  navbar-expand-lg navbar bg-dark position-fixed">
        <div className="container d-flex justify-content-center justify-content-between">
          <Link className="navbar-brand text-white" to="/"><img src={logo}  height="50px"/><b> MASSZ</b></Link>
          <div className="navbar-nav">
            <Link className="menu1 nav-link text-white" to="/">Home</Link>
            <Link className="menu1 nav-link text-white" to="/product">Products</Link>
            <Link className="menu1 nav-link  text-white position-relative" to="/cart">
            <ShoppingBasket />
                          {cartCount > 0 && (
                <span className="position-absolute  top-30 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                  {cartCount}
                  <span className="visually-hidden">items in cart</span>
                </span>
              )}
            </Link>
            <Link className="nav-link   " to="/Loginpage"><button className='btn btn-warning py-1 '> Login </button>  </Link>

          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Header;