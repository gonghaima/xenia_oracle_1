
import React from 'react';
import JotformEmbed from 'react-jotform-embed';
import f6Img from '../../images/features/feature-6.jpg';

export default ({ Layout, headerData }) => {
    const [header] = headerData.headers;
    return (
        <Layout header={header}>
            <JotformEmbed src="https://form.jotform.com/202613443636855" />
        </Layout>
    )
}