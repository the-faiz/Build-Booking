import React, { useEffect } from 'react'
import './Navbar.css';
import {Link} from "react-router-dom";
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function Navbar() {
    let location = useLocation();
    let history = useHistory();
    const handelLogout=()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        history.push('/login');
    }


    return (
        <>
            <nav className="bg-info" >
                <div className="menu">
                    <i className="fa-solid fa-bars"></i>
                </div>
                <h3><a href="/">Home Hub</a></h3>
                <div>
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/reviews">Reviews</a></li>
                </div>
                <div id="nav_buttons">
                    <Link type="button" className="btn btn-light" to="/subscribe">Subscribe</Link>

                    {!localStorage.getItem('token')?<><Link type="button" className="btn btn-light mx-2" to="/login">Login</Link>
                    <Link type="button" className="btn btn-light mx-2" to="/singup">Singup</Link></>:<><button className="btn btn-success mx-3"><i className="fa-regular fa-user mx-1"></i>{localStorage.getItem('name')}</button><button className="btn btn-dark mx-2" onClick={handelLogout} role="button">Logout</button></>}
                </div>
            </nav>

        </>
    )
}
