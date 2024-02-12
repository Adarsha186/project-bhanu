import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__links">
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/refund-policy">Refund Policy</Link>
                <Link to="/customer-support">Customer Support</Link>
            </div>
        </footer>
    );
};

export default Footer;