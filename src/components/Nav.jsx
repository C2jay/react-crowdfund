import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";



function Nav() {
    return (
        <nav className='nav-container'>
            <nav id='nav-text'>
                <Link to="/">Home</Link>
                <Link to="/project">Project</Link>
            </nav>
            <nav className="image-bar"></nav>
        </nav>
    );
}

export default Nav;