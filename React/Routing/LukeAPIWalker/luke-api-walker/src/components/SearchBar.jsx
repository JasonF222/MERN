import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [category, setCategory] = useState("");
    const [idNum, setIdNum] = useState("");
    const navigate = useNavigate();

    const handleSelector = (e) => {
        e.preventDefault();
        setCategory(e.target.value);
    }

    const handleID = (e) => {
        setIdNum(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(category + "/" + idNum);
    }
    
    return(
        <>
            <form onSubmit={ handleSubmit } style={{ textAlign: 'center', marginTop: '10px' }}>
            <label>Search For: </label>
            <select defaultValue="none" onChange={ handleSelector }>
                <option value="none">Select Category</option>
                <option value= "people">People</option>
                <option value= "planets">Planets</option>
                <option value= "starships">Starships</option>
            </select>
            <label>ID: </label>
            <input onChange={ handleID }/>
            <button type="submit">Search the Galaxy</button>
            </form>
        </>
    );
}

export default SearchBar;