import React, { Component } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Navbar from './common/Navbar';
import Task from './pages/Task';
import Course from './pages/Course';

class Private extends Component {


    render() {
        return (
            <div>
                <Route path="/app" component={Navbar} history={useHistory} />
                <Switch>
                    <Route path='/app/profile' component={Profile} history={useHistory} />
                    <Route exact path={['/app/dashboard','/app']} component={Dashboard} history={useHistory} />
                    <Route path='/app/task' component={Task} history={useHistory} />
                    <Route path='/app/course' component={Course} history={useHistory} />
                </Switch>
            </div>
        )
    }
}
export default Private;