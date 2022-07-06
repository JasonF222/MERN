import React, { useState } from 'react';

const BoxGenerator = (props) => {
    const [BoxColor, setBoxColor] = useState("");
    const [BoxSize, setBoxSize] = useState("");

    const SubmitHandle = (e) => {
        e.preventDefault();
        props.onNewBoxCreation( BoxColor, BoxSize);
        const formTextBox = document.getElementById('textBox');
        formTextBox.value = '';
        const formSizeBox = document.getElementById('sizeBox');
        formSizeBox.value = '';
    };
    
    const SetColor = (e) => {
        setBoxColor(e.target.value);
    }

    const SetSize = (e) => {
        setBoxSize(e.target.value);
    }

    return (
        <div>
            <h1>Box Generator</h1>
            <form onSubmit={ SubmitHandle }>
                <div>
                    <label>Color: </label>
                    <input id="textBox" type="text" onChange={ SetColor }></input>
                </div>
                <div>
                    <label>Box Size: </label>
                    <input id="sizeBox" type="text" onChange={ SetSize }></input>
                </div>
                    <input type="submit" value="Add"></input>
            </form>
        </div>
    )
}

export default BoxGenerator;