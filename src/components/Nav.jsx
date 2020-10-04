import React, {  useState, useEffect} from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import "./Nav.css";
import Logo from './logo/sugarmomma.png';



function Nav() {

    const [loggedIn, setLoggedIn] = useState(false);
    const history = useHistory();
    const location = useLocation();


    useEffect(() => {
        const token = window.localStorage.getItem("token");
        token != null ? setLoggedIn(true) : setLoggedIn(false);
    }, [location]);

    const logOut = () => {
        window.localStorage.clear();
        history.push("/");
    }

    const username = window.localStorage.getItem("username")


    return (
        <div className='nav-container'>
            <div className='logo-search-bar'>
                <div id='logo-image'>
                    <Link to="/">
                    <img src={Logo} alt="Sugarmomma"/>
                    </Link>
                </div>
                <div id='username'>
                {loggedIn? (
                    <Link to="/user-profile">{ username }</Link>
                ):""}
                </div>
            </div>
            <nav id='nav-text'>
                
                {loggedIn? (
                <Link id='nav-button' to="/new-project">Bake a new cake</Link>
                ) :(
                <Link id='nav-button' to="/register">Join the kitchen</Link>
                )}

                {!loggedIn? (
                    <Link id='nav-button' to="/login">Login</Link>
                ) : (
                    <Link id='nav-button' onClick={logOut}>Logout</Link>
                )}
            </nav>
        </div>
    );
}

export default Nav;