import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from "axios";

export default (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    
    const navigate = useNavigate();
    const { id } = useParams();

    const goHome = () => {
        navigate('/')
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
        .then(res => {
            setName(res.data.name)
        })
        .catch(err => console.log(err));
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/edit/' + id, {
            name
        })
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for(const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    };


    return(
        <>
            <h1>Favorite Authors</h1>
            <Link to='/'>Home</Link>
            <h3>Edit this Author</h3>
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