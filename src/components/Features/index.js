
import React, { useEffect, useState } from 'react';

import whatIsHotelPMS from '../../images/hotel-what-is-hotel-pms.jpg';
import hotelManagement from '../../images/hotel-management-simplified.png';
import featuresImg from '../../images/features.jpg';
import b1Img from '../../images/benefits/b1.png';


import f1Img from '../../images/features/feature-1.jpg';

export default ({ header }) => {
    const [main, setMain] = useState();

    useEffect(() => {

        !main && fetch('https://xenia-content.herokuapp.com/mains').then(res => {

            return res.json();
        }).then(bd => {
            console.log(bd);
            setMain(bd[0]);
        });
    }, [main]);
    return (
        <>
            <section className="head-section-features">
                <div className="head-section-content">
                    <h2>Xenia Suite Features</h2>
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
        </>
    )
}