import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

export default (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const { removeFromDom } = props;

    const navigate = useNavigate();

    const backToHome = () => {
        navigate("/products/view");
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/view/' + id )
        .then(res => setProduct(res.data))
        .catch(err => console.log(err));
    }, []);

    const handleDelete = () => {
        axios.delete('http://localhost:8000/api/products/delete/' + id)
        .then(res => {
            backToHome()
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <p>Title: {product.title}</p><br/>
            <p>Price: {product.price}</p><br/>
            <p>Description: {product.description}</p><br/>
            <Link to={"/products/edit/" + product._id}>Edit: {product.title}</Link>
            <button  onClick={ handleDelete }>Delete</button>
        </div>
    );
}