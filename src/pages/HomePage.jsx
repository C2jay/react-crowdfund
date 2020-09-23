import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { allProjects } from '../data';
import "./HomePage.css";

function HomePage() {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectList(data);
        });
        // setProjectList(allProjects);
    }, []);


    return (
        <div>
        <div className='image-bar'></div>
            <div id="project-list">
                {projectList.map((projectData, key) => {
                    return <ProjectCard key={key} projectData={projectData} />;
                })}
            </div>
        </div>
    );
}





export default HomePage;