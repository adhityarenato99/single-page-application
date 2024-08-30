import React from 'react';
import './bookings.css';

export const Bookings = () => {
    return (
        <div id="bookings" className="text-center">
            <div className="container">
                <div className="pricing-card">
                    <div className="pricing-content">
                        <p className="session-text">Per session</p>
                        <h2 className="price">€20</h2>
                        <p className="membership-text">Become a member with a yearly membership fee of</p>
                        <h2 className="price">€120</h2>
                        <a href="#book-session" className="btn btn-book">BOOK YOUR SESSION!</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
