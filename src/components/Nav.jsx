import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";
import Logo from './logo/sugarmomma.png';




function Nav() {


    return (
        <div className='nav-container'>
            <div className='logo-search-bar'>
                <div id='logo-image'>
                    <Link to="/">
                    <img src={Logo} alt="Sugarmomma"/>
                    </Link>
                </div>
                <div className='search-bar'>
                    <p>searchbar placeholder</p>
                    <p>category search</p>
                </div>
            </div>
            <nav id='nav-text'>
                <Link to="/login">Login</Link>
                <Link to="/register">Join the kitchen</Link>
            </nav>
        </div>
    );
}

export default Nav;