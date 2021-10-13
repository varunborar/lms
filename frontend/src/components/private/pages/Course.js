import React, {Component} from 'react';

import Sidebar from '../common/Sidebar';
import CourseCard from '../common/CourseCards';

import Courses from '../assets/data/courses.json';
import '../assets/styles/course.css'

class Course extends Component{

    constructor() {
        super();
        document.title = "Learn AI | Course";
    }
    
    render(){
        return( 
            <div className="course-page">
                <Sidebar />
                <div className="row d-flex justify-content-center align-item-center">
                    <h2> Your Courses </h2>
                    {
                        Courses.map( course => {
                            return (
                                <CourseCard
                                    title={course.title}
                                    image={`${process.env.PUBLIC_URL}/assets/img/${course.image}`}
                                    key={course.id}
                                    link_id={course.id}
                                    history={this.props.history}
                                />
                            )
                        }

                        )
                    }
                </div>
            </div>
        )
    } 
}
export default Course;