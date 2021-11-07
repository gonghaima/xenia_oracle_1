import React from 'react';
import dayjs from 'dayjs';

export default ({ item }) =>
    <div key={item.guid} className="blog-card">
        <figure>
            <a href="#">
                <img src={item.thumbnail} alt="Your Blog Title" />
            </a>
        </figure>
        <div className="blog-content">
            <div className="blog-topic">
                <a href="#">{item?.categories[0] || 'Reporting'}</a>
            </div>
            <h3 className="blog-title">
                <a href="#">{item.title}</a>
            </h3>
            <div className="blog-footer">
                <a className="blog-category" href="#">{item?.categories[1] || 'Photography'}</a>
                <a className="blog-date" href="#"> | {Math.floor(dayjs().diff(dayjs(item.pubDate), 'day', true))} days ago</a>
            </div>
        </div>
    </div>