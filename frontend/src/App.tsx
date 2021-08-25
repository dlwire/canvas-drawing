import React, { useEffect, useState } from 'react';
import { Container, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './app.css'

import { fetchContent } from './api';

function App() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchContent()
      .then(setContent);
  }, []);

  return (
    <div className="pageDiv">
      <Container>
        <Header>{content}</Header>
      </Container>
    </div>
  )
}

export default App;
