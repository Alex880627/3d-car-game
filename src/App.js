import './App.css';
import React from 'react';
import { AppCanvas } from './components/canvas/canvas.jsx'
import { Ground } from './components/ground/ground.jsx'

function App() {
  return (
    <div className="App">
      <AppCanvas>
        <Ground></Ground>
      </AppCanvas>
    </div>
  );
}

export default App;
