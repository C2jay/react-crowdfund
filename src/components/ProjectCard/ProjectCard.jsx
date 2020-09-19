import React from 'react';
import { Link } from 'react-router-dom';
import "./ProjectCard.css";

function ProjectCard(props) {
    const { projectData } = props;



    return (
        <div className="project-card">
            <Link to="/project">
                <h3>{projectData.title}</h3>
                <img src={projectData.project_image} />
                
            </Link>
        </div>
    );
}


export default ProjectCard;