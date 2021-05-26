import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';
import GlobalStyle from 'GlobalStyle';

const Root = () => (
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);

export default Root;
