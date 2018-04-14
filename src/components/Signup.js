import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
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
        console.log(this.state.user);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Sign up</h1>
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
