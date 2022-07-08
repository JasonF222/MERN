import React, {useState} from 'react';
import './App.css';

import Tabs from './components/Tabs';
import TabContent from './components/TabContent';

function App() {
  const [tabContent, setTabContent] = useState("");
  const tabArr = [1, 2, 3, 4];



  const wrapStyle = {
    display: 'flex',
    justifyContent: 'start',
    gap: '10px',
    marginLeft: '20px'
  }

  return (
    <>
      <div style={wrapStyle}>
        {tabArr.map((num) => <Tabs onTabChange={setTabContent} tabNum = {num} />)}
      </div>
      <div>
        <TabContent tabContent = {tabContent} />
      </div>
    </>
  );
}

export default App;
