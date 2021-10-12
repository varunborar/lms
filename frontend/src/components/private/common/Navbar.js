import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Store from '../../../State/Store';

import { logoutUser } from '../../../State/actions/authActions';

import '../assets/styles/navbar.css'

class Navbar extends Component {

    constructor(props) {
        super();
    }

    logout = () => {
        Store.dispatch(logoutUser());
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="nav-bar">
                <nav className="navbar navbar-light navbar-expand-md">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-center" to="/app">
                            <div className="logo">learn<span>.ai</span></div>
                        </Link>
                        <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navcol-1">
                            <span className="navbar-text actions">
                                <Link
                                    className="profile-image"
                                    name="profile"
                                    to={`/app/profile`}
                                >
                                    <img src={this.props.auth.user.display_image.data} alt="" />
                                    <span className="btn">{this.props.user['first-name'] + " " + this.props.user['last-name']}</span>
                                </Link>
                                <Link
                                    className="logout btn"
                                    name="logout"
                                    to="/"
                                    role="button"
                                    onClick={this.logout}
                                >
                                    Log Out
                                </Link>
                            </span>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

Navbar.propTypes = {
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    'errors': state.errors,
    'auth': state.auth,
    'user': state.user
})
export default connect(
    mapStateToProps
)(withRouter(Navbar));