import './App.css';
import React from 'react';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import Numbers from './components/Numbers';
import Words from './components/Words';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/:input' element={<Numbers />} />
        <Route path='/:word/:color1/:color2' element={<Words />} />
      </Routes>
    </div>
  );
}

export default App;
