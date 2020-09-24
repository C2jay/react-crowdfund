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



    return (
        <div>
            <div className='header-bar'>
               
                <div className='carousel'>
                    <AliceCarousel autoPlay autoPlayInterval="3000">
                        <img src={image1} className="sliderimg"/>
                        <img src={image2} className="sliderimg"/>
                        <img src={image3} className="sliderimg"/>
                        <img src={image4} className="sliderimg"/>
                        <img src={image5} className="sliderimg"/>
                    </AliceCarousel>
                </div>

                <div className='slogan'>
                    <h3>Life is sweet with Sugar Momma!</h3>
                    <img src={Logo} />
                    <p>Post photos of your completed projects to <span id="emphasis">instagram</span> with the tag <span id="emphasis"> &#35;thnxsugarmomma </span> for a chance to get your image featured here!</p>
                </div>

            </div>
                
                <div id="project-list">
                    {projectList.map((projectData, key) => {
                        return <ProjectCard key={key} projectData={projectData} />;
                    })}
                </div>
        </div>
    );
}





export default HomePage;

// import React, { useState, useEffect } from 'react';
// import ProjectCard from '../components/ProjectCard/ProjectCard';
// import "./HomePage.css";
// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";
// import image1 from '../components/images/image1.jpg';
// import image2 from '../components/images/image2.jpg';
// import image3 from '../components/images/image3.jpg';
// import image4 from '../components/images/image4.jpg';
// import image5 from '../components/images/image5.jpg';
// import slogan from '../components/images/slogan.png';



// function HomePage() {
//     const [projectList, setProjectList] = useState([]);

//     useEffect(() => {
//         fetch(`${process.env.REACT_APP_API_URL}projects/`)
//         .then((results) => {
//             return results.json();
//         })
//         .then((data) => {
//             setProjectList(data);
//         });
//         // setProjectList(allProjects);
//     }, []);


//     return (
//         <div>
//         <div className='header-bar'>
//             <div className='slogan'>
//                 <h3>Life is Sweet with Sugar Momma</h3>
//             </div>

//             <div className='carousel-container'>
//                 <div className='carousel'>
//                     <AliceCarousel autoPlay autoPlayInterval="3000">
//                         <img src={image1} className="sliderimg"/>
//                         <img src={image2} className="sliderimg"/>
//                         <img src={image3} className="sliderimg"/>
//                         <img src={image4} className="sliderimg"/>
//                         <img src={image5} className="sliderimg"/>
//                     </AliceCarousel>
//                 </div>
//             </div>
//         </div>
//             <div id="project-list">
//                 {projectList.map((projectData, key) => {
//                     return <ProjectCard key={key} projectData={projectData} />;
//                 })}
//             </div>
//         </div>
//     );
// }





// export default HomePage;

