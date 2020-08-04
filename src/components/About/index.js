
import React, { useEffect, useState } from 'react';

import whatIsHotelPMS from '../../images/hotel-what-is-hotel-pms.jpg';
import hotelManagement from '../../images/hotel-management-simplified.png';
import featuresImg from '../../images/features.jpg';
import b1Img from '../../images/benefits/b1.png';
import b2Img from '../../images/benefits/b2.png';
import b3Img from '../../images/benefits/b3.png';
import b4Img from '../../images/benefits/b4.png';

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
            <section className="head-section-about">
                <div className="head-section-content">
                    <h2>About Us</h2>
                </div>
            </section>
            <section className="about-content-section">
                <h2>Technology you can trust</h2>
                <p>
                    Proudly Kiwi owned and operated, Xenia Suite is run by an agile team of industry experts, with a combined 80 years of experience in hospitality
                    and software development, and a passion for what we do.
                </p>
                <p>
                    We are a team of doers, we’re competitive, and we’re not afraid to roll up our sleeves to get the job done. We’re extremely proud to have
                    customers who have been with us from the very beginning. We create a personalised experience for you, so you can concentrate on your hotel
                    operations and guest experience.
                </p>
            </section>
        </>
    )
}