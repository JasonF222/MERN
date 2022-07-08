import React, {useState, useEffect} from "react";
import axios from 'axios';

const ShowList = () => {
    const[pokemon, setPokemon] = useState("");
    const [showPokeList, setShowPokeList] = useState("");

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1160')
        .then(response =>{setPokemon(response.data.results)})
    }, []);

    const getPoke = () => {
        setShowPokeList(true);
    }

    return (
        <>
            <button onClick={ getPoke }>I Choose You!</button>
            {
                showPokeList ?
                <ul>
                    {pokemon.map((onePokemon, i) => <li key={i}>{onePokemon.name}</li>)}
                </ul>
                :
                ''
            }
        </>
    );
}

export default ShowList;