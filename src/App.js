import React from 'react';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Landing from './components/Landing';

import Client from './components/client/Home';
import ClientClasses from './components/client/Classes';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <PrivateRoute exact path='/client'>
            <Client />
          </PrivateRoute>
          <Route exact path='/teacher'>
            <Teacher />
          </Route>
          <Route exact path='/client/classes'>
            <ClientClasses />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
