import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


function UserProfile() {
    const [UserData, setUserData] = useState({ projects: [] });
    const { id } = useParams();
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUserData(data);
            });
    }, []);



    return (
    <h1>{ UserData.username }</h1>
    );
}


export default UserProfile;