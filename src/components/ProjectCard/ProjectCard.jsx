import React from 'react';
import { Link } from 'react-router-dom';
import "./ProjectCard.css";


function ProjectCard(props) {
    const { projectData } = props;
    const date = new Date(projectData.date_created);


    return (
        <div className="project-card">
            <Link to={`/project/${projectData.id}`}>               
                <div id="card-text">
                    <h4 id='project-title'>{projectData.title}</h4>
                    <p id='project-owner'> {projectData.owner}</p>
                </div>
                    <img alt="project-proposal" src={projectData.project_image} />
                <div id="card-text">
                    <p id='project-category'> {projectData.category}</p>
                    <p id='project-date'>{date.toLocaleDateString()}</p>
                </div>
            </Link>
        </div>
    );
}


export default ProjectCard;