import React from 'react';
import { Router } from '@reach/router';
import Layout from '../Layout';
import Home from '../Home';
import Features from '../Features';
import About from '../About';
import FAQ from '../FAQ';
import Contact from '../Contact';
import Career from '../Career';
import Blog from '../Blog';
import BlogIframe from '../Blog-iframe';
import BlogPost from '../Blog/Post';
import { gql, useQuery, makeVar } from '@apollo/client';

export default () => {
  const mainData = {
    mains: [
      {
        title: 'Hotel Management Simplified',
        details: `Xenia Suite technology offers services that extend well beyond the front desk. The benefit of
the Xenia Suite software enables hoteliers to deliver a seamless guest experience by taking
care of the day to day including: `,
      },
    ],
  };

  const headerData = {
    headers: [
      {
        ButtonText: 'Contact Us',
        Title: 'Welcome to Xenia Suite',
        Subtitle: `Xenia Suite is a fully integrated, end-to-end enterprise
        hotel management software platform designed to
        seamlessly support you and your team to deliver the
        ultimate guest experience.`,
      },
    ],
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Home
        key="home-route"
        default
        path="/"
        Layout={Layout}
        mainData={mainData}
        headerData={headerData}
      />
      <Features
        key="feature-route"
        path="/features"
        Layout={Layout}
        mainData={mainData}
        headerData={headerData}
      />
      <About
        key="about-route"
        path="/about"
        Layout={Layout}
        mainData={mainData}
        headerData={headerData}
      />
      <FAQ
        key="faq-route"
        id="faq-route"
        path="/faq"
        Layout={Layout}
        mainData={mainData}
        headerData={headerData}
      />
      <Contact
        key="contact-route"
        id="contact-route"
        path="/contact"
        Layout={Layout}
        headerData={headerData}
      />
      <Career
        key="career-route"
        id="faq-route"
        path="/career"
        Layout={Layout}
        mainData={mainData}
        headerData={headerData}
      />
      <BlogIframe
        key="blog-route-iframe"
        id="blog-route"
        path="/blog-iframe"
        Layout={Layout}
        mainData={mainData}
        headerData={headerData}
      />
      <Blog
        key="blog-route"
        id="blog-route"
        path="/blog"
        Layout={Layout}
        mainData={mainData}
        headerData={headerData}
      />
      <BlogPost
        key="blog-post"
        id="blog-post"
        path="/blog/:postId"
        Layout={Layout}
        mainData={mainData}
        headerData={headerData}
      />
    </Router>
  );
};
