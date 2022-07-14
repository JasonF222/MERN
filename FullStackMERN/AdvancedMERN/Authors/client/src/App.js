import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import EditAuthor from './components/EditAuthor';
import CreateAuthor from './components/CreateAuthor';
import Main from './views/Main';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element = { <Main /> } />
        <Route path='/authors/edit/:id' element = { <EditAuthor /> } />
        <Route path='/authors/create' element = { <CreateAuthor /> } />
      </Routes>
    </div>
  );
}

export default App;
