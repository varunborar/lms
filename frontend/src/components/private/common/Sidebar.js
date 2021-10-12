import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../assets/styles/sidebar.css';
class Sidebar extends Component {


    render() {
        return (
            <div className="side-bar">
                <Link to="/app/dashboard"><div class="fas fa-chalkboard-teacher"></div></Link>
                <Link to="/app/task"><div class="fa fa-tasks"></div></Link>
                <Link to="/app/course"><div class="fa fa-book-open"></div></Link>
            </div>
        )
    }
}
export default Sidebar;