import React, {Component} from 'react';

import Sidebar from '../common/Sidebar';

class Course extends Component{

    constructor() {
        super();
        document.title = "Learn AI | Course";
    }
    
    render(){
        return( 
            <div className="course-page">
                <Sidebar />

            </div>
        )
    } 
}
export default Course;