
import React from 'react';
import { Link } from '@reach/router';
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
            <section className="notification-faq-section">
                <h2><i>Thanks for your interest in a career with Xenia Suite. We currently have no vacancies however we are always on the lookout for top talent to join our team. Feel free to send us your details and we will be in touch if a suitable role becomes available.</i></h2>
                <div className="button-container">
                    <Link to="/contact">Contact us</Link>
                </div>
            </section>
        </Layout>
    )
}