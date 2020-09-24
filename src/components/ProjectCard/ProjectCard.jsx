import React from 'react';
import { Link } from 'react-router-dom';
import "./ProjectCard.css";
import ProgressBar from '../ProgressBar/ProgressBar';


function ProjectCard(props) {
    const { projectData } = props;
    const testData = [
        { bgcolor: "#6a1b9a", completed: 60 },
        { bgcolor: "#00695c", completed: 30 },
        { bgcolor: "#ef6c00", completed: 53 },
      ];


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
                {/* <div>
                    {testData.map((item, idx) => (
                    <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                </div> */}
            </Link>
        </div>
    );
}


export default ProjectCard;