import React from "react";
import { useParams } from "react-router-dom";

const Words = () => {
    const { word, color1, color2 } = useParams();

    return(
        <h1 style={{ color: color1, backgroundColor: color2, textAlign: 'center' }}>The word is: { word }</h1>
    );
}

export default Words;