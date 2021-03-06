import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginForm() {
    // variables
    const [credentials, setCredentials] = useState ({
        username: "",
        password: "",
    });

    const history = useHistory();

    // methods
    const handleChange = (e) => {
        const {id, value} = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const postData = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}api-token-auth/`, 
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
            body: JSON.stringify(credentials),
            }
        );
        return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.username && credentials.password) {
            postData().then((response) => {
                window.localStorage.setItem("token", response.token);
                window.localStorage.setItem("username", credentials.username);

                history.push("/");
            });

        } else {
            alert("Please check your username and password and try again!")
        }
    };

    // template
    return (
        <form>
            <div className='form-container'>
                <label htmlFor="username">Username: </label>
                <input 
                type="text" 
                id="username" 
                placeholder="Enter username" 
                onChange={handleChange}
                />
            </div>
            <div className='form-container'>
                <label htmlFor="password">Password: </label>
                <input 
                type="password" 
                id="password" 
                placeholder="Enter Password" 
                onChange={handleChange}
                />
            </div>
            <button id="submit" type="submit" onClick={handleSubmit}>Login</button>
        </form>
    );
}

export default LoginForm;