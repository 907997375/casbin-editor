import React from 'react';
import { Router } from '@reach/router';
import ReactDOM from 'react-dom';
import { EditorScreen } from './editor';
import { Footer } from './ui';
import 'normalize.css/normalize.css';

const App = () => (
  <>
    <Router>
      <EditorScreen path="/" />
    </Router>

    <Footer>
      <a
        style={{ color: '#FFFFFF', fontSize: 14, textDecoration: 'none' }}
        title="casbin-editor on GitHub"
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/nodece/casbin-editor"
      >
        Github
      </a>
      <span style={{ color: '#FFFFFF', float: 'right', fontSize: 14 }}>Copyright © {new Date().getFullYear()} Casbin contributors.</span>
    </Footer>
  </>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
