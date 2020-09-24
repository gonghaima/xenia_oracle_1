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

export default () => {
  const [header, setHeader] = useState();
  const [main, setMain] = useState();

  const { data, loading, error } = useQuery(
    GET_MAINS
  );

  useEffect(() => {
    !header && fetch('https://xenia-content.herokuapp.com/headers')
      .then(res => res.json())
      .then(bd => {
        setHeader(bd[0]);
      }).catch(err => {
        console.log(err);
      });

    !main && fetch('https://xenia-content.herokuapp.com/mains')
      .then(res => res.json())
      .then(bd => {
        setMain(bd[0]);
      });

  }, [header, main]);

  if (loading) return <h1>Loading</h1>;
  if (error) return <p>ERROR: {error.message}</p>;

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Home key="home-route" path="/" header={header} Layout={Layout} main={main} data={data}/>
      <Features key="feature-route" path="/features" header={header} Layout={Layout} main={main} />
      <About key="about-route" path="/about" header={header} Layout={Layout} main={main} />
      <FAQ key="faq-route" id="faq-route" path="/faq" header={header} Layout={Layout} main={main} />
      <Contact key="contact-route" id="contact-route" path="/contact" header={header} Layout={Layout} main={main} />
    </Router>
  );
}
