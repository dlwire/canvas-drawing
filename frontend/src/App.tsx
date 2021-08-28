import React from 'react';

import './app.css';

import { DrawingCanvas } from './DrawingCanvas';

function App() {
  return (
    <div className="pageDiv">
        <h1>Cleerly Coding Challenge</h1>
        <DrawingCanvas />
    </div>
  );
}

export { App }
