import React from "react";
import { Link } from 'react-router-dom';
import './Main.css';

export default () => {

    return (
        <>
            <h1 className="Main"> <Link to = "/players/list">Manage Players</Link> | <Link to="/players/list">Manage Player Status</Link></h1>
        </>
    );
}