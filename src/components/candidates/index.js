import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import CandidateAdd from './Add';
import CandidateUpdate from './Update';
import CandidatesList from './List';

class Candidates extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>Candidates</h1>
                    <a href="/candidates/add">Add</a>
                    <Route exact path="/candidates" component={CandidatesList} />
                    <Route path="/candidates/add" component={CandidateAdd} />
                    <Route path="/candidates/update/:id" component={CandidateUpdate} />
                </div>
            </Router>
        )
    }
}

export default Candidates