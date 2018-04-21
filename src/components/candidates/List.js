import React, { Component } from 'react';

import firebaseDatabase from '../../lib/firebase';

import Candidate from './Candidate';

class Candidates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candidates: [],
            message: '',
            deleted: false
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
        if (localStorage.getItem('deleted')) {
            this.setState({
                deleted: 'The candidate was deleted'
            })
            localStorage.removeItem('deleted')
        }
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
        const { candidates, message, deleted } = this.state;
        return (
            <div>
                <p>{deleted}</p>
                <p>{message}</p>
                <ul>{candidates.map((candidate) => {
                    return <Candidate key={candidate.key} candidate={candidate} />
                    })}
                </ul>
            </div>
        )
    }
}

export default Candidates