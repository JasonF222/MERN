import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './PlayerList.css';

export default () => {
    const [playerList, setPlayerList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players/all')
        .then(res => {setPlayerList(res.data)})
        .catch(err => console.log(err));
    }, []);

    const removeFromDom = (id) => {
        setPlayerList(playerList.filter(player => player._id != id))
    }

    const handleDelete = (player) => {
        alert('You deleted' + " " + player.name + " " + 'from the roster.');
        axios.delete('http://localhost:8000/api/players/delete/' + player._id)
        .then(res => {
            console.log(res)
            removeFromDom(player._id);
        })
        .catch(err => console.log(err));
    }

    


    return (
        <>
            <h1> List | <Link to='/players/create'>Add Player</Link> </h1>
            <table className="PlayerList">
                <thead>
                    <tr className="tableRow">
                        <th className="tableRow">Player Name</th>
                        <th className="tableRow">Preferred Position</th>
                        <th className="tableRow">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {playerList.map((player, idx) => 
                    <tr key = {idx}>
                        <td>{player.name}</td>
                        {
                            player.position ?
                            <td>{player.position}</td>
                            :
                            <td>No Preferred Position</td>
                        }
                        <td>
                            <button onClick = { () => { handleDelete(player) } } className="buttonDelete">Delete</button>
                        </td>
                    </tr>
                    )}
                </tbody>
                
            </table>
        </>
    )
};