import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard lastName = {"Wick, "} firstName = {"John"}/>
      <PersonCard age = {"40"}/>
      <PersonCard hairColor = {"Hair Color : Black"}/>

      <PersonCard lastName = {"Doe, "} firstName = {"MaryJane"}/>
      <PersonCard age = {"25"}/>
      <PersonCard hairColor = {"Hair Color : Red"}/>

      <PersonCard lastName = {"Monster, "} firstName = {"Cookie"}/>
      <PersonCard age = {"745"}/>
      <PersonCard hairColor = {"Hair Color : Blue"}/>

      <PersonCard lastName = {"Sparrow, "} firstName = {"Jack"}/>
      <PersonCard age = {"30"}/>
      <PersonCard hairColor = {"Hair Color : Brown"}/>
    </div>
  );
}

export default App;
