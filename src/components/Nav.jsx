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
                    <p>{ username }</p>
                ):""}
                </div>
            </div>
            <nav id='nav-text'>
                
                {loggedIn? (
                <Link id='nav-button' to="/new-project"><b>Bake a new cake</b></Link>
                ) :(
                <Link id='nav-button' to="/register"><b>Join the kitchen</b></Link>
                )}

                {!loggedIn? (
                    <Link id='nav-button' to="/login"><b>Login</b></Link>
                ) : (
                    <Link id='nav-button' onClick={logOut}><b>Logout</b></Link>
                )}
            </nav>
        </div>
    );
}

export default Nav;