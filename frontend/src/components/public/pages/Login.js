import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../../State/actions/authActions';

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
        await this.props.loginUser(loginRequest, this.props.history);   
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("app/dashboard");
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
                        <div className="error">{this.props.errors['email']}</div>
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
                        <div className="error">{this.props.errors['password']}</div>
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

Login.propType = {
    loginUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    'errors': state.errors,
    'auth': state.auth
});


export default connect(
    mapStateToProps,
    { loginUser }
)(withRouter(Login));