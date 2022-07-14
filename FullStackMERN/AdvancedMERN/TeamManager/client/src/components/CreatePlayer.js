import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default () => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [nameError, setNameError] = useState(true);

    const navigate = useNavigate();

    const handleName = (e) => {
        setName(e.target.value);
        if(e.target.value.length < 2) {
            setNameError("Must be at least 2 characters.");
        }
        if(e.target.value.length >= 2) {
            setNameError("");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/players/create',  { name, position })
        .then(res => {
            console.log(res)
            navigate('/players/list')
        })
        .catch(err => console.log(err));
    };

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <label>Name: </label><br/>
                {
                    nameError ?
                    <p>{nameError}</p>
                    :
                    ''
                }
                <input type="text" onChange={ handleName } ></input><br/>
                <label>Preferred Position: </label><br/>
                <input type="text" onChange={ (e) => {setPosition(e.target.value)} }></input><br/>
                {
                    !nameError ?
                    <button type="submit">Add Player</button>
                    :
                    ''
                }
            </form>
        </>
    )
};