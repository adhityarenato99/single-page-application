import React from 'react';

import './header.css'

export const Header = (props) => {
    return (
        <header id="home">
            <div className="intro">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 intro-text">
                                <a href="#header" className="btn btn-custom btn-lg page-scroll bottom-right-button">
                                    Book Your Session
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}