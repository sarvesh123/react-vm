import React, { Component } from 'react';

import firebaseDatabase from '../../lib/firebase';

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            inputDisabled: true,
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount() {
        const candidateKey = this.props.match.params.id;
        firebaseDatabase.ref('candidates/' + candidateKey).on('value', (snapshot) => {
            this.setState({
                name: snapshot.val().name,
                inputDisabled: false
            })
        })
    }

    componentWillUnmount() {
        console.log('Update UnMount')
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        firebaseDatabase.ref('/candidates/' + this.props.match.params.id).update(this.state, (callback) => {
            this.setState({
                name: '',
                message: 'Update Successfull'
            })
        })
        event.preventDefault();
    }

    render() {
        const disableElem = this.state.inputDisabled ? (
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} disabled/>
        ) : (
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        );
        return (
            <div>
                <h1>Update Candidate</h1>
                <p>{this.state.message}</p>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name:</label>
                        {disableElem}
                    </div>
                    <input type="submit" value="UPDATE" />
                </form>
            </div>
        )
    }
}
export default Update