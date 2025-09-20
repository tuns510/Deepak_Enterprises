import React from 'react'
import './Header.css'
import assets from '../../assets/assets'

const Header = () => {
    return (
        <div>

            <header className="header">

                <div className="header-left">
                    <img src={assets.logo} alt="Deepak Enterprises Logo" className="logo" />
                    <h1 className="company-name">DEEPAK ENTERPRISES</h1>
                </div>

                <div className="header-right">
                    <div className="contact-item">
                        <img src={assets.phoneIcon} alt="Phone" className="icon" />
                        <span>+91 98765 43210</span>
                    </div>
                    <div className="contact-item">
                        <img src={assets.mailIcon} alt="Email" className="icon" />
                        <span>info@deepakenterprise.com</span>
                    </div>
                </div>

            </header>

        </div>
    )
}

export default Header
