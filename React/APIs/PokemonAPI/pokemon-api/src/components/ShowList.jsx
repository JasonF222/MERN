import React, { useState } from "react";
import { useEffect } from "react";

const ShowList = () => {
    const [pokemon, setPokemon] = useState("");
    const [showPokelist, setShowPokeList] = useState("");

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1160')
        .then(response => response.json())
        .then(response => setPokemon(response.results))
    }, []);

    const getPoke = () => {
        setShowPokeList(true);
    }

    return(
        <>
            <button onClick={ getPoke }>I Choose You!</button>
            {
                showPokelist ?
                <ul>
                    {pokemon.map((onePokemon, i) => <li key={i}>{onePokemon.name}</li> )}
                </ul> 
                :
                ''
            }
        </>
    );
}

export default ShowList;