import React from 'react'
import './Footer.css'
import assets from '../../assets/assets'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-container">

                    {/* Left - Company Info */}
                    <div className="footer-col">
                        <h3 className="footer-title">Deepak Enterprise</h3>
                        <p className="footer-text">
                            Your trusted partner for premium quality sand and construction
                            materials with over 20 years of experience.
                        </p>
                        <p className="footer-address">
                            <img src={assets.locationIcon} alt="Location" className="footer-icon" />
                            Redhills, Chennai
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4 className="footer-subtitle">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    {/* Our Products */}
                    <div className="footer-col">
                        <h4 className="footer-subtitle">Our Products</h4>
                        <ul className="footer-links">
                            <li><a href="#">River Sand</a></li>
                            <li><a href="#">Construction Sand</a></li>
                            <li><a href="#">Silica Sand</a></li>
                            <li><a href="#">Concrete Sand</a></li>
                            <li><a href="#">Aggregates</a></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="footer-col">
                        <h4 className="footer-subtitle">Contact Us</h4>
                        <p className="footer-contact">
                            <img src={assets.LitephoneIcon} alt="Phone" className="footer-icon" />
                            +91 9840929131
                        </p>
                        <p className="footer-contact">
                            <img src={assets.LitemailIcon} alt="Email" className="footer-icon" />
                            deepakenterprise@gmail.com
                        </p>
                        <p className="footer-contact">
                            <img src={assets.clockIcon} alt="Clock" className="footer-icon" />
                            Mon-Sat: 8AM-6PM
                        </p>
                    </div>
                </div>

                {/* Bottom Strip */}
                <div className="footer-bottom">
                    <p>© 2025 Deepak Enterprises. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
