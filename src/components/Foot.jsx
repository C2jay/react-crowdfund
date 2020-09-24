import React from 'react';
import { Link } from 'react-router-dom';
import "./Foot.css";
import Logo from './logo/sugarmomma.png';




function Foot() {
    return (
        <div className='foot-container'>
            <div id='logo-image'>
                <Link to="/">
                <img src={Logo} alt="Sugarmomma"/>
                </Link>
            </div>

            <nav id='nav-text'>
                <Link to="/">Login</Link>
                <Link to="/register">Join the kitchen</Link>
            </nav>
            
            <div className='social-icons'>
                <img src=""></img>
                <img src=""></img>
                <img src=""></img>
            </div>
        </div>
    );
}

export default Foot;