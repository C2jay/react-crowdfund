import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css";
import Logo from './logo/sugarmomma.png';
import Facebook from './images/facebook.png';
import Twitter from './images/twitter.png';
import Instagram from './images/instagram.png';




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
                <img src={Twitter}></img>
                <img src={Facebook}></img>
                <img src={Instagram}></img>
            </div>
        </div>
    );
}

export default Foot;


// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>