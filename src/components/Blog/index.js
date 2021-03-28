
import React from 'react';
import './Blog.scss';
import Iframe from 'react-iframe';


export default ({ Layout, headerData }) => {
    const [header] = headerData.headers;;
    return (
        <Layout header={header}>
            <Iframe url="https://xeniasuite.tumblr.com/post/646902794779000832/frontend-learning-curve"
                width="100%"
                height="100vh"
                id="myId"
                className="xenia-blog"
                display="initial"
                position="relative" />
        </Layout>

    )
}