import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const { removeFromDom } = props;

    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/products/delete/' + id)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err => console.log(err));
    }

    return (
        <ul>
            {props.prodList.map((product, i) => <li key={i}> <Link to={"/products/view/" + product._id}>{product.title}</Link>
            <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
            </li>)}
        </ul>
    )

}

export default ProductList;