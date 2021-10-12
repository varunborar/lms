import React, { Component } from 'react';

import Sidebar from '../common/Sidebar';
import CourseCard from '../common/CourseCards';

import Courses from '../assets/data/courses.json';
import '../assets/styles/dashboard.css'

class Dashboard extends Component {

    constructor() {
        super();
        document.title = "Learn AI | Dashboard";
    }

    render() {
        return (
            <div className="dashboard-page">
                <Sidebar />
                <div className="header">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <h2>Dashboard</h2>
                        <p>
                            Welcome to learn.ai training program. During the duration of your program you
                            will learn a lot of new skills, create new projects and become industry ready.
                        </p>
                        <p className="muted">
                            Note: This is a self paced program. You will be assigned mentor who will guide
                            you through the course of program.
                        </p>
                    </div>
                </div>
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

export default Dashboard;