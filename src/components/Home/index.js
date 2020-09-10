
import React, { useEffect, useState } from 'react';
import hotelManagement from '../../images/hotel-management-simplified.png';
import featuresImg from '../../images/features.jpg';
import b1Img from '../../images/benefits/b1.png';
import b2Img from '../../images/benefits/b2.png';
import b3Img from '../../images/benefits/b3.png';
import b4Img from '../../images/benefits/b4.png';

export default ({ header, Layout, main }) => {
    return (
        <Layout header={header}>
            <section className="head-section">
                <div className="head-section-content">
                    <h2>{header && header.Title}</h2>
                    <p>{header && header.Subtitle}</p>
                    <div className="hero-button-container">
                        <button>{header && header.ButtonText}</button>
                    </div>
                </div>
            </section>
            <section className="sub-head-section">
                <h2>{main && main.title}</h2>
                <p>{main && main.details}</p>
                <img alt="main-img" src={hotelManagement} />
            </section>
            <section className="notification-section">
                <h2>Covid-19 Update</h2>
                <p>At Xenia Suite, we understand the challenges involved in working in a seasonal business, and even more so during a global crisis. We want to help you through this uncertain time, and that’s why, when times are tough your monthly fees are reduced in line with your occupancy rates.</p>
                <p>We’re in this together and are here to help our clients as much as we can. Talk to us today to hear how we can help you reduce your outgoings and focus on keeping your business in the black.</p>
                <div className="button-container"><button>Contact Us</button></div>
            </section>
            <section className="feature-section">
                <img alt="main-img" src={featuresImg} />
                <h2>The Benefits of Xenia Suite for you</h2>
                <p>Your customer’s journey begins before they’ve stepped into your hotel. From their initial booking interaction, on-site welcome, in-room experience, to their post-stay reflection; every step counts towards your customer’s satisfaction and ultimately determines their repeat business.</p>
                <p>Investing in your personalised guest experience will in turn increase your customer loyalty. Xenia Suite offers many benefits for hotelier’s including: </p>
            </section>
            <section className="main-section">
                <div className="side">
                    <img alt="b1-img" src={b1Img} />
                </div>
                <main>
                    <h4>Enhanced check-in/check-out capabilities</h4>
                    <p>empower your guests through the Xenia Suite mobile app. Guests can manage self-check-in / check-out, receive and send alerts for delays and emergencies; and manage their booking preferences through a touch of a button.</p>
                    <div className="learn-more-button-container">
                        <button>FIND OUT MORE</button>
                    </div>
                </main>
            </section>
            <section className="main-section">
                <div className="side">
                    <img alt="b2-img" src={b2Img} />
                </div>
                <main>
                    <h4>Improved housekeeping service</h4>
                    <p>monitor performance, rostering and ensure rooms are clean and in perfect condition. Enjoy greater flexibility with room-service tasks and maintenance needs with our automated software.</p>
                    <div className="learn-more-button-container">
                        <button>FIND OUT MORE</button>
                    </div>
                </main>
            </section>
            <section className="main-section">
                <div className="side">
                    <img alt="b3-img" src={b3Img} />
                </div>
                <main>
                    <h4>Integrated hotel back-office systems</h4>
                    <p>connect operations and financial processes including full accounting, balance sheets, cash and inventory management, and with instant cashflow visibility.</p>
                    <div className="learn-more-button-container">
                        <button>FIND OUT MORE</button>
                    </div>
                </main>
            </section>
            <section className="main-section">
                <div className="side">
                    <img alt="b4-img" src={b4Img} />
                </div>
                <main>
                    <h4>Centralised customer data</h4>
                    <p>improve the quality and accuracy of your guest profiles with reporting and analytics. Understand your customer buying patterns so you can create targeted packages, services and marketing campaigns with ease.</p>
                    <div className="learn-more-button-container">
                        <button>FIND OUT MORE</button>
                    </div>
                </main>
            </section>

        </Layout>
    )
}