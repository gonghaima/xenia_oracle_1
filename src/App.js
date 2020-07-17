import React, { useEffect, useState } from 'react';
import oracleCloud from './img/oracle-cloud.jpg';
import logo from './img/xenia.png';
import whatIsHotelPMS from './img/hotel-what-is-hotel-pms.jpg';
import hotelManagement from './img/hotel-management-simplified.png';
import featuresImg from './img/features.png';
import b1Img from './img/benefits/b1.png';
import b2Img from './img/benefits/b2.png';
import b3Img from './img/benefits/b3.png';
import b4Img from './img/benefits/b4.png';

import './App.scss';

function App() {
  const [header, setHeader] = useState();
  const [main, setMain] = useState();

  useEffect(() => {
    !header && fetch('https://xenia-content.herokuapp.com/headers').then(res => {

      return res.json();
    }).then(bd => {
      console.log(bd);
      setHeader(bd[0]);
    });

    !header && fetch('https://xenia-content.herokuapp.com/mains').then(res => {

      return res.json();
    }).then(bd => {
      console.log(bd);
      setMain(bd[0]);
    });
  }, [header, main]);

  return (
    <div className="App">
      <section className="logo">
        <img alt="main-img" src={logo} />
      </section>
      <section className="top-section">
        <div className="full_width flex-center flex-end">
          <button>Home</button>
          <button>Feature & Benefits</button>
          <button>About us</button>
          <button>Services</button>
          <button>FAQ'S</button>
          <button>Contact</button>
        </div>
      </section>
      <div className="breadcrumb">
        <div className="content_margin flex-center breadcrumb-content">
          <button>Request a free demo</button>
        </div>
      </div>
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
      </section>
      <section className="footer-section">
        <div className="main">
          <div className="left">
            <div className="footer-button-container">
              <button>{header && header.ButtonText}</button>
            </div>
            <h5 className="heading">Contact details</h5>
            <h5>P: 0800 4 Xenia | 01800 493 642</h5>
            <h5>XeniaSales@xeniasuite.com</h5>
            <h5>A: Insert</h5>
          </div>
          <div className="right">
            <h4 className="heading">Main Menue</h4>
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

export default App;
