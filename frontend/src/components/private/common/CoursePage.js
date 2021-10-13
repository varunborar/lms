import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Sidebar from './Sidebar';
import Courses from '../assets/data/courses.json';
import '../assets/styles/coursepage.css';

class CoursePage extends Component {

    constructor(props) {
        super();
        this.state = Courses.find(course => course.id == props.match.params.id);
    }

    render() {
        return (
            <div className="course-page">
                <Sidebar />
                <h2>{this.state.title}</h2>
                <p>{this.state.description}</p>
                <br />
                <br />
                <h2>Tasks</h2>

                <div className="task-container">
                    <div class="accordion" id="taskContainer">
                        {this.state.tasks.map(task => {
                            return (
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id={`heading-${task.task_id}`}>
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${task.task_id}`} aria-expanded="true" aria-controls={`collapse-${task.task_id}`}>
                                            {task.title}
                                        </button>
                                    </h2>
                                    <div id={`collapse-${task.task_id}`} class="accordion-collapse collapse" aria-labelledby={`heading-${task.task_id}`} data-bs-parent="#taskContainer">
                                        <div class="accordion-body">
                                            {task.description}
                                            <br/>
                                            <br/>
                                            <Link 
                                                className="link-btn d-block btn btn-success"
                                                type="button" 
                                                to={`/app/course/${this.state.id}/task/${task.task_id}`}>
                                                &#8594;
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
export default CoursePage;