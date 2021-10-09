import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import '../assets/styles/navbar.css'

class Navbar extends Component {

    constructor(props){
        super();
        this.state = {
            'activePath': window.location.pathname === '/' ? 'home' : window.location.pathname.substr(1)
        };
        const title = this.state.activePath;
        document.title = "Learn AI | " + title[0].toUpperCase() + title.substr(1);
    }

    handleNavigation = (event) => {

        const path = event.target.name;

        this.setState({
        'activePath': path
        })
        document.title = "Learn AI | " + path[0].toUpperCase() + path.substr(1);
    }

    render() {
        return (
            <div className="nav-bar">
                <nav className="navbar navbar-light navbar-expand-md">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-center" to="/">
                            <div className="logo">learn<span>.ai</span></div>
                        </Link>
                        <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navcol-1">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <Link 
                                        className="nav-link" 
                                        to="/"
                                        name="home"
                                        onClick={this.handleNavigation}
                                        >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                        className="nav-link"
                                        name="explore" 
                                        to="/explore"
                                        onClick={this.handleNavigation}
                                        >
                                        Explore
                                    </Link>
                                </li>
                                <hr className="d-md-none d-lg-none" />
                            </ul>
                            <span className="navbar-text actions">
                                <Link 
                                    className="login btn" 
                                    name="login"
                                    to="/login" 
                                    role="button"
                                    onClick={this.handleNavigation}
                                    >
                                    Log In
                                </Link>
                                <Link 
                                    className="signup btn" 
                                    name="signup"
                                    role="button" 
                                    to="/signup"
                                    onClick={this.handleNavigation}
                                    >
                                    Sign Up
                                </Link>
                            </span>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar;