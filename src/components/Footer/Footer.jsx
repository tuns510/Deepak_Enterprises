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
                            Plot no 522, 25th street, Maruthupandian Nagar, Padiyanallur, Chennai.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4 className="footer-subtitle">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#about-de">About Us</a></li>
                            <li><a href="#product-category">Products</a></li>
                            <li><a href="#get-quote">Contact</a></li>
                        </ul>
                    </div>

                    {/* Our Products */}
                    <div className="footer-col">
                        <h4 className="footer-subtitle">Our Products</h4>
                        <ul className="footer-links">
                            <li><a href="#product-category">Sand</a></li>
                            <li><a href="#product-category">Paints</a></li>
                            <li><a href="#product-category">Furniture</a></li>
                            <li><a href="#product-category">Building materials</a></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="footer-col">
                        <h4 className="footer-subtitle">Contact Us</h4>
                        <p className="footer-contact">
                            <img src={assets.LitephoneIcon} alt="Phone" className="footer-icon" />
                            <a href="tel:+919840929131">+91 98409 29131</a>
                        </p>
                        <p className="footer-contact">
                            <img src={assets.LitephoneIcon} alt="Phone" className="footer-icon" />
                            <a href="tel:+919790976509">+91 97909 76509</a>
                        </p>
                        <p className="footer-contact">
                            <img src={assets.LitephoneIcon} alt="Phone" className="footer-icon" />
                            <a href="tel:+919840027125">+91 98400 27125</a>
                        </p>
                        <p className="footer-contact">
                            <img src={assets.LitephoneIcon} alt="Phone" className="footer-icon" />
                            <a href="tel:+917305864925">+91 73058 64925</a>
                        </p>
                        <p className="footer-contact">
                            <img src={assets.LitemailIcon} alt="Email" className="footer-icon" />
                            <a href="mailto:deepakenterprises1980@gmail.com?subject=Business Inquiry&body=Hello, I would like to know more about your services.">
                                deepakenterprises1980@gmail.com
                            </a>
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
