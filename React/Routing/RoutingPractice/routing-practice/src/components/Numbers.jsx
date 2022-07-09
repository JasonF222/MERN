import React from "react";
import { useParams } from "react-router-dom";

const Numbers = () => {
    const { input } = useParams();
    return(
        isNaN(+ input) ?
        <h1 style={{ color: "black", textAlign: 'center' }}>The word is: { input }</h1>
        :
        <h1 style={{ color: "black", textAlign: 'center' }}>The Number is: { input }</h1>
    );
}

export default Numbers;