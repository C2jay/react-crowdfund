import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import "./HomePage.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../components/images/image1.jpg';
import image2 from '../components/images/image2.jpg';
import image3 from '../components/images/image3.jpg';
import image4 from '../components/images/image4.jpg';
import image5 from '../components/images/image5.jpg';
import Logo from '../components/logo/sugarmomma.png';



function HomePage() {
    const [projectList, setProjectList] = useState([]);
    const [filter, setFilter] = useState();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectList(data);
        });
        // setProjectList(allProjects);
    }, [])

    const changeFilter = (event) => {
        if (event.target.name === "All") {
            setFilter();
        } else {
            setFilter(event.target.name);
        }
    };


    return (
        <div>
            <div className='header-bar'>
               
                <div className='carousel'>
                    <AliceCarousel autoPlay autoPlayInterval="3000">
                        <img src={image1} className="sliderimg" alt="cake"/>
                        <img src={image2} className="sliderimg" alt="cupcakes"/>
                        <img src={image3} className="sliderimg" alt="cupcakes"/>
                        <img src={image4} className="sliderimg" alt="cupcakes"/>
                        <img src={image5} className="sliderimg" alt="cupcakes"/>
                    </AliceCarousel>
                </div>

                <div className='slogan'>
                    <h3>Life is sweet with Sugar Momma!</h3>
                    <img src={Logo} alt="sugarmomma-logo" />
                    <p>Post photos of your completed projects to <span id="emphasis">instagram</span> with the tag <span id="emphasis"> &#35;thnxsugarmomma </span> for a chance to get your image featured here!</p>
                </div>
            </div>
            <div>
                <button type='button' name="Cupcakes" onClick={changeFilter}>Cupcakes</button>
                <button type='button' name="Cake" onClick={changeFilter}>Cake</button>
                <button type='button' name="Pies" onClick={changeFilter}>Pies</button>
                <button type='button' name="Pastry" onClick={changeFilter}>Pastry</button>
                <button type='button' name="Cookies" onClick={changeFilter}>Cookies</button>
                <button type='button' name="Other" onClick={changeFilter}>Other</button>
                <button type='button' name="All" onClick={changeFilter}>Remove Filters</button>
            </div>
            <div id="project-list">
                {projectList.reduce((total, projectData, key) => {
                if (filter != null && projectData.category !== filter) return total;
                total.push(<ProjectCard key={key} projectData={projectData} />);
                return total;
                }, [])}
            </div>
        </div>
    );
}





export default HomePage;
