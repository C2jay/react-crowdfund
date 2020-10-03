import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ProgressBar from '../components/ProgressBar/ProgressBar';
import "./ProjectPage.css";



function ProjectPage() {
    const [projectData, setProjectData] = useState({ pledges: [] });
    const { id } = useParams();
    const date = new Date(projectData.date_created);
    const readableDate = date.toString();
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data);
            });
    }, []);

    
    let pledged = 0
    projectData.pledges.map((pledge) => pledged += pledge.amount)
    return (
        <div>
            <div className='project-heading'>
                <h2>{projectData.title}</h2>
                <h3>created at: {date.toLocaleDateString()}</h3>
                <h3>{`Status: ${projectData.is_open}`}</h3>
                <h3>{`Total pledged: ${pledged}`}</h3>
            </div>
            <div className='progress-bar'>
                <ProgressBar bgcolor="#6a1b9a" completed={Math.min((pledged/projectData.goal)*100, 100)} />
            </div>
            
            <div className='pledges-container'>
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
        </div>
    );
}
export default ProjectPage;