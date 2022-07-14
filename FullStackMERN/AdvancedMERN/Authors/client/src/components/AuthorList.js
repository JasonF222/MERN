import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import e from "cors";


export default () => {
    const [authorList, setAuthorList] = useState([]);
    const [loaded, setLoaded] = useState("");
    
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(res => {
            setAuthorList(res.data);
            setLoaded(true);
        })
        .catch(err => console.log(err));
    }, []);

    const removeFromDom = (id) => {
        setAuthorList(authorList.filter(author => author._id != id));
    }

    const handleEdit = (id) => {
        navigate('/authors/edit/' + id);
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:8000/api/authors/delete/' + id)
        .then(removeFromDom(id))
        .catch(err => console.log(err));
    }

    return (
        <>
            {
                loaded ?
                <table>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions</th>
                        </tr>
                        {authorList.map((author, index) => 
                        <tr key={index}>
                            <td>{author.name}</td>
                            <td><button onClick={ () => {handleEdit(author._id) } }>Edit</button> <button onClick={ () => {handleDelete(author._id) } }>Delete</button></td>
                        </tr>
                        ) }
                    </thead>
                </table>
                :
                <h2>Please wait while we gather your data.</h2>
            }
        </>
    );
}