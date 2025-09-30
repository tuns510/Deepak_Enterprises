import React from 'react'
import './Header.css'
import assets from '../../assets/assets'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>

            <header className="header">

                <div className="header-left">
                    <img src={assets.logo} alt="Deepak Enterprises Logo" className="logo" />
                    <Link to='/'><h1 className="company-name">DEEPAK GROUP OF COMPANIES</h1></Link>
                </div>

                <div className="header-right">
                    <div className="contact-item">
                        <img src={assets.phoneIcon} alt="Phone" className="icon" />
                        <a href="tel:+919840929131">+91 98409 29131</a>
                    </div>
                    <div className="contact-item">
                        <img src={assets.mailIcon} alt="Email" className="icon" />
                        <a href="mailto:deepakenterprises1980@gmail.com?subject=Business Inquiry&body=Hello, I would like to know more about your services.">
                            deepakenterprises1980@gmail.com
                        </a>

                    </div>
                </div>

            </header>

        </div>
    )
}

export default Header
