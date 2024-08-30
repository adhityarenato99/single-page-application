import React from 'react';

export const Home = (props) => {
    return (
        <div id="header">
            <div className="container">
                <div className="row" style={{paddingTop:'80px'}}>
                    <div className="col-xs-12 col-md-6">
                        <div className="about-text" style={{ paddingTop: '50px' }}>
                            <h2 style={{marginBottom: '40px'}}>Come and join us at EdVentura!, an amazing indoor interactive playcentre owned and operated
                                by SENT Entertainment and supported by COMO 1907.</h2>
                            <h3>EdVentura is the first indoor educational and interactive climbing playcentre space for 5 to 11
                                years olds, set right in the centre of beautiful Como. It offers an aspirational and fun digital
                                learning experience using state of the art audiovisual systems powered by a wide range of
                                educational applications.</h3>
                            {/* <div className="list-style">
                                <p>Paragraph...</p>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        {" "}
                        <img src="img/man-climbing-wall.jpg" className="img-responsive" alt="" fluid />{" "}
                    </div>
                </div>
            </div>
        </div>
    );
};