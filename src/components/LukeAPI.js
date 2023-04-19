
// ============================================================
//             THIS IS THE OLD CODE I WROTE NOT BEING USED
// ============================================================


import React, { useState, useEffect } from 'react';
import axios from "axios";

const LukeAPI = (props) => {

    // the starwars data being fetched by axios 
    const [starwars, setStarwars] = useState([]);

    // sets the value of data (first route) based on the user's choice 
    const [data, setData] = useState("people");

    // sets the value of id based on the input of the user
    const [id, setId] = useState(1);

    // updates data values on user's drop down selection
    const handlerSelectValue = (event) => {
        setData(event.target.value)
    }

    // updates id as user inputs data 
    const handlerIdValue = (event) => {
        setId(event.target.value)
    }
    
    // fetching data from the API
    useEffect(() => {
        // console.log(`https://swapi.dev/api/${data}/${id}`);
        axios.get(`https://swapi.dev/api/${data}/${id}`)
            .then(res => {
                console.log(res);
                setStarwars(res.data.results);
            })
            .catch(err => {
                console.log(err);
            });
        // Making fetched data a useEffect dependency - page will only render again once the optional dependency is updated
    }, [starwars])

    return (
        <div className="mainDiv">
                <form className="navigationBar">
                    <h3>Search for:</h3>
                    
                    <select value={data} onChange={handlerSelectValue}>
                        <option value="people"> People </option>
                        <option value="planets"> Planets </option>
                    </select>

                    <h3>ID: </h3>
                    <input type="text" value={id} onChange={handlerIdValue} />

                    {/* make a submit button */}
                    <button>Search</button>
                </form>
            <div>
                {/* {data} */}
            </div>
        </div>
    )
}

export default LukeAPI;