import React, { useState } from 'react';
import './App.css';
import Forms from './components/Forms';
import Entries from './components/Entries';
import People from './data';

function App() {
  const [state, setState] = useState(People);

  const addNewState = e => {
    setState([...state, e]);
  };

  return (
    <div className='form-container'>
      <Forms addNewState={addNewState} />
      <Entries People={state} />
    </div>
  );
}

export default App;
