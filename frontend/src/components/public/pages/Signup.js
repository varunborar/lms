import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../../State/actions/authActions';

import '../assets/styles/signup.css';

class Signup extends Component {

    constructor() {
        super();
        this.handleStateChange = this.handleStateChange.bind(this);

        this.state = {
            "firstName": "",
            "lastName": "",
            "email": "",
            "password": "",
            "display-image": {},
            "errors": {
                "firstName": "",
                "lastName": "",
                "email": "",
                "password": ""
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

        const signupRequest = {
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "email": this.state.email,
            "password": this.state.password,
            "display-image": this.state['display-image']
        }
        await this.props.registerUser(signupRequest, this.props.history);
    }

    processImage = (event) => {
        let image = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = () => {
            this.setState({
                'display-image': {
                    'data': reader.result,
                    'contentType': 'image/jpeg'
                }
            })
            this.setImage();
        }
    }

    setImage = () => {
        const frame = document.getElementById('dp');
        frame.src = this.state['display-image']['data'];
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("app/dashboard");
        }
    }

    render() {
        return (
            <div className="signup-page row">
                <form
                    className="signup-form"
                    onSubmit={this.submitHandler}
                >
                    <h2>Sign Up</h2>
                    <div className="input-container image-input">
                        <div class="mb-5">
                            <label for="Image" class="form-label">Upload Display Picture (max: 50Kb)</label>
                            <input
                                type="file"
                                className="form-control"
                                name="display-image"
                                onChange={this.processImage}
                                accept="image/jpeg"
                            />
                        </div>
                        <img id="dp" src="" class="img-fluid" alt=" " />

                    </div>
                    <div className="input-container">
                        <label
                            className="label"
                            for="firstName"
                        >
                            First Name
                        </label>
                        <input
                            className="input-field"
                            type="text"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleStateChange}
                            required
                        />
                        <div className="error">{this.props.errors['firstName']}</div>
                    </div>
                    <div className="input-container">
                        <label
                            className="label"
                            for="lastName"
                        >
                            Last Name
                        </label>
                        <input
                            className="input-field"
                            type="text"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleStateChange}
                            required
                        />
                        <div className="error">{this.props.errors['lastName']}</div>
                    </div>
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
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </div>
                    <Link className="new" to="/login">Already have an account? Login here.</Link>
                </form>
            </div>
        )
    }
}


Signup.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Signup));