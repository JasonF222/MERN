import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList';
import axios from 'axios';

export default () => {
    const [productList, setProductList] = useState([]);
    const [loaded, setLoaded] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/view')
        .then(res => {
            setProductList(res.data);
            setLoaded(true);
        })
        .catch(err => console.log(err));
    }, []);

    const removeFromDom = id => {
        setProductList(productList.filter(product => product._id != id));
    }

    return (
        <div>
            {
                loaded ?
                <ProductList prodList={ productList } removeFromDom={ removeFromDom }/>
                :
                <h2>Please wait while we gather the data.</h2>
            }
        </div>
    )
}