
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
                <h2>No Current Situations Vacant, Please Check Back Later</h2>
                <div className="button-container">
                    <Link to="/contact">Contact us</Link>
                </div>
            </section>
        </Layout>
    )
}