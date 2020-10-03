import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function RegisterForm() {
    // variables
    const [credentials, setCredentials] = useState ({
        username: "",
        password: "",
        email: "",
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
            `${process.env.REACT_APP_API_URL}register/`, 
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
        postData().then((response) => {
            alert('boo')
            window.localStorage.setItem('username', credentials.username)
            window.localStorage.setItem("token", response.token);
            history.push("/");
        });
    };

    // template
    return (
        <form>
            <div>
                <label htmlFor="username">Username: </label>
                <input 
                type="text" 
                id="username" 
                placeholder="Enter username" 
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input 
                type="password" 
                id="password" 
                placeholder="Enter Password" 
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">email: </label>
                <input 
                type="text" 
                id="email" 
                placeholder="Enter email" 
                onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>Register</button>
        </form>
    );
}

export default RegisterForm;