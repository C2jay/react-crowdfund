import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewProjectForm() {
    // variables
    const [projectInfo , setProjectInfo] = useState ({
        title: "",
        category: "Cupcakes",
        description: "",
        goal: "",
        project_image:"",
        is_open: true,
    });

    const history = useHistory();

    // methods
    const handleChange = (e) => {
        const {id, value} = e.target;
        setProjectInfo((prevProjectInfo) => ({
            ...prevProjectInfo,
            [id]: value,
        }));
    };

    const postData = async () => {
        const date = new Date()
        projectInfo.date_created = date.toISOString()

        let token = window.localStorage.getItem("token");
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}projects/`, 
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
            body: JSON.stringify(projectInfo),
            }
        );
        return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData().then((response) => {
                alert(JSON.stringify(response))
                history.push("/");
        });
    };

    // template
    return (
        <form>
            <div>
                <label htmlFor="title">Project Title: </label>
                <input 
                type="text" 
                id="title" 
                placeholder="Project Title" 
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="category">Select Category </label>
                <select 
                type="select"
                id="category"
                placeholder="select category"
                onChange={handleChange}>
                    <option value="Cupcakes">Cupcakes</option>
                    <option value="Cake">Cake</option>
                    <option value="Pastry">Pastry</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Description: </label>
                <input 
                type="textarea" 
                id="description" 
                placeholder="Write a description about your project here." 
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="goal">Goal: </label>
                <input 
                type="number" 
                id="goal" 
                placeholder="Enter goal cost" 
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="project_image">Project Image: </label>
                <input 
                type="url" 
                id="project_image" 
                placeholder="paste image url here" 
                onChange={handleChange}
                />
            </div>
        
            
            <button type="submit" onClick={handleSubmit}>Publish</button>
        </form>
    );
}


export default NewProjectForm;
