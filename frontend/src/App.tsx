import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import './app.css';

import { DrawingCanvas } from './DrawingCanvas';

function App() {
  return (
    <div className="pageDiv">
      <Container>
        <Header>Cleerly Coding Challenge</Header>
        <DrawingCanvas />
      </Container>
    </div>
  );
}

export { App }
