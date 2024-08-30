import React from 'react';
import './features.css'

export const Features = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-xs-12">
                    <div className="card feature-card blue-card">
                        <img src="img/climbing3.png" alt="LU WALL" className="card-img-top feature-image" fluid />
                        <div className="card-body">
                            <h3 className="card-title feature-title">THE AMAZING</h3>
                            <h1 className="card-text feature-heading">LU WALL</h1>
                            <a href="#lu-wall" className="btn btn-custom orange-btn">LEARN MORE</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xs-12">
                    <div className="card feature-card orange-card">
                        <img src="img/climbing4.png" alt="CLIMBING WALL" className="card-img-top feature-image" fluid />
                        <div className="card-body">
                            <h3 className="card-title feature-title">Interactive Game</h3>
                            <h1 className="card-text feature-heading">CLIMBING WALL</h1>
                            <a href="#climbing-wall" className="btn btn-custom blue-btn">LEARN MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};