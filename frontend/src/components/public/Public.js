import React, { Component } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import Navbar from './common/Navbar';
import Explore from './pages/Explore';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';


class Public extends Component {

    render() {
        return (
            <div className="public">
                <Route exact path={["/", "/explore"]} component={Navbar} />
                <Switch>
                    <Route exact path="/" component={Landing} history={useHistory} />
                    <Route path="/explore" component={Explore} history={useHistory} />
                    <Route path="/login" component={Login} history={useHistory} />
                    <Route path="/signup" component={Signup} history={useHistory} />
                </Switch>
            </div>
        )
    }
}
export default Public;