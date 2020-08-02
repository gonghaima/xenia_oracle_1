
import React, { useEffect, useState } from 'react';

import whatIsHotelPMS from '../../images/hotel-what-is-hotel-pms.jpg';
import hotelManagement from '../../images/hotel-management-simplified.png';
import featuresImg from '../../images/features.jpg';
import b1Img from '../../images/benefits/b1.png';
import b2Img from '../../images/benefits/b2.png';
import b3Img from '../../images/benefits/b3.png';
import b4Img from '../../images/benefits/b4.png';

export default ({ header }) => {
    const [main, setMain] = useState();

    useEffect(() => {

        !main && fetch('https://xenia-content.herokuapp.com/mains').then(res => {

            return res.json();
        }).then(bd => {
            console.log(bd);
            setMain(bd[0]);
        });
    }, [main]);
    return (
        <>
            <section className="head-section-features">
                <div className="head-section-content">
                    <h2>Xenia Suite Features</h2>
                    {/* <p>{header && header.Subtitle}</p>
                    <div className="hero-button-container">
                        <button>{header && header.ButtonText}</button>
                    </div> */}
                </div>
            </section>
            <section className="sub-head-section">
                <h2>Technology you can trust</h2>
                <p>
                    <i>
                        “We’ve been using Xenia Suite to run Pavilion front and back office for 16 years now, and whilst Xenia stands out for its flexibility and functionality, it’s the
                        user-friendliness and ease of training for staff that is really important to running smoothly. The outstanding support and responsiveness from the Xenia

                        Suite team all these years also makes a big difference.”
                    </i>
                </p>
                <h4>Debbie Horncastle, General Manager Pavilions Hotel Christchurch, New Zealand</h4>
            </section>
            {/* <section className="feature-section">
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
                    <h3>Enhanced check-in/check-out capabilities</h3>
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
                    <h3>Improved housekeeping service</h3>
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
                    <h3>Integrated hotel back-office systems</h3>
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
                    <h3>Centralised customer data</h3>
                    <p>improve the quality and accuracy of your guest profiles with reporting and analytics. Understand your customer buying patterns so you can create targeted packages, services and marketing campaigns with ease.</p>
                    <div className="learn-more-button-container">
                        <button>FIND OUT MORE</button>
                    </div>
                </main>
            </section> */}

        </>
    )
}