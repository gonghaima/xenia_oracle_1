
import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
import jessieImg from '../../images/about/jessie.png';
import icon1 from '../../images/about/icon1.jpg';
import icon2 from '../../images/about/icon2.jpg';
import icon3 from '../../images/about/icon3.jpg';
import icon4 from '../../images/about/icon4.jpg';
import headingLogoImg from '../../images/heading-logo.png'

export default ({ headerData }) => {
    const [header] = headerData.headers;
    return (
        <Layout header={header}>
            <section className="head-section-about">
                <div className="head-section-content">
                    <img alt="heading-logo" src={headingLogoImg} />
                </div>
            </section>
            <section className="about-content-section">
                <h2>About Us</h2>
                <p>
                    Proudly Kiwi owned and operated, Xenia Suite is run by an agile team of industry experts, with a combined 80 years of experience in hospitality
                    and software development, and a passion for what we do.
                </p>
                <p>
                    We are a team of doers, we’re competitive, and we’re not afraid to roll up our sleeves to get the job done. We’re extremely proud to have
                    customers who have been with us from the very beginning. We create a personalised experience for you, so you can concentrate on your hotel
                    operations and guest experience.
                </p>
            </section>
            <section className="head-section-about-all-hands">
                <div className="head-section-content">
                    <h2></h2>
                </div>
            </section>
            <section className="about-content-section">
                <h2>Our Team</h2>
                <p>
                    At Xenia Suite we want to help you and your business to succeed, our hotel platform is designed to make your life easier. We know you still
                    need that human touch and that’s where our team comes in. Whether you have a back end question or want to sound out your customer
                    experience vision; our team of specialists are here and ready to take your call.
                </p>
                <p>
                    Founded in 2002, Xenia Suite was designed by a group of hotel owners to manage hotel operations with ease and simplicity through an
                    integrated software system. Xenia Suites 18 years’ proven history of performance has adapted with the rapidly changing face of
                    technology and hospitality’s requirements here in New Zealand, across the Tasman and the Pacific.
                </p>
            </section>
            <section className="main-section-about">
                <div className="side">
                    <img alt="jessie-img" src={jessieImg} />
                </div>
                <main>
                    <h4>Jessie Homewood - Xenia Suite Managing Director</h4>
                    <p>
                        Leading the Xenia Suite team is Jessie Homewood. Jessie has over 35 years in software system sales and implementation. Through her work with hotels over the years, Jessie identified a need to provide a seamless, and cost effective hotel management ERP system for hotels in New Zealand and Australia and as such, in 2002, Jessie developed and launched Xenia Suite.
                    </p>
                    <p>
                        Jessie is passionate about making technology work for people rather than people work
                        for technology, and ensures her team enjoy coming to work each day. When Jessie isn’t
                        busy helping her customers, you will find her creating new things in her workshop at
                        home.
                    </p>
                    <div className="learn-more-button-container">
                        <button>Contact Jessie</button>
                    </div>
                </main>
            </section>
            <section className="main-content-section-about-quotation">
                <p>
                    <i>
                        “I got more value out of my first hour and a half with Jessie than in four years with my previous supplier.”
                    </i>
                </p>
                <h4>Mark Mischefski, CEO of Expol Insulation</h4>
            </section>
            <section className="main-section-about">
                <div className="side">
                    <img className="icon" alt="jessie-img" src={icon1} />
                </div>
                <main>
                    <h4>Consulting and Implementation Team</h4>
                    <p>
                        Our team of Xenia Suite consultants engage with you to define and document your
                        specific business and operational requirements and configure Xenia Suite
                        appropriately. They are responsible for implementing the system and then training your
                        team to run Xenia Suite effectively and independently.
                    </p>
                    <div className="learn-more-button-container">
                        <button>Contact Us</button>
                    </div>
                </main>
            </section>
            <section className="main-section-about">
                <div className="side">
                    <img className="icon" alt="jessie-img" src={icon2} />
                </div>
                <main>
                    <h4>Service and Help-Desk Support Team</h4>
                    <p>
                        Once you are up and running, if you have any general enquiries or need assistance with
                        your front-end administration, our customer service and help-desk support team are here
                        to help. They are your first point of contact when it comes to all things Xenia Suite. An
                        integral part of the team, they will help answer your questions and provide any technical
                        support you may need 24/7.
                    </p>
                    <div className="learn-more-button-container">
                        <button>Contact Us</button>
                    </div>
                </main>
            </section>
            <section className="main-section-about">
                <div className="side">
                    <img className="icon" alt="jessie-img" src={icon3} />
                </div>
                <main>
                    <h4>Software Development Team</h4>
                    <p>
                        The Xenia Suite Software Development team have extensive experience in ERP
                        systems, point of sales, warehousing, distribution, logistics, and app development; and
                        they enjoy providing solutions and testing new ideas to improve the Xenia Suite platform.
                        The team also take on board any suggestions or feedback from our clients to ensure
                        we’re constantly evolving and providing you with what you need for your business.
                    </p>
                    <div className="learn-more-button-container">
                        <button>Contact Us</button>
                    </div>
                </main>
            </section>
            <section className="main-section-about">
                <div className="side">
                    <img className="icon" alt="jessie-img" src={icon4} />
                </div>
                <main>
                    <h4>Business Development &amp; Marketing Team</h4>
                    <p>
                        Our business development and marketing team know the importance of keeping up with
                        industry trends and hotel guests’ increasing expectations. They are here to help you
                        identify the needs of your business, match them to Xenia Suite’s functionality and to
                        support your business growth. They are passionate about the solutions Xenia Suite can
                        provide to its customers; and enjoy seeing customers implement and reap the rewards
                        of the Xenia Suite software.
                    </p>
                    <div className="learn-more-button-container">
                        <button>Contact Us</button>
                    </div>
                </main>
            </section>
            <section className="main-content-section-about-quotation">
                <p>
                    <i>
                        "Jessie has been our IT specialist for over 10 years. She has helped us grow from a start-up company to a successful business employing close to 20 people. She deals with the day to day management of our IT side of our business and if ever we are in real strife with our IT Jess is always there to save us."
                    </i>
                </p>
                <h4>Liz Murphy, Branch Manager at Property Link Groups Limited</h4>
            </section>
        </Layout>
    )
}