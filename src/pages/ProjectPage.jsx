import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from "react-router-dom";
import ProgressBar from '../components/ProgressBar/ProgressBar';
import PledgeForm from '../components/PledgeForm/PledgeForm';

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
    const history = useHistory();


    // const updateProject = (() => {
    //     fetch(`${process.env.REACT_APP_API_URL}projects/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Title': projectData.title,
    //             'category': projectData.category,
    //             'description': projectData.description,
    //             'goal': projectData.goal,
    //             'project_image': projectData.project_image,
    //         }
    //     })
    //     .then((results) => {
    //         return results.json();
    //     })
    //     .then((data) => {

    //     })
    // })
    
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
            <Link to={{pathname: `/project/${id}/make-pledge`, state: {project_id: "fatfat"} }}>Make pledge</Link>
            {/* <button type='button' name='Edit Project' onClick={<NewProjectForm/>}>Edit</button> */}
        </div>
    );
}

export default ProjectPage;