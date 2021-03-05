import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from 'shared/App';
import themes from 'style/themes';
import GlobalStyle from 'style/globalStyle';

const Root = () => (
  <ThemeProvider theme={themes}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

export default Root;
