import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard';


function App() {
  return (
    <div className="App">
        <PersonCard firstName={"John"} lastName={"Wick"} age={40} hairColor={"Black"} />
        <PersonCard firstName={"Mary-Jane"} lastName={"Watson"} age={25} hairColor={"Red"} />
        <PersonCard firstName={"Jack"} lastName={"Sparrow"} age={35} hairColor={"Brown"} />
        <PersonCard firstName={"Gordon"} lastName={"Ramsay"} age={45} hairColor={"Blonde"} />
    </div>
  );
}

export default App;
