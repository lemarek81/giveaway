import React from 'react';
import './App.scss';
import './scss/main.scss';
import Home from './components/home/_home';
import Login from './components/home/loginAndRegistration/_login';
import Registration from './components/home/loginAndRegistration/_register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div
      className='AppContainer'
    >
      <Router>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/register' exact component={Registration}></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
