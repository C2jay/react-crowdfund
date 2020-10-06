import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';


const NewPledgeForm = () => {
    const {id} = useParams()
    const [pledgeInfo , setPledgeInfo] = useState ({
        amount: 1,
        comment: "",
        anonymous: false,
        project_id: id
    });

    const history = useHistory();

    // methods
    const handleChange = (e) => {
        const {id, value} = e.target;
        setPledgeInfo((prevPledgeInfo) => ({
            ...prevPledgeInfo,
            [id]: value,
        }));
    };

    const postData = async () => {
        let token = window.localStorage.getItem("token");
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}pledges/`, 
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
            body: JSON.stringify(pledgeInfo),
            }
        );
        return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData().then((response) => {
                alert(JSON.stringify(response))
                history.push(`/project/${id}`);
        });
    };

    // template
    return (
        <form>
            <div className='form-container'>
                <label htmlFor="amount">Pledge Amount: </label>
                <input 
                type="number" 
                id="amount"
                min="5" 
                max="500"
                step="5"
                placeholder="Enter pledge amount" 
                onChange={handleChange}
                />
            </div>
            <div className='form-container'>
                <label htmlFor="comment">Comment: </label>
                <textarea 
                type="textarea" 
                id="comment"
                placeholder="Write a comment" 
                onChange={handleChange}
                />
            </div>
            <button id='submit' type="submit" onClick={handleSubmit}>Make Pledge</button>
        </form>
    );
};


export default NewPledgeForm;
