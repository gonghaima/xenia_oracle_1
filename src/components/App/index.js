import React, { useEffect, useState } from 'react';
import oracleCloud from '../../images/oracle-cloud.jpg';
import logo from '../../images/xenia.png';
import { Router, Link } from '@reach/router';
import Layout from '../Layout';
import Home from '../Home';
import Features from '../Features';
import About from '../About';
import FAQ from '../FAQ';

export default () => {
  const [header, setHeader] = useState();
  const [main, setMain] = useState();

  useEffect(() => {
    !header && fetch('https://xenia-content.herokuapp.com/headers').then(res => {

      return res.json();
    }).then(bd => {
      // console.log(bd);
      setHeader(bd[0]);
    });

    !main && fetch('https://xenia-content.herokuapp.com/mains').then(res => {

      return res.json();
    }).then(bd => {
      // console.log(bd);
      setMain(bd[0]);
    });

  }, [header, main]);

  return (
    <Router key="router-container">
      <Home key="home-route" path="/" header={header} Layout={Layout} main={main} />
      <Features key="feature-route" path="/features" header={header} Layout={Layout} main={main} />
      <About key="about-route" path="/about" header={header} Layout={Layout} main={main} />
      <FAQ key="faq-route" id="faq-route" path="/faq" header={header} Layout={Layout} main={main} />
    </Router>
  );
}
