import React, { useState } from 'react';
import './App.css';

import AddTaskForm from './components/AddTaskForm';
import ShowTaskList from './components/ShowTaskList';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [deletedList, setDeletedList] = useState([]);

  const addToDo = (item) => {
    setToDoList([... toDoList, item]);

  }

  const deleteTask = (item) => {
    setDeletedList([...deletedList, item]);
  }

  return (
    <div className="App">
      <AddTaskForm onNewTask={ addToDo } />
      {toDoList.filter(f => !deletedList.includes(f)).map((task) => <ShowTaskList onDeleteTask={ deleteTask } taskName={task} />)}
    </div>
  );
}

export default App;
