import React from 'react';
import './Layout.scss';
import logo from '../../images/xenia.svg';
import { Link } from '@reach/router';



export default ({ children, header }) => {
    return (
        <div className="App">
            <section className="logo">
                <img alt="main-img" src={logo} />
            </section>
            <section className="top-section">
                <div className="full_width flex-center flex-end">
                    <Link to="/">Home</Link>
                    <Link to="/features">Features & Benefits</Link>
                    <Link to="/about">About us</Link>
                    <Link to="/faq">FAQ'S</Link>
                    <Link to="/contact">Contact us</Link>
                </div>
            </section>
            <div className="breadcrumb">
                <div className="content_margin flex-center breadcrumb-content">
                    <Link to="/contact">Request a free demo</Link>
                </div>
            </div>

            {children}


            <section className="footer-section">
                <div className="main">
                    <div className="left">
                        <div className="footer-button-container">
                            <Link to="/contact">{header && header.ButtonText}</Link>
                        </div>
                        <h5 className="heading">Contact details</h5>
                        <h5>P: 0800 4 Xenia | 0800 493 642</h5>
                        <h5>XeniaSales@xeniasuite.com</h5>
                    </div>
                    <div className="right">
                        <Link to="/">Home</Link>
                        <Link to="/about">About us</Link>
                        <Link to="/features">Features & Benefits</Link>
                        <Link to="/faq">FAQ's</Link>
                        <Link to="/contact">Contact us</Link>
                    </div>
                </div>
                <h5 className="nav">
                    <a href="mailto:XeniaSales@xeniasuite.com">Customer care</a> |
                    <Link to="/career">Careers</Link> |
                    <a href="https://www.facebook.com/Xenia-Suite-617066291991191/" target="_blank">Facebook</a> |
                    <a href="https://www.linkedin.com/company/xenia-suite" target="_blank">LinkedIn</a>
                </h5>
            </section>

        </div>
    );
}