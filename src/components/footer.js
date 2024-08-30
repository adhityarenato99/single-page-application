import React from 'react';
import './footer.css';
import { FaInstagram, FaTwitter, FaFacebook, FaTiktok, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container text-center">
                <img src="img/cat2.png" alt="EdVentura Logo" className="footer-logo" />
                <div className="footer-links">
                    <div className="footer-column">
                        <a href="#faqs">Faqs</a>
                        <a href="#contact">Contact us</a>
                        <a href="#directions">Directions</a>
                    </div>
                    <div className="footer-column">
                        <a href="#general-safety-rules">General Safety Rules</a>
                        <a href="#play-area-safety">Play Area Safety</a>
                        <a href="#emergency-procedures">Emergency Procedures</a>
                    </div>
                    <div className="footer-column">
                        <a href="#cookie-policy">Cookie Policy</a>
                        <a href="#accreditation">Accreditation</a>
                    </div>
                </div>
                <div className="social-icons">
                    <a href="#instagram"><FaInstagram /></a>
                    <a href="#twitter"><FaTwitter /></a>
                    <a href="#facebook"><FaFacebook /></a>
                    <a href="#tiktok"><FaTiktok /></a>
                    <a href="#linkedin"><FaLinkedin /></a>
                </div>
                <p className="footer-copyright">
                    &copy; Copyright EdVentura Site
                </p>
            </div>
        </footer>
    );
};