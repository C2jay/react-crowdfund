import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function UpdateProjectForm() {
    // variables
    const { id } = useParams()
    const[projectDetails, setProjectDetails] = useState({})
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectDetails(data);
            });
    }, []);


    const token = window.localStorage.getItem("token");
    
    const history = useHistory();

    const handleChange = (e) => {
        const {id, value} = e.target;
        setProjectDetails((prevProjectDetails) => ({
            ...prevProjectDetails,
            [id]: value,
        }));
    };
  
    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
                },
            body: JSON.stringify(projectDetails),
            })
        .then((results) => {
            return results;
        })
        .then((results) => {
            if (results.ok) {
                history.push("/");
            } else {
            alert(JSON.stringify(results.statusText))
            }
        })
};

    // template
    return (
        <form>
            <div className='form-container'>
                <label htmlFor="title">Project Title: </label>
                <input 
                type="text" 
                id="title"
                value={projectDetails.title}
                onChange={handleChange} 
                />
            </div>
            <div className='form-container'>
                <label htmlFor="category">Select Category: </label>
                <select 
                type="select"
                id="category"
                value={projectDetails.category}
                onChange={handleChange} 
                >
                    <option value="Cupcakes">Cupcakes 🧁</option>
                    <option value="Cake">Cake 🍰</option>
                    <option value="Pastry">Pastry 🥐</option>
                    <option value="Pies">Pies 🥧</option>
                    <option value="Cookies">Cookies 🍪</option>
                    <option value="Other">Other 🍭</option>

                </select>
            </div>
            <div className='form-container' id='description'>
                <label htmlFor="descripton">Description: </label>
                <textarea 
                type="text" 
                id="description" 
                value={projectDetails.description}
                onChange={handleChange} 
                />
            </div>
            <div className='form-container'>
                <label htmlFor="goal">Goal: </label>
                <input 
                type="number" 
                id="goal" 
                value={projectDetails.goal} 
                onChange={handleChange} 
                />
            </div>
            <div className='form-container'>
                <label htmlFor="project_image">Project Image: </label>
                <input 
                type="url" 
                id="project_image" 
                value={projectDetails.project_image}
                onChange={handleChange} 
                />
            </div>
        
            
            <button id="submit" type="submit" onClick={handleUpdate}>Update</button>
        </form>
    );
}


export default UpdateProjectForm;
