import React from 'react';

import './app.css';

import { DrawingCanvas } from './DrawingCanvas';

function App() {
  return (
    <div className="pageDiv">
        <h1>Cleerly Coding Challenge</h1>
        <p>Since you got here you&apos;ve already taken a look at the readme but here are a couple notes that I didn&apos;t have time to do in the timebox but would do for production work:</p>
        <ul>
          <li>Better balance between acceptance and unit tests. I played around with cypress for e2e tests with this work and didn&apos;t spend time writing unit tests.</li>
          <li>Render the shape to be drawn on &quot;close&quot; - this is possible by tracking the already drawn shapes and then redrawing them and the to-be-drawn shape each time the to-be-drawn shape changes. We&apos;d probably want to debounce/throttle that.</li>
          <li>Allow the drawing of rectangles at an angle - likely the best way to accomplish this is to switch from a &quot;two click&quot; method of drawing rectangles to a three click method.</li>
          <li>Refactor - I think there&apos;s a fair bit of refactor which could be done here and I&apos;d probably bite off when I see how this code might be extended. For instance, building up a context around the shape store would clean up this main class a bit.</li>
        </ul>
        <DrawingCanvas />
    </div>
  );
}

export { App }
