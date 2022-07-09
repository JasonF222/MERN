import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';


const Results = () => {
    const [returnData, setReturnData] = useState("");
    const { category, id } = useParams();

    const apiCall = "https://swapi.dev/api/" + category + "/" + id;
    
    useEffect(() => {
        axios.get(apiCall)
        .then(response => {setReturnData(response.data)})
        .catch(setReturnData(""))
    }, [category, id]);
    


    
if(returnData && category == "people") {
    
    return(
        <>
            {
                returnData ?
                <ul style={{textAlign: 'center', listStyle: 'none'}}>
                    <li><h1>{returnData.name}</h1></li>
                    <li>Height: {returnData.height}</li>
                    <li>Mass: {returnData.mass}</li>
                    <li>Hair Color: {returnData.hair_color}</li>
                    <li>Skin Color: {returnData.skin_color}</li>
                </ul>
                :
                ''
            }
        </>
    );
}

if(returnData && category == "planets") {
    return(
        <>
            {
                returnData ?
                <ul style={{textAlign: 'center', listStyle: 'none'}}>
                    <li><h1>{returnData.name}</h1></li>
                    <li>Climate: {returnData.climate}</li>
                    <li>Terrain: {returnData.terrain}</li>
                    <li>Surface Water: {returnData.surface_water}</li>
                    <li>Population: {returnData.population}</li>
                </ul>
                :
                ''
            }
        </>
    );
}

if(returnData && category == "starships") {
    return(
        <>
            {
                returnData ?
                <ul style={{textAlign: 'center', listStyle: 'none'}}>
                    <li><h1>{returnData.name}</h1></li>
                    <li>HyperDrive Rating: {returnData.hyperdrive_rating}</li>
                    <li>Crew Size: {returnData.crew}</li>
                    <li>Cost (in Credits): {returnData.cost_in_credits}</li>
                    <li>Model: {returnData.model}</li>
                </ul>
                :
                ''
            }
        </>
    );
}

if(!returnData) {
    return (
        <>
            <h3 style= {{textAlign: 'center'}}>These are not the Droids you are looking for...</h3>
            <img src="https://wallpaperaccess.com/full/1183723.jpg"></img>
        </>
        );
}
}
export default Results;