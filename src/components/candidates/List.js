import React, { Component } from 'react';

import firebaseDatabase from '../../lib/firebase';

import Candidate from './Candidate';

class Candidates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candidates: [],
            message: ''
        }
        this.deleteCandidate = this.deleteCandidate.bind(this)
    }

    componentWillMount() {
        var listItems = [];
        firebaseDatabase.ref('candidates').on('value', (snapshot) => {
            listItems = [];
            if (snapshot.exists()) {
                snapshot.forEach(function (childSnapshot) {
                    var value = childSnapshot.val().name;
                    listItems.push({
                        key: childSnapshot.key,
                        value: value
                    });
                })
            } else {
                var message = 'No Candidates Found.';
            }
            this.setState({
                candidates: listItems,
                message: message
            })
        });
    }

    componentWillUnmount() {
        console.log('List UnMount')
    }

    deleteCandidate(elem) {
        firebaseDatabase.ref('candidates/' + elem).remove()
            .then(function() {
                console.log("Remove succeeded.")
            })
            .catch(function(error) {
                console.log("Remove failed: " + error, elem);                
            });
    }

    render() {
        const { candidates, message } = this.state;
        return (
            <div>
                {message}
                <ul>{candidates.map((candidate) => {
                    return <Candidate key={candidate.key} candidate={candidate} />
                    })}
                </ul>
            </div>
        )
    }
}

export default Candidates