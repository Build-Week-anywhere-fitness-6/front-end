import React from "react";
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
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
