import React, {Component} from 'react';

import '../assets/styles/explore.css';

class Explore extends Component{


    render(){
        return( 
            <div className="explore-page">
                <section id="home" className="course-boxed">
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center">Make yourself industry ready.</h2>
                            <p className="text-center">Get started with the best in class courses, created for you.</p>
                            <br/>
                            <br/>
                        </div>
                        <div className="row justify-content-center features">
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box"><i className="fa fa-clock-o icon"></i>
                                    <h3 className="name">Self-paced</h3>
                                    <p className="description">Study on your schedule and at a pace preferable to you. Watch lessons on demand and get your doubts solved.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box"><i className="fa fa-leaf icon"></i>
                                    <h3 className="name">Live Projects</h3>
                                    <p className="description">Build real, ready-to-ship products with team members, professionals & students from other tracks. </p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box"><i className="fa fa-plane icon"></i>
                                    <h3 className="name">Upskilling</h3>
                                    <p className="description">8 Weeks of intensive training & certifications through structured, industry vetted curriculum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    } 
}
export default Explore;