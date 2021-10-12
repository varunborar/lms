import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateDetails } from '../../../State/actions/userActions';

import '../assets/styles/profile.css';
import Sidebar from '../common/Sidebar';

class Profile extends Component {

    constructor(props){
        super();
        this.handleStateChange = this.handleStateChange.bind(this);
        this.state = {
            "firstName": props.user['first-name'],
            "lastName": props.user['last-name'],
            "email": props.user['email'],
            "password": ""
        }
        document.title = "Learn AI | Profile";
    }

    handleStateChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = async(event) => {
        event.preventDefault();
        const updateRequest = {
            "_id": this.props.user['user_id'],
            "first-name": this.state['firstName'],
            "last-name": this.state['lastName'],
            "password": this.state.password
        }

        await this.props.updateDetails(updateRequest);
    }

    render() {
        return (
            <div className="profile-page">
                <Sidebar />
                <form 
                    className="edit-form"
                    onSubmit={this.submitHandler}
                >
                    <div className="input-container image-input">
                            <img id="dp" src={this.props.auth.user.display_image.data} class="img-fluid" alt=" " />
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
                                value={this.state['firstName']}
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
                                value={this.state['lastName']}
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
                                disabled
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
                            <button type="submit" className="btn btn-success">Save</button>
                        </div>
                </form>
            </div>
        )
    }
}

Profile.propTypes = {
    errors: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    updateDetails: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    'errors': state.errors,
    'auth': state.auth,
    'user': state.user
});

export default connect(
    mapStateToProps, 
    { updateDetails }
)(withRouter(Profile));