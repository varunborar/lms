import React, {Component} from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTasks } from '../../../State/actions/taskActions';

import Sidebar from '../common/Sidebar';
import AddTask from '../common/AddTask';
import Taskbox from '../common/Taskbox';

class Task extends Component{

    constructor(props) {
        super();
        props.getTasks();
        document.title = "Learn AI | Task Manager";
    }

    componentDidMount(){
    }

    render(){
        return( 
            <div className="task-page">
                <Sidebar />
                <div className="task-app-container row d-flex align-item-center justify-content-center">
                    <div className="task-app col-lg-6 col-md-8 col-sm-8">
                        <AddTask />
                        <Taskbox tasks={this.props.task.tasks}/>
                    </div>
                </div>
            </div>
        )
    } 
}

Task.propTypes = {
    getTasks: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    'task': state.task,
    'errors': state.errors
})

export default connect(
    mapStateToProps,
    { getTasks }
)(Task);