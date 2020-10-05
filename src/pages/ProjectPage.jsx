import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory, useLocation } from "react-router-dom";
import ProgressBar from '../components/ProgressBar/ProgressBar';
import './ProjectPage.css';

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
    
    const Owner=(() => {
        let owner = false
        if((token != null) && (username === projectData.owner)) {
            owner = true
        }
        return owner
    })


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
                <img alt="project-proposal" src={projectData.project_image} />
                <p>{projectData.description}</p>
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
            
            <Link id="submit" to={`/project/${id}/make-pledge`}>Make pledge</Link>
            <Link id="submit" to={`/project/${id}/update`}>Edit Project</Link>
            <button id="submit" onClick={handleDelete}>Delete Project</button>

        </div>
    );
}

export default ProjectPage;