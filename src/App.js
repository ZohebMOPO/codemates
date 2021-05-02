import React from 'react';
import './App.css';
import Home from './components/home'
import Login from "./routes/Login/Login";
import Wrapper from './wrapper';
import Error from './routes/error/error'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Friends from './routes/friends/Friends';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/app' exact component={Wrapper} />
        <Route path='/friends' exact component={Friends} />
        <Route path="/login" exact>
          <Login login={true} method="login"/>
        </Route>
        <Route path="/register" exact>
          <Login login={false} method="register"/>
        </Route>
        <Route component={Error} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
