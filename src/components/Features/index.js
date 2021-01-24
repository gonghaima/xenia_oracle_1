
import React from 'react';
import { Link } from '@reach/router';
import f1Img from '../../images/features/feature-1.jpg';
import f2Img from '../../images/features/feature-2.jpg';
import f3Img from '../../images/features/feature-3.jpg';
import f4Img from '../../images/features/feature-4.jpg';
import f5Img from '../../images/features/feature-5.jpg';
import f6Img from '../../images/features/feature-6.jpg';

export default ({ Layout, headerData }) => {
    const [header] = headerData.headers;
    return (
        <Layout header={header}>
            <section className="head-section-features">
                <div className="head-section-content">
                    <h2>Features and Benefits</h2>
                </div>
            </section>
            <section className="features-content-section">
                <h2>Technology you can trust</h2>
                <p>
                    <i>
                        “We’ve been using Xenia Suite to run Pavilion front and back office for 16 years now, and whilst Xenia stands out for its flexibility and functionality, it’s the
                        user-friendliness and ease of training for staff that is really important to running smoothly. The outstanding support and responsiveness from the Xenia

                        Suite team all these years also makes a big difference.”
                    </i>
                </p>
                <h4>Debbie Horncastle, General Manager Pavilions Hotel Christchurch, New Zealand</h4>
            </section>
            <section className="main-section-features">
                <div className="side">
                    <img alt="f1-img" src={f1Img} />
                </div>
                <main>
                    <h4>User-friendly systems</h4>
                    <p>Xenia Suite is designed to make your life easier. We have made our system easy to
                    implement and use, so you and your team can focus on keeping your guests happy.
                    You and your team will benefit from:
                    </p>
                    <ul>
                        <li>
                            Easy to navigate dashboards with colour coding and task automation.
                        </li>
                        <li>
                            A reminder system to prompt certain tasks and or guest requests.
                        </li>
                        <li>
                            Clear team communication through our fully integrated system to ensure business continuity during shift changes.
                        </li>
                        <li>
                            Front and back end development for real time reporting and automatic stock replenishment.
                        </li>
                        <li>
                            Training from the Xenia Suite team, and 24/7 access to our online knowledge database and instructional videos.
                        </li>
                    </ul>
                </main>
            </section>
            <section className="main-section-features">
                <div className="side">
                    <img alt="f2-img" src={f2Img} />
                </div>
                <main>
                    <h4>Enhanced check-in/check-out capabilities</h4>
                    <p>
                        Empower your guests through the Xenia Suite mobile app. Guests can manage self-check-
                        in / check-out, receive and send alerts for delays and emergencies; and manage their
                        booking preferences through a touch of a button.
                    </p>
                    <p>
                        The Xenia Suite Guest App allows you to communicate with your guests, showcase everything you have to offer, and provide that personal touch. You can:
                    </p>
                    <ul>
                        <li>
                            Front and back end development for real time reporting and automatic stock replenishment.
                        </li>
                        <li>
                            Send communications out to your guests such as welcome messages, promotion specials, and updates on their booking details.
                        </li>
                        <li>
                            Remove the barrier of the reception desk and create a more personalised guest experience through individual interactions.
                        </li>
                        <li>
                            Live chat enabled - your guests can communicate with you on the go and receive an immediate response from your team or virtual assistant.
                        </li>
                        <li>
                            Room Service - with just a few clicks of a button your guests can view menus and place orders.
                        </li>
                        <li>
                            Tours and Activities - partner with local tours and activities and offer special pricing to your guests to make their stay as enjoyable as possible whilst increasing your bottom line
                        </li>
                        <li>
                            Amenities - Guests can book a massage, order a newspaper and request a room clean all through your very own Xenia Guest app.
                        </li>
                    </ul>
                </main>
            </section>
            <section className="main-section-features">
                <div className="side">
                    <img alt="f3-img" src={f3Img} />
                </div>
                <main>
                    <h4>Improved housekeeping service</h4>
                    <p>
                        Monitor performance, rostering, and ensure rooms are clean and in perfect condition. Enjoy greater flexibility with housekeeping tasks and maintenance needs with our automated software.
                    </p>
                    <ul>
                        <li>
                            Create room checklists to ensure all tasks are properly completed at each clean.
                        </li>
                        <li>
                            Upload images directly from the app for quality control, and lost property inventory.
                        </li>
                        <li>
                            Access and track their roster and tasks via the Housekeeping App.
                        </li>
                        <li>
                            Add maintenance requests
                        </li>
                        <li>
                            Log incidents and communicate urgent requests through the chat function.
                        </li>
                    </ul>
                </main>
            </section>
            <section className="main-section-features">
                <div className="side">
                    <img alt="f4-img" src={f4Img} />
                </div>
                <main>
                    <h4>Integrated hotel back-office systems</h4>
                    <p>
                        Fully integrated operations and financial processes (even across multiple Properties) including full accounting, balance sheets, cash and inventory management, and cash flow visibility.
                    </p>
                    <ul>
                        <li>
                            Enjoy end to end business management through a fully integrated ERP accounting software package.
                        </li>
                        <li>
                            Effectively manage reservations and point of sale including restaurant and bar, in-room charges, and events and activities requested by your guests.
                        </li>
                        <li>
                            Operate multiple pricing structures and separate billing requirements for single reservations or group bookings.
                        </li>
                        <li>
                            View and analyse inventory stock levels, automate purchasing and receipt of hotel goods.
                        </li>
                        <li>
                            Easily manage employee information including time and attendance, rosters and payroll.
                        </li>
                        <li>
                            Full reporting features to optimise your end-of-month/year-end processes.
                        </li>
                    </ul>
                </main>
            </section>
            <section className="main-section-features">
                <div className="side">
                    <img alt="f5-img" src={f5Img} />
                </div>
                <main>
                    <h4>Centralised customer data</h4>
                    <p>
                        Improve the quality and accuracy of your guest profiles including consolidated corporate
                        information with reporting and analytics. Capture your guest’s personal preferences for
                        that special welcome and long-term relationship.
                    </p>
                    <ul>
                        <li>
                            Access real-time data to effectively manage your reservation pipeline.
                        </li>
                        <li>
                            Create personalised marketing campaigns by tailoring and understanding your guest preferences.
                        </li>
                        <li>
                            Capture guest information including purpose of stay, spending habits, and seasonal trends for future marketing and communications to increase your guest loyalty.
                        </li>
                        <li>
                            Easily identify when there is a downturn or quiet period so you can create special offers and promotions to increase your revenue.
                        </li>
                        <li>
                            Manage your marketing campaign costs and return on investment through a complete end-to-end process.
                        </li>
                    </ul>
                </main>
            </section>
            <section className="main-section-features">
                <div className="side">
                    <img alt="f6-img" src={f6Img} />
                </div>
                <main>
                    <h4>Cost effective software</h4>
                    <div className="cost-effective--button-container">
                        <Link to="/contact">Contact Us</Link>
                    </div>
                    <p>
                        We will work with you to configure Xenia Suite to suit your specific requirements. Only
                        pay for the functionality you need to drive your business forward.
                    </p>
                    <p>
                        Xenia Suite delivers a single end-to-end solution for multiple operations allowing you to
                        deal with one reliable vendor. Our cost effectiveness, support team, and operational
                        efficiencies have helped our clients move from PMS legacy systems and combine their
                        hotel functionality into one place. Want to know more? Contact us today for more
                        information.
                    </p>
                </main>
            </section>

        </Layout>
    )
}