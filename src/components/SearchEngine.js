import React, { useState } from 'react';
// importing useNavigate to be able to re-direct to a given route
import { useNavigate } from 'react-router-dom';

// reducing the code line to avoid exporting at the end of the page
export default function SearchEngine(props) {

    const navigate = useNavigate();
    // destructuring the values of the IDs we will be getting from user
    const [id, setId] = useState("");
    // destructuring the data and setting it with an initial value of 'people'
    const [data, setData] = useState("people");
    
    // creating this event handler for the form submission
    function formHandler (event){
        // prevents the page from reloading/refreshing
        event.preventDefault();
        // utilizing the navigate function to be able to route properly and acquire desired data to user
        navigate("/"+data+"/"+id)
        // logging to see the output 
        console.log("/"+data+"/"+id);
    }

    return (
        <>
            <form className="navigationBar" onSubmit={formHandler}>
                <h3>Search for:</h3>
                {/* passing the onChange event handler to ensure we assign the data value what the user inputs */}
                <select onChange={(event) => setData(event.target.value)}>
                    <option value="people"> People </option>
                    <option value="planets"> Planets </option>
                </select>

                <h3>ID: </h3>
                {/* passing the onChange event handler to ensure we assign the id value what the user inputs */}
                <input onChange={(event) => setId(event.target.value)} type="number"/>

                <button>Search</button>
            </form>
        </>

    )
}