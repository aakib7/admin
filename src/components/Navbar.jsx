import React from 'react';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './products/Products';
import Login from '../view/auth/Login';
import Register from '../view/auth/Register';
import Mobiles from './mobiles/Mobiles';
import Admin from './Admin';
const Navbar = () => {
    const isLoggedIn = localStorage.getItem("jwt_access_token") ? true : false;
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
                    {!isLoggedIn?<>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                     <li>
                        <Link to="/register">Register</Link>
                    </li>
                    </>:<button onClick={()=>{localStorage.removeItem("jwt_access_token");
                window.location.reload(true);}}>Logout</button>}
                    
                    
            
                </ul>
                
            </nav>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/login" element={<Login />} />
                <Route path='/register' element={<Register />}/>
                <Route path='/mobiles' element={<Mobiles />}/>
                <Route path='/admin' element={<Admin />}/>
            </Routes>

        </BrowserRouter>
    
    </div> );
}
 
export default Navbar;
