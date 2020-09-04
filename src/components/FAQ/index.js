
import React, { useEffect, useState } from 'react';
import { data } from './content';

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
            <section className="head-section-faq">
                <div className="head-section-content">
                    <h2>Xenia Suite</h2>
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
                    data.map(d => <main><h5>{d.title}</h5><p>{d.content}</p></main>)
                }
                {/* <main>
                    <h5>How easy is Xenia Suite to use?</h5>
                    <p>
                        Xenia Suite is designed to make your life easier. We can implement and train your team on Xenia Suite in a matter of days, taking care of the
                        day to day so you can concentrate on what matters most.
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
                </main> */}
            </section>
        </>
    )
}