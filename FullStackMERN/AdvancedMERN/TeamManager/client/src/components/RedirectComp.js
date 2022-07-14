import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/players/list')
    }, []);
    
    return;
};