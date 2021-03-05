import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from 'components/Navigation';
import About from 'pages/About';
import Home from 'pages/Home';

const App = () => {
  return (
    <>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </>
  );
};

export default App;
