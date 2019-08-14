import React, { useState } from 'react';
import './App.css';
import Forms from './components/Forms';
import Entries from './components/Entries';
import People from './data';
import { Flex, SideWidth } from './Style';

function App() {
  const [state, setState] = useState(People);

  const addNewState = e => {
    setState([...state, e]);
  };

  return (
    <div className='container' style={Flex}>
      <div className='left' style={SideWidth}>
        <Forms addNewState={addNewState} />
      </div>
      <div className='right' style={SideWidth}>
        <Entries People={state} />
      </div>
    </div>
  );
}

export default App;
