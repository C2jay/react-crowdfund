import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ProgressBar from '../components/ProgressBar/ProgressBar';

function ProjectPage() {
    const [projectData, setProjectData] = useState({ pledges: [] });
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data);
            });
    }, []);
    
    const updateProject = (() => {
        const payload = {
            title: "Poobumwee",
            category: "CK",
            description: "Big ol cakey boi",
            goal: 80,
            is_open: true
        }
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            Authorization: "Token 5eb4760bfd8b980aac4fa5f6058cd659e1591e85",
            body: payload
        })
        .then(data => alert(data.status))
        .catch(err => alert(err))
    })
    let pledged = 0
    projectData.pledges.map((pledge) => pledged += pledge.amount)

    return (
        <div>
            <h2>{projectData.title}</h2>
            <h3>Created at: {projectData.date_created}</h3>
            <h3>{`Status: ${projectData.is_open}`}</h3>
            <h3>{`Total pledged: ${pledged}`}</h3>
            <ProgressBar bgcolor="#6a1b9a" completed={Math.min((pledged/projectData.goal)*100, 100)} />
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
            <button type='button' name='Edit Project' onClick={updateProject}>Edit</button>
        </div>
    );
}

export default ProjectPage