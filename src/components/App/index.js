import React, { useEffect, useState } from 'react';
import { Router, Link } from '@reach/router';
import Layout from '../Layout';
import Home from '../Home';
import Features from '../Features';
import About from '../About';
import FAQ from '../FAQ';
import Contact from '../Contact';
import { gql, useQuery } from '@apollo/client';


const GET_MAINS = gql`
  query{
    mains {
      title
      details
    }
  }
`;

const GET_HEADERS = gql`
  query{
    headers{
      Title
      Subtitle
      ButtonText
    }
  }
`;

export default () => {

  const { data: mainData, loading: mainLoading, error: mainError } = useQuery(
    GET_MAINS
  );

  const { data: headerData, loading: headerLoading, error: headerError } = useQuery(
    GET_HEADERS
  );

  if (mainLoading || headerLoading) return <h1>Loading...</h1>;
  if (mainError || headerError) console.log(mainError) || console.log(headerError);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Home key="home-route" path="/" Layout={Layout} mainData={mainData} headerData={headerData} />
      <Features key="feature-route" path="/features" Layout={Layout} mainData={mainData} headerData={headerData} />
      <About key="about-route" path="/about" Layout={Layout} mainData={mainData} headerData={headerData} />
      <FAQ key="faq-route" id="faq-route" path="/faq" Layout={Layout} mainData={mainData} headerData={headerData} />
      <Contact key="contact-route" id="contact-route" path="/contact" Layout={Layout} headerData={headerData} />
    </Router>
  );
}
