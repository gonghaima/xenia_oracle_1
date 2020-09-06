
import React, { useEffect, useState } from 'react';
import { data, activities } from './content';

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
                <main><h5 className="underline">What does Xenia Suite do?</h5></main>

                {
                    activities.map(activity =>
                        <>
                            <main><h5 className="red">{activity.heading}</h5></main>
                            {
                                activity.details.map(detail =>
                                    <>
                                        <main>
                                            <h5>{detail.title}</h5>
                                            <p>{detail.content}</p>
                                        </main>
                                    </>
                                )
                            }
                        </>
                    )
                }
            </section>
        </>
    )
}