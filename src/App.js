import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Signup from './components/Signup';
import Home from './components/Home';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <div>
            <Link to="/home">Home</Link>
            <Link to="/signup">Signup</Link>
            <Route path="/home" component={Home} />
            <Route path="/signup" component={Signup} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
