import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function TestUpdateProjectForm(props){
    const { projectDetails } = props;
    const history = useHistory;
    const { id } = useParams();

    useEffect(() => {
        projectDetails({
            title: projectDetails.title,
            category: projectDetails.category,
            description: projectDetails.description,
            goal: projectDetails.goal,
            project_image: projectDetails.project_image,
            is_open: projectDetails.is_open
        })
    },
    [projectDetails]);

    const handleChange = (e) => {
        const {id, value} = e.target;
        projectDetails((prevProjectDetails) => ({
            ...prevProjectDetails,
            [id]: value,
        }));
    };

    const postData = async() => {
        const token = window.localStorage.getItem("token")
        const response = await
        fetch(`${process.env.REACT_APP_API_URL}echo/${id}`,{
            method: 'put',
            headers: {
                "Constent-Type": "application/jason",
                "Authorization": `Token ${token}`,
            },
            body: JSON.stringify(projectDetails),
        });
        return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData().then(res => {
            console.log(res)
            history.push(`echo/{res.id}`)
        });
    }

    return (
        <form>
            <div className='form-container'>
                <label htmlFor="title">Project Title: </label>
                <input 
                type="text" 
                id="title" 
                placeholder="Project Title"
                onChange={handleChange} 
                />
            </div>
            <div className='form-container'>
                <label htmlFor="category">Select Category: </label>
                <select 
                type="select"
                id="category"
                placeholder="select category"
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
                placeholder="Write a description about your project here." 
                onChange={handleChange} 
                />
            </div>
            <div className='form-container'>
                <label htmlFor="goal">Goal: </label>
                <input 
                type="number" 
                id="goal" 
                placeholder="Enter goal cost" 
                onChange={handleChange} 
                />
            </div>
            <div className='form-container'>
                <label htmlFor="project_image">Project Image: </label>
                <input 
                type="url" 
                id="project_image" 
                placeholder="paste image url here" 
                onChange={handleChange} 
                />
            </div>
        
            
            <button id="submit" type="submit" onClick={handleSubmit}>Update</button>
        </form>
    );
};


export default TestUpdateProjectForm;