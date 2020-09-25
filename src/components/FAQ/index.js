
import React, { useEffect, useState } from 'react';
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
                <div className="button-container">
                    <button>Contact Us</button>
                </div>
            </section>
            <section className="main-section-faq">
                {
                    data.map((d, idx) => <main key={`main${idx}`} id={`main${idx}`}><h5>{d.title}</h5><p>{d.content}</p></main>)
                }
                <main key='main-underline'><h5 className="underline">What does Xenia Suite do?</h5></main>
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
                <h2>Now you have all the answers!</h2>
                <div className="button-container">
                    <button>Get your free quote</button>
                </div>
            </section>
        </Layout>
    )
}