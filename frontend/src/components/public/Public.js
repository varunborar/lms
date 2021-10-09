import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navbar from './common/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';


class Public extends Component {

    render() {
        return (
            <div className="public">
                <Navbar />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
            </div>
        )
    }
}
export default Public;