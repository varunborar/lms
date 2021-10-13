import React, {Component} from 'react';

import '../assets/styles/coursecard.css'

class CourseCard extends Component{


    render(){
        return( 
            <div className="course-card col-lg-3 col-md-5 col-sm-10">
                <img src={this.props.image} alt="" />
                <h4>{this.props.title}</h4>
                <button 
                    className="btn btn-primary"
                    onClick={() => {this.props.history.push(`/app/course/${this.props.link_id}`)}}
                >
                    Learn Now
                </button>
            </div>
        )
    } 
}
export default CourseCard;