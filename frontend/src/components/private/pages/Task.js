import React, {Component} from 'react';

import Sidebar from '../common/Sidebar';
import AddTask from '../common/AddTask';

class Task extends Component{

    constructor() {
        super();
        document.title = "Learn AI | Task Manager";
    }

    render(){
        return( 
            <div className="task-page">
                <Sidebar />
                <div className="task-app-container row d-flex align-item-center justify-content-center">
                    <div className="task-app col-lg-6 col-md-8 col-sm-8">
                        <AddTask />
                    </div>
                </div>
            </div>
        )
    } 
}
export default Task;