import React from "react";
import AuthorList from "../components/AuthorList";
import { Link } from 'react-router-dom';

export default () => {

    return (
        <>
            <h1>Favorite Authors</h1>
            <Link to='/authors/create' >Add an Author</Link>
            <p>We have quotes by: </p>
            <AuthorList />
        </>
    );
}