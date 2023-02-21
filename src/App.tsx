import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Uuid } from './features/Uuid/Uuid';

function App() {
  return (
    <div className="App">
      <Counter />
      <h1>COUNTER</h1>
      <Uuid />
      <h1>UUID GENERATOR</h1>
    </div>
  );
}

export default App;
