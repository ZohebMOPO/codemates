import React from 'react';
import './App.css';
import Login from "./Login/Login";
import Wrapper from './wrapper';
import Error from './error/error'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./components/home.js"


function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/app' exact component={Wrapper} />
        <Route component={Error} />
        <Route path="/login" exact>
          <Login login={true} method="login"/>
        </Route>
        <Route path="/register" exact>
          <Login login={false} method="register"/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
