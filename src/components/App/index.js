import React, { useEffect, useState } from 'react';
import './App.scss';
import oracleCloud from '../../images/oracle-cloud.jpg';
import logo from '../../images/xenia.png';
import { Router, Link } from '@reach/router';
import Home from '../Home';
import Features from '../Features';



export default () => {
  const [header, setHeader] = useState();

  useEffect(() => {
    !header && fetch('https://xenia-content.herokuapp.com/headers').then(res => {

      return res.json();
    }).then(bd => {
      console.log(bd);
      setHeader(bd[0]);
    });
  }, [header]);

  return (
    <div className="App">
      <section className="logo">
        <img alt="main-img" src={logo} />
      </section>
      <section className="top-section">
        <div className="full_width flex-center flex-end">

          <Link to="/">Home</Link>
          <Link to="/features">Features & Benefits</Link>
          <Link to="/">About us</Link>
          <Link to="/">Services</Link>
          <Link to="/">FAQ'S</Link>
          <Link to="/">Contact</Link>
        </div>
      </section>
      <div className="breadcrumb">
        <div className="content_margin flex-center breadcrumb-content">
          <button>Request a free demo</button>
        </div>
      </div>

      <Router>
        <Home path="/" header={header} />
        <Features path="/features" header={header} />
      </Router>


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
