import React, { useState } from "react";

const AddTaskForm = (props) => {
    const [task, setTask] = useState("");

    const handleInput = (e) => {
        setTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewTask(task);
        setTask("");

    }

    return (
        <div>
            <h1>Task Form Here</h1>
            <form onSubmit={ handleSubmit }>
                <label>Add A To-Do: </label>
                <input type="text" onChange={ handleInput } value={task}></input>
                <button type="submit">Add</button>

            </form>
        </div>

    );
}

export default AddTaskForm;