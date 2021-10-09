import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/login.css'

class Login extends Component{

    constructor() {
        super();
        this.handleStateChange = this.handleStateChange.bind(this);
        this.state = {
            "email": "",
            "password": "",
            "errors":{
                "email":"",
                "password":""
            }
        }
    }

    handleStateChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = async (event) => {
        event.preventDefault();

        const loginRequest = {
            "email": this.state.email,
            "password": this.state.password
        }
    }

    render(){
        return( 
            <div className="login-page row">
                <form 
                    className="login-form" 
                    onSubmit={this.submitHandler}
                >
                    <h2>Log In</h2>
                    <div className="input-container">
                        <label
                            className="label"
                            for="email"
                            >
                            Email
                        </label>
                        <input
                            className="input-field"
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleStateChange}
                            required
                        />
                        <div className="error">{this.state.errors['email']}</div>
                    </div>
                    <div className="input-container">
                        <label
                            className="label"
                            for="password"
                            >
                            Password
                        </label>
                        <input
                            className="input-field"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleStateChange}
                            required
                        />
                        <div className="error">{this.state.errors['password']}</div>
                    </div>         
                    <div className="input-container"> 
                        <button type="submit" className="btn btn-primary">Log In</button>
                    </div>
                    <Link className="new" to="/signup">Here for the first time? Create a new account</Link>  
                </form>     
            </div>
        )
    } 
}
export default Login;