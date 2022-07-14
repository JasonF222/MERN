import React, { useState } from "react";
import { Link, useNavigate, Navigate } from 'react-router-dom';
import axios from "axios";

export default () => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const goHome = () => {
        navigate('/')
    }
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/create', {
            name
        })
        .then(res => {
            console.log(res)
            navigate('/');
        })
        .catch(err => {
            console.log(err);
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for(const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
                console.log(errorArr);
            }
            setErrors(errorArr);
        })
        setName("");
    }

    return (
        <>
            <h1>Favorite Authors</h1>
            <Link to='/'>Home</Link>
            <h3>Add an Author</h3>
            <form onSubmit={ onSubmitHandler }>
                { errors.map((err, index) => <p key={index}> {err} </p>) }
                <p>
                    <label>Name: </label><br/>
                    <input type="text" onChange={ e => setName(e.target.value) } value={name}></input>
                </p>
                <input type="submit"></input> <button onClick={() => {goHome()}}>Cancel</button>
            </form>
        </>
    );
}