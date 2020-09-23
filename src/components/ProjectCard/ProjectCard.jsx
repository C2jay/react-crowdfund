import React from 'react';
import { Link } from 'react-router-dom';
import "./ProjectCard.css";

function ProjectCard(props) {
    const { projectData } = props;



    return (
        <div className="project-card">
            <Link to={`/project/${projectData.id}`}>               
                <div id="card-text">
                    <h4>{projectData.title}</h4>
                    <p> {projectData.owner}</p>
                </div>
                    <img src={projectData.project_image} />
                <div id="card-category">
                    <p>{projectData.category}</p>
                </div>
                <div id="card-date">
                    <p>{projectData.date_created}</p>
                </div>
            </Link>
        </div>
    );
}


export default ProjectCard;