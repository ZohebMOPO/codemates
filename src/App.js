import React from 'react';
import './App.css';
import Login from "./components/Login/Login";
import Wrapper from './wrapper';
import Error from './error/error'


function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Switch>
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
