import React, { useState } from "react";

const BoxDisplay = (props) => {
    const boxStyling = {
        
        width: props.boxSize + 'px',
        height: props.boxSize + 'px',
        border: '2px solid black',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: props.boxColor
    };

    
    if(props.boxColor) {
        return (
            <pre>
                <div style={boxStyling}></div>
            </pre>
        )
    }
    return;
}

export default BoxDisplay;