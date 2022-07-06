import './App.css';
import React, { useState } from 'react';
import BoxGenerator from './components/BoxGenerator';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [BoxInfo, setBoxInfo] = useState([]);

  const MakeABox = (Color, Size) => {
    let newBox = [];
    newBox.push(Color);
    newBox.push(Size);
    setBoxInfo([...BoxInfo, newBox])
  }

  const wrapStyle = {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'center'
  }
  return (
    <div className="App" >
        <BoxGenerator onNewBoxCreation = { MakeABox } />
      <div style={wrapStyle}>
        {BoxInfo.map((arr) => <BoxDisplay boxColor = { arr[0] } boxSize = { arr[1] }/>)}
      </div>
    </div>
  );
}

export default App;
