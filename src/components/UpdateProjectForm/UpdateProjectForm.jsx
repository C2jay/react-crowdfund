// import React, { useState } from 'react';
// import { useHistory, useParams } from 'react-router-dom';

// function UpdateProjectForm() {
//     // variables
//     const { id } = useParams()
//     const token = window.localStorage.getItem("token");
//     const username = window.localStorage.getItem("username");
//     // const request = fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
//     // alert(JSON.stringify(request))
    
//     const [projectInfo, setProjectInfo] = useState ({
//         id: id,
//         title: request.body.title,
//         category: request.body.category,
//         description: request.body.description,
//         goal: request.body.goal,
//         project_image: request.body.project_image,
//         is_open: request.body.is_open,
//         pledges: request.body.pledges
//     });
//     const history = useHistory();

//     const handleChange = (e) => {
//         const {id, value} = e.target;
//         setProjectInfo((prevProjectInfo) => ({
//             ...prevProjectInfo,
//             [id]: value,
//         }));
//     };

//     const updateProject = (async () => {
    
//         if((projectInfo.owner === username) && (projectInfo.pledges.length === 0)){
//             const response = fetch(`${process.env.REACT_APP_API_URL}projects/${id}`, {
//                 method: 'PUT',
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Token ${token}`,
//                 },
//             body: JSON.stringify(projectInfo),
//         })
//         return response.json();
//         } else {
//             alert('no!')
//         };
//     });
    
//     const handleUpdate = (e) => {
//         e.preventDefault();
//         updateProject().then(() => {
//                 history.push("/");
//         });
//     };

//     // template
//     return (
//         <form>
//             <div className='form-container'>
//                 <label htmlFor="title">Project Title: </label>
//                 <input 
//                 type="text" 
//                 id="title" 
//                 placeholder="Project Title"
//                 onChange={handleChange} 
//                 />
//             </div>
//             <div className='form-container'>
//                 <label htmlFor="category">Select Category: </label>
//                 <select 
//                 type="select"
//                 id="category"
//                 placeholder="select category"
//                 onChange={handleChange} 
//                 >
//                     <option value="Cupcakes">Cupcakes 🧁</option>
//                     <option value="Cake">Cake 🍰</option>
//                     <option value="Pastry">Pastry 🥐</option>
//                     <option value="Pies">Pies 🥧</option>
//                     <option value="Cookies">Cookies 🍪</option>
//                     <option value="Other">Other 🍭</option>

//                 </select>
//             </div>
//             <div className='form-container' id='description'>
//                 <label htmlFor="descripton">Description: </label>
//                 <textarea 
//                 type="text" 
//                 id="description" 
//                 placeholder="Write a description about your project here." 
//                 onChange={handleChange} 
//                 />
//             </div>
//             <div className='form-container'>
//                 <label htmlFor="goal">Goal: </label>
//                 <input 
//                 type="number" 
//                 id="goal" 
//                 placeholder="Enter goal cost" 
//                 onChange={handleChange} 
//                 />
//             </div>
//             <div className='form-container'>
//                 <label htmlFor="project_image">Project Image: </label>
//                 <input 
//                 type="url" 
//                 id="project_image" 
//                 placeholder="paste image url here" 
//                 onChange={handleChange} 
//                 />
//             </div>
        
            
//             <button id="submit" type="submit" onClick={handleUpdate}>Update</button>
//         </form>
//     );
// }


// export default UpdateProjectForm;
