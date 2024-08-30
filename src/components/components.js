import React from 'react';
import { FaHome, FaInfoCircle, FaServicestack, FaImages, FaEnvelope } from 'react-icons/fa';

import './navbar.css'

export const Navigation = (props) => {
    return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    {/* Make all icon pull right */}
                    <div className="navbar-icons pull-right">
                        <FaHome className="navbar-icon" />
                        <FaInfoCircle className="navbar-icon" />
                        <FaServicestack className="navbar-icon" />
                        <FaImages className="navbar-icon" />
                        <FaEnvelope className="navbar-icon" />
                    </div>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <a className="navbar-brand page-scroll text-center" href="#page-top">
                        EdVentura
                    </a>

                    <ul className="nav navbar-nav navbar-left">
                        <li>
                            <a href="#header" className="page-scroll">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#team" className="page-scroll">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#activity" className="page-scroll">
                                Activities & Sessions
                            </a>
                        </li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#bookings" className="page-scroll">
                                Book Your Session
                            </a>
                        </li>
                        <li>
                            <a href="#events" className="page-scroll">
                                School Events & Parties
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
