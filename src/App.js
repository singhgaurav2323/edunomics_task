import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/layout/navbar';
import SignUP from './components/layout/signUP';
import Login from './components/layout/logIN';
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Navbar} />
        <Route  path="/logIN" component={Login} />
        <Route  path="/signUP" component={SignUP} />
        <Route  path="/dashboard" component={Dashboard} />

      </div>
    </BrowserRouter>
  );
}

export default App;
