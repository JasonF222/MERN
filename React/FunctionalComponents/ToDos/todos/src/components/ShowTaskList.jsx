import React, { useState } from "react";

const ShowTaskList = (props) => {
    const [completed, setCompleted] = useState("");
    const taskName = props.taskName;


    const handleCompletion = () => {
        if(!completed) {
            document.getElementById("taskItem").style.textDecoration = "line-through";
            setCompleted(true);
        } else {
            document.getElementById("taskItem").style.textDecoration = "";
            setCompleted(false);
        }
    }
    
    const handleDeletion = () => {
        props.onDeleteTask(taskName);
        setCompleted(false);

    }

    return (
    <div>
        <h1 id="taskItem">{props.taskName}</h1>
        <input type="checkbox" onChange={ handleCompletion } />
        {
            completed ?
            <button onClick={ handleDeletion }>Delete</button> : ''
        }
    </div>
    );
}

export default ShowTaskList;