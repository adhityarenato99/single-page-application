import React from 'react';
import './features.css'

export const Activities = () => {
    return (
        <div id="activity" className="text-center">
            <div className="container">
                <div className="col-md-8 col-md-offset-2 section-title">
                    <h2>Activities & Sessions</h2>
                </div>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <div className="card feature-card orange-card">
                            {/* Image 2 */}
                            <img src="img/climbing4.png" alt="CLIMBING WALL" className="card-img-top feature-image top-right" />
                            <div className="card-body">
                                <h1 className="card-text feature-heading">Mini Explorers</h1>
                                <h6 className="card-title feature-title">5 to 7 years old</h6>
                                <p style={{color:'white', paddingTop: '10px'}}>Our specially-designed sessions incorporate this amazing digital interactive technology with
                                    classic learning techniques to engage these young minds. Choose from our wide range of
                                    themed sessions for ages 5 to 7 years old.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div className="card feature-card blue-card">
                            {/* Image 1 */}
                            <img src="img/climbing3.png" alt="LU WALL" className="card-img-top feature-image top-left" />
                            <div className="card-body">
                                <h1 className="card-text feature-heading">Adventure Champions</h1>
                                <h6 className="card-title feature-title">8 to 11 years old</h6>
                                <p style={{color:'white', paddingTop: '10px'}}>This magical world of learning is adapted to this age group and will allow the kids to be engaged
                                    and challenged physically, intellectually and socially-emotionally. Choose from sessions
                                    incorporating the climbing wall, sports, dance, STEM (Science, Technology, Engineering and
                                    Mathematics).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};