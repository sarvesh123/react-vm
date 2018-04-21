import React, { Component } from 'react';

import firebaseDatabase from '../../lib/firebase';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        firebaseDatabase.ref('/candidates').push(this.state, (callback) => {
            this.setState({
                name: ''
            })
        })
        event.preventDefault();
    }

    handleFocus(event) {
        console.log(event)
    }

    render() {
        return (
            <div>
                <h1>Add Candidate</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={this.state.name} onBlur={this.handleChange} onChange={this.handleChange} required />
                    </div>
                    <input type="submit" value="ADD" />
                </form>
            </div>
        )
    }
}
export default Add