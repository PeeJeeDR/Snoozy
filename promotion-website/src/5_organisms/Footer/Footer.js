import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="main-footer">
                <div className="footer-list">
                    <h6 className="footer-list-title">Links</h6>
                    <Link to={`home`} className="f-link">Home</Link>
                    <Link to={`discover`} className="f-link">Discover</Link>
                </div>
                <div className="footer-list">
                    <h6 className="footer-list-title">Socials</h6>
                    <a href="https://www.facebook.com/SnoozyInc" className="f-link">Facebook</a>
                </div>
                <div className="footer-list">
                    <h6 className="footer-list-title">Contact</h6>
                    <a href="mailto:snoozyinc@gmail.com" className="f-link">Send us an email</a> 
                </div>
            </div>
        </footer>
    );
}

export default Footer