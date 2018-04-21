import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import CandidateAdd from './Add';
import CandidateUpdate from './Update';
import CandidatesList from './List';
import Delete from './Delete'

class Candidates extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>Candidates</h1>
                    <Link to="/candidates/add">Add</Link>
                    <Route path="/candidates/add" component={CandidateAdd} />
                    <Route exact path="/candidates" component={CandidatesList} />
                    <Route path="/candidates/update/:id" component={CandidateUpdate} />
                    <Route path="/candidates/delete/:id" component={Delete} />
                </div>
            </Router>
        )
    }
}

export default Candidates