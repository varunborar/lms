import React, {Component} from 'react';

import Courses from '../assets/data/courses.json';

import '../assets/styles/taskpage.css';

class TaskPage extends Component{

    constructor(props){
        super();
        const currentCourse = Courses.find(course => course.id == props.match.params.cid);
        this.state = currentCourse.tasks.find(task => task.task_id == props.match.params.tid); 
        this.state['cid'] = currentCourse.id;
    }
    render(){
        return( 
            <div className="task-page">
                <h2>{this.state.title}</h2>
                <br/>
                <p>{this.state.description}</p>
                <br/>
                <div className="video-container">
                    <iframe
                        width="480"
                        src={`https://www.youtube.com/embed/${this.state.embed_code}`}
                        title="YouTube video player"
                        frameborder="0"
                        allowfullscreen>
                    </iframe>
                </div>
                <button 
                    className="btn btn-success"
                    id="back-btn"
                    onClick={() => {this.props.history.push(`/app/course/${this.state.cid}`)}}
                >
                    Back to course
                </button>
                <br />
                <br />
                <br />
            </div>
        )
    } 
}
export default TaskPage;