import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './views/Main';
import PlayerList from './components/PlayerList';
import CreatePlayer from './components/CreatePlayer';
import RedirectComp from './components/RedirectComp';

function App() {
  return (
    <div className="">
      <Main />
      <Routes>
        <Route path ="/" element = { <RedirectComp /> } />
        <Route path ="/players/list" element= { <PlayerList /> } />
        <Route path ="/players/create" element = { <CreatePlayer /> } />
      </Routes>
    </div>
  );
}

export default App;
