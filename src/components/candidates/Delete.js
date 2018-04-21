import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import firebaseDatabase from '../../lib/firebase';

class Delete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: '',
            redirect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount() {
        const candidateKey = this.props.match.params.id;
        firebaseDatabase.ref('candidates/' + candidateKey).on('value', (snapshot) => {
            if (snapshot.exists()) {
                this.setState({
                    name: snapshot.val().name,
                })
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        var that = this
        firebaseDatabase.ref('/candidates/' + this.props.match.params.id).remove().then(function () {
            that.setState({
                message: 'Delete Successful',
                redirect: true
            })
            localStorage.setItem('deleted', true)
        }).catch(function (error) {
            that.setState({
                message: 'Delete Not Successfull: ' + error.message,
                redirect: false
            })
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/candidates' />
        } else {
            var deleteButton = false
            if (this.state.name) {
                deleteButton = <input type="submit" value="DELETE" />
            }
            return (
                <div>
                    <h1>Delete Candidate</h1>
                    <p>{this.state.message}</p>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>Name:</label>
                            <span>{this.state.name}</span>
                        </div>
                        { deleteButton }
                    </form>
                </div>
            )
        }
    }
}
export default Delete