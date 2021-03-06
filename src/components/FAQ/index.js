
import React from 'react';
import { Link } from '@reach/router';
import { data, activities } from './content';
import headingLogoImg from '../../images/heading-logo.png'

export default ({ Layout, headerData }) => {
    const [header] = headerData.headers;;
    return (
        <Layout header={header}>
            <section className="head-section-faq">
                <div className="head-section-content">
                    <img alt="heading-logo" src={headingLogoImg} />
                </div>
            </section>
            <section className="faq-content-section">
                <h2>Frequently Asked Questions</h2>
                <p>
                    Here you’ll find answers to our most common questions. Still want to know more? Get in touch to chat with our local team.
                </p>
                <div className="faq-button-container">
                    <Link to="/contact">Contact Us</Link>
                </div>
            </section>
            <section className="main-section-faq">
                {
                    data.map((d, idx) => <main key={`main${idx}`} id={`main${idx}`}><h5>{d.title}</h5><p>{d.content}</p></main>)
                }
            </section>
            <section className={`faq-content-section`}>
                <h2>What does Xenia Suite do?</h2>
            </section>
            <section className={`main-section-faq padding-top-0`}>
                {
                    activities.map((activity, aIdx) =>
                        activity.details.map((detail, dIdx) => {
                            if (dIdx === 0) {
                                return (
                                    <div key={`default-activity-wrapper-${aIdx}-${dIdx}`}>
                                        <main key={`main-activity-${aIdx}`} id={`main-activity-${aIdx}`}><h5 className="red">{activity.heading}</h5></main>
                                        <main key={`activity-${dIdx}-detail-${dIdx}`}>
                                            <h5>{detail.title}</h5>
                                            <p>{detail.content}</p>
                                        </main>
                                    </div>
                                )
                            } else {
                                return <main key={`activity-${dIdx}-detail-${dIdx}`}>
                                    <h5>{detail.title}</h5>
                                    <p>{detail.content}</p>
                                </main>
                            }
                        })
                    )
                }
            </section>
            <section className="notification-faq-section">
                <h2>Have more questions? Contact us today to find out how Xenia Suite can help you and your business.</h2>
                <div className="button-container">
                    <Link to="/contact">Get your free quote</Link>
                </div>
            </section>
        </Layout>
    )
}