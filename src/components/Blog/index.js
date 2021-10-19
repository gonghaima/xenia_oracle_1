
import React, { useEffect, useState } from 'react';
import './Blog.scss';
import Iframe from 'react-iframe';


export default ({ Layout, headerData }) => {
  const [header] = headerData.headers;
  const [blogData, setBlogData] = useState({});
  const fetchData = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  };

  useEffect(() => {
    (async () => {
      let response = await fetchData("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/xeniasuite");
      setBlogData(response);
    })();
  }, []);

  return (
    <Layout header={header}>
      {JSON.stringify(blogData)}
    </Layout>

  )
}