import React from 'react';
import './App.css';
import Wrapper from './wrapper';
import Error from './error/error'
import { BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/app' exact component={Wrapper} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
