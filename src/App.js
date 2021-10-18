import './App.css';

import { Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
=======
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <div className='App'
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/register'>
        <Register />
      </Route>
    
      <Login />
      <Register />
    </div>
  );
}

export default App;
