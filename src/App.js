import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header';
import Wrapper from './wrapper'
import Home from './components/home.js';
import Error from './error/error'


function App() {
  return (
    <>
     <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/app' exact component={Wrapper} />
        <Route component={Error} />
      </Switch>
     </Router>
    </>
  );
}

export default App;
