import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../assets/styles/sidebar.css';
class Sidebar extends Component {


    render() {
        return (
            <div className="side-bar">
                <Link to="/app/dashboard"><div className="fas fa-chalkboard-teacher"></div></Link>
                <Link to="/app/task"><div className="fa fa-tasks"></div></Link>
                <Link to="/app/course"><div className="fa fa-book-open"></div></Link>
            </div>
        )
    }
}
export default Sidebar;