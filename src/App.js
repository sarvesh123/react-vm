import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Signup from './components/Signup';
import Home from './components/Home';
import Candidates from './components/candidates';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Link to="/home">Home</Link>
            <Link to="/signup">Signup</Link>
            <a href="/candidates">Candidates</a>
            <Route path="/home" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/candidates" component={Candidates} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
