import React from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { allProjects } from '../data';
import "./HomePage.css";

function HomePage() {
    return (
        <div>
        <div className='image-bar'></div>
            <div id="project-list">
                {allProjects.map((projectData, key) => {
                    return <ProjectCard key={key} projectData={projectData} />;
                })}
            </div>
        </div>
    );
}





export default HomePage;