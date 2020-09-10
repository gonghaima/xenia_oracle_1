import React from 'react';
import './Layout.scss';
import logo from '../../images/xenia.png';
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
                    <Link to="/">Services</Link>
                    <Link to="/faq">FAQ'S</Link>
                    <Link to="/">Contact</Link>
                </div>
            </section>
            <div className="breadcrumb">
                <div className="content_margin flex-center breadcrumb-content">
                    <button>Request a free demo</button>
                </div>
            </div>

            {children}


            <section className="footer-section">
                <div className="main">
                    <div className="left">
                        <div className="footer-button-container">
                            <button>{header && header.ButtonText}</button>
                        </div>
                        <h5 className="heading">Contact details</h5>
                        <h5>P: 0800 4 Xenia | 0800 493 642</h5>
                        <h5>XeniaSales@xeniasuite.com</h5>
                    </div>
                    <div className="right">
                        <h5>Home</h5>
                        <h5>Services</h5>
                        <h5>About us</h5>
                        <h5>Features & benefits</h5>
                        <h5>FAQ’s</h5>
                        <h5>Contac us</h5>
                    </div>
                </div>
                <h5 className="nav">
                    Customer care | Careers | Connect with us | Terms and conditions
        </h5>
            </section>

        </div>
    );
}