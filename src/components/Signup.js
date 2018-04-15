import React from 'react';
import { firebaseAuth } from '../lib/firebase';

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    registerError: '',
    registerSuccess: ''
};

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        firebaseAuth.createUser(this.state.email, this.state.password)
            .then(authUser => {
                this.setState(() => ({ ...INITIAL_STATE }));
                this.setState({
                    registerSuccess: 'Registered Successfully'
                })
            })
            .catch(error => {
                this.setState({
                    registerError: error.message
                });
            });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Sign up</h1>
                <p>{ this.state.registerError }</p>
                <p>{ this.state.registerSuccess }</p>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name: </label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup;
