import React from 'react';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './products/Products';
import Login from '../view/auth/Login';
import Register from '../view/auth/Register';
import Mobiles from './mobiles/Mobiles'
const Navbar = () => {
    return ( <div>
        <BrowserRouter>
            <nav>
                <ul id="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/mobiles">Mobiles</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                     <li>
                        <Link to="/register">Register</Link>
                    </li>
            
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/login" element={<Login />} />
                <Route path='/register' element={<Register />}/>
                <Route path='/mobiles' element={<Mobiles />}/>
            </Routes>

        </BrowserRouter>
    
    </div> );
}
 
export default Navbar;
