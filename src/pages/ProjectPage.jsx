import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from "react-router-dom";
import ProgressBar from '../components/ProgressBar/ProgressBar';
import PledgeForm from '../components/PledgeForm/PledgeForm';
import './ProjectPage.css';
import UpdateProjectForm from '../components/UpdateProjectForm/UpdateProjectForm';

function ProjectPage() {
    const [projectData, setProjectData] = useState({ pledges: [] });
    const { id } = useParams();
    const date = new Date(projectData.date_created);
    let token = window.localStorage.getItem("token");
    let username = window.localStorage.getItem("username");


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data);
            });
    }, []);
    const history = useHistory();

    
    // const updateProject = (() => {
    //     const payload = {
    //         "title": "Project biandfknasdklfsdkfsdjlkafjdls",
    //         "category": "Cake",
    //         "description": "The first project.",
    //         "goal": 150,
    //         "project_image": "https://via.placeholder.com/300.jpg",
    //         "is_open": true,
    //     }
    //     fetch(`${process.env.REACT_APP_API_URL}projects/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //             Authorization: "Token 5eb4760bfd8b980aac4fa5f6058cd659e1591e85",
    //         },
    //         body: JSON.stringify(payload)
    //     })
    //     .then(data => alert(data.status))
    //     .catch(err => alert(err))
    // })

    const deleteProject=(() => {
        if (projectData.owner === username){
            return fetch(`${process.env.REACT_APP_API_URL}projects/${id}`, {
                method: 'DELETE',
                headers:    {
                    'Content-type': 'application/json; charset=UTF-8',
                    Authorization: `Token ${token}`,
                },
            })
        } else {
            alert('You are not the owner of this project')
        }
    });

    const handleDelete = (e) => {
        e.preventDefault();
        deleteProject().then(() => {
                history.push("/");
        })};

    let pledged = 0
    projectData.pledges.map((pledge) => pledged += pledge.amount)

    return (
        <div className='project-container'>
            <div>
                <h2 className="page-title">{projectData.title}</h2>
                <h2>{projectData.owner}</h2>
                <h3 className="sub-heading">{date.toLocaleDateString()}</h3>
                <img src={projectData.project_image} />
                <p>{`Total pledged: ${pledged} / ${projectData.goal}`}</p>
                <ProgressBar bgcolor="#6a1b9a" completed={Math.min((pledged/projectData.goal)*100, 100)} />
            </div>

            <div>
                <h3>Pledges:</h3>
                <ul>
                    {projectData.pledges.map((pledgeData, key) => {
                        return (
                            <div>
                                <br></br>
                                <li>
                                    {pledgeData.amount} from {pledgeData.supporter}
                                </li>
                                <p>{pledgeData.comment}</p>
                                <p>{pledgeData.pledges}</p>
                            </div>
                        );
                    })}
                </ul>
            </div>

            
            <Link to={`/project/${id}/make-pledge`}>Make pledge</Link>
            <button onClick={handleDelete}>Delete Project</button>
            <Link to={`/project/${id}/update`}>Update Project</Link>
            {/* <button type='button' name='Edit Project' onClick={<NewProjectForm/>}>Edit</button> */}
        </div>
    );
}

export default ProjectPage;