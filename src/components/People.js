import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"; 


export default function People (props) {
    const [data, setData] = useState({}); 
    const [errorMsg, setErrorMsg] = useState("");
    const { id } = useParams();

    // fetching data with the axios function 
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                // setting up the retrieved data and storing them into data
                setData(response.data)
                // setting up console log to visually see the code in the inspect tool
                // data.hair_color? data.hair_color = true : data.hair_color = false;
                console.log(data);
                // setting error message to blank as promise gets fulfilled
                setErrorMsg("");
            })
            .catch(err => {
                // 
                setErrorMsg(err?.response?.data?.message || err.message)
                console.log(err);
            })
    // this dependency is making sure that the page renders again ONLY after id is updated/modified
    }, [id])

    return(
        errorMsg ? 
        <div>
            <h2>Please try again!</h2>
        </div> 
        : 
        <>
            <h1>{data.name}</h1>
            <h4>Height:{data.height} cm</h4>
            <h4>Mass: {data.mass} kg</h4>
            <h4>Hair Color: {data.hair_color}</h4>
            <h4>Skin Color:{data.skin_color}</h4>
        </>

    )


}