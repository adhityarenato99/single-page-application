import React from 'react';
import './activitiesSessions.css';

export const ActivitiesAndSessions = () => {
    return (
        <div id="activities" className="text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <img src="img/cat-icon.png" alt="Character" className="character-image" />
                        <h2 className="main-heading">The possibilities are endless!</h2>
                        <p className="description">
                            EdVentura is the first indoor educational and interactive climbing playcentre space for 5 to 11 years olds,
                            set right in the centre of beautiful Como. It offers an aspirational and fun digital learning experience
                            using state of the art audiovisual systems powered by a wide range of educational applications.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="circle-container">
                        <div className="circle blue-circle">Musical Magic</div>
                        <div className="circle red-circle">Number Adventures</div>
                        <div className="circle green-circle">Art Mania</div>
                        <div className="circle orange-circle">Basketball Fun</div>
                        <div className="circle green-circle">Explore the World</div>
                        <div className="circle orange-circle">Move and Groove</div>
                        <div className="circle red-circle">Science Fun</div>
                        <div className="circle blue-circle">Football Infinity</div>
                    </div>
                </div>
                <div className="row">
                    <h2 className="sub-heading">And there are lots more!</h2>
                </div>
            </div>
        </div>
    );
};
