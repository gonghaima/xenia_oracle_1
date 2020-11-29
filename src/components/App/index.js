import React from 'react';
import { Router } from '@reach/router';
import Layout from '../Layout';
import Home from '../Home';
import Features from '../Features';
import About from '../About';
import FAQ from '../FAQ';
import Contact from '../Contact';
import Career from '../Career';
import { gql, useQuery } from '@apollo/client';


// const GET_MAINS = gql`
//   query{
//     mains {
//       title
//       details
//     }
//   }
// `;

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

  const mainData = {
    mains:
      [
        {
          title: 'Hotel Management Simplified',
          details: `Xenia Suite technology offers services that extend well beyond the front desk. The benefit of
the Xenia Suite software enables hoteliers to deliver a seamless guest experience by taking
care of the day to day including: `
        }
      ]
  };

  const { data: headerData, loading: headerLoading, error: headerError } = useQuery(
    GET_HEADERS
  );

  if (headerLoading) return null;
  if (headerError) return (console.log(headerError));

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Home key="home-route" path="/" Layout={Layout} mainData={mainData} headerData={headerData} />
      <Features key="feature-route" path="/features" Layout={Layout} mainData={mainData} headerData={headerData} />
      <About key="about-route" path="/about" Layout={Layout} mainData={mainData} headerData={headerData} />
      <FAQ key="faq-route" id="faq-route" path="/faq" Layout={Layout} mainData={mainData} headerData={headerData} />
      <Contact key="contact-route" id="contact-route" path="/contact" Layout={Layout} headerData={headerData} />
      <Career key="career-route" id="faq-route" path="/career" Layout={Layout} mainData={mainData} headerData={headerData} />
    </Router>
  );
}
