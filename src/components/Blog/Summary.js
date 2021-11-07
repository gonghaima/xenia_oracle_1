import React from 'react';
import dayjs from 'dayjs';
import { Link } from '@reach/router';

export default ({ item }) =>
    <div key={item.guid} className="blog-card">
        <figure>
            <Link to={`/blog/${item.guid.split('/').pop()}`}>
                <img src={item.thumbnail} alt="Your Blog Title" />
            </Link>
        </figure>
        <div className="blog-content">
            <div className="blog-topic">
                <Link to={`/blog/${item.guid.split('/').pop()}`}>
                    {item?.categories[0] || 'Reporting'}
                </Link>
            </div>
            <h3 className="blog-title">
                <Link to={`/blog/${item.guid.split('/').pop()}`}>
                    {item.title}
                </Link>
            </h3>
            <div className="blog-footer">
                <a className="blog-category" href="#">{item?.categories[1] || 'Photography'}</a>
                <a className="blog-date" href="#"> | {Math.floor(dayjs().diff(dayjs(item.pubDate), 'day', true))} days ago</a>
            </div>
        </div>
    </div>