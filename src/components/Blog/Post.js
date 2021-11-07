import React from 'react';
import { useFetch } from '../../utils'

export default ({ Layout, headerData, postId }) => {
    const [header] = headerData.headers;
    const { response, isLoading, error } = useFetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/xeniasuite", {});
    let itemWithIdx = response?.items.map(item => {
        if (item.guid.split('/').pop() === postId) return item
        else return null;
    }).filter(c => c);
    let item = itemWithIdx && itemWithIdx[0] || response?.items[0];
    return (
        <Layout header={header}>
            <section className="blog-content-section">
                <h2 className="left">{item && item.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: item && item.description }} />
                <div class="back-button-container"><a href="/blog">Back</a></div>
            </section>
        </Layout >
    )
}