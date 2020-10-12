
import React from 'react';
import { Link } from '@reach/router';
import hotelManagement from '../../images/hotel-management-simplified.svg';
import featuresImg from '../../images/features.jpg';
import b1Img from '../../images/benefits/b1.jpg';
import b2Img from '../../images/benefits/b2.jpg';
import b3Img from '../../images/benefits/b3.jpg';
import b4Img from '../../images/benefits/b4.jpg';
import b5Img from '../../images/benefits/b5.jpg';
import b6Img from '../../images/benefits/b6.jpg';
import { benefits } from './content';

export default ({ Layout, headerData, mainData }) => {
    const images = [b1Img, b2Img, b3Img, b4Img, b5Img, b6Img];
    const [main] = mainData.mains;
    const [header] = headerData.headers;
    return (
        main && <Layout header={header}>
            <section className="head-section">
                <div className="head-section-content">
                    <h2>{header && header.Title}</h2>
                    <p>{header && header.Subtitle}</p>
                    <div className="hero-button-container">
                        <Link to="/contact">{header && header.ButtonText}</Link>
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
                <div className="button-container">
                    <Link to="/contact">Contact Us</Link>
                </div>
            </section>
            <section className="feature-section">
                <img alt="main-img" src={featuresImg} />
                <h2>The Benefits of Xenia Suite for you</h2>
                <p>Your customer’s journey begins before they’ve stepped into your hotel. From their initial booking interaction, on-site welcome, in-room experience, to their post-stay reflection; every step counts towards your customer’s satisfaction and ultimately determines their repeat business.</p>
                <p>Investing in your personalised guest experience will in turn increase your customer loyalty. Xenia Suite offers many benefits for hotelier’s including: </p>
            </section>
            {benefits.map((benefit, idx) =>
                <section key={`benefits${idx}`} className="main-section">
                    <div className="side">
                        <img alt="b1-img" src={images[idx] ? images[idx] : images[0]} />
                    </div>
                    <main>
                        <h4>{benefit.title}</h4>
                        <p>{benefit.content}</p>
                        <div className="learn-more-button-container">
                            <Link to="/contact">FIND OUT MORE</Link>
                        </div>
                    </main>
                </section>
            )}
        </Layout>
    )
}