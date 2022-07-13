import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/view/' + id )
        .then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
        .catch(err => console.log(err));
    }, []);



    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/edit/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
            navigate('/products/view/'+ id);
    }

    return (
        <form onSubmit={ onSubmitHandler }>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={ title }></input>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={ price }></input>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={ description }></input>
            </p>
            <input type="submit"></input>
        </form>
    )
}