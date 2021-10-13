import React, {Component} from 'react';


import bannerImg from '../assets/images/banner-img.png';
import '../assets/styles/landing.css';

class Landing extends Component{


    render(){
        return( 
            <div className="landing-page">
                <div className="header row d-flex justify-content-center align-item-center">
                    <div className="col-lg-5 col-md-8 col-sm-10 col-xs-10">
                        <img className="banner-img" src={bannerImg} alt="Banner" />
                    </div>
                    <div className="text col-lg-5 col-md-5 col-sm-8 col-xs-10">
                        Education
                        <br/>
                        <span>Uncompromised</span>
                        <div className="action-btn d-flex justify-content-end">
                            <button className="btn btn-primary" onClick={() => {this.props.history.push('signup')}}>Join Us Today</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } 
}
export default Landing;