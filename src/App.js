import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import Landing from "./components/Landing";


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <Switch>
          <Route exact path ="/">
            <Landing />
            </Route>
            <Route exact path ="/login">
            <Login />
            </Route>
            <Route exact path ="/register" >
               <Register />
            </Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
