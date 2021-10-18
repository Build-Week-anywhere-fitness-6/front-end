import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
=======
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <div className='App'>

      <Router>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <Login />
        </Route>
      </Router>
=======
      <Login />
      <Register />

    </div>
  );
}

export default App;
