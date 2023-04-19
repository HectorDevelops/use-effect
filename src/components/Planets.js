import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"; 


export default function Planet (props) {
    const [data, setData] = useState({}); 
    const [errorMsg, setErrorMsg] = useState("");
    const { id } = useParams();

    // fetching data with the axios function 
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                // setting up the retrieved data and storing them into data
                setData(response.data)
                // setting up console log to visually see the code in the inspect tool
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
        // ternary operator to display either error if invalid ID is inputted
        errorMsg ? 
        <div>
            <h2>Please try again!</h2>
        </div> 
        : 
        // if no invalid IDs are entered, then we output the results of each data
        <>
            <h1>{data.name}</h1>
            <h4>Climate: {data.climate}</h4>
            <h4>Terrain: {data.terrain}</h4>
            {/* change this to true */}
            <h4>Surface Water: {data.surface_water}</h4>
            <h4>Population: {data.population}</h4>
        </>

    )


}