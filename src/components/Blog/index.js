
import React, { useEffect, useState } from 'react';
import './Blog.scss';


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
      {/* {JSON.stringify(blogData)} */}
      <div className="blogs-container">

        <div className="blog-card">
          <figure>
            <a href="#">
              <img src="https://cdn-images-1.medium.com/max/1024/1*2GE117nagCDryS4ipIn_EA.jpeg"
                alt="Your Blog Title" />
            </a>
          </figure>
          <div className="blog-content">
            <div className="blog-topic">
              <a href="#">Reporting</a>
            </div>
            <h3 className="blog-title">
              <a href="#">Report on key hotel metrics</a>
            </h3>
            <div className="blog-footer">
              <a className="blog-category" href="#">Photography</a>
              <a className="blog-date" href="#"> | 2 days ago</a>
            </div>
          </div>
        </div>

        <div className="blog-card">
          <figure>
            <a href="#">
              <img src="https://images.unsplash.com/photo-1480936600919-bffa6b7ecf1e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ac6548e07a9ad659ddc1ca8e80aae066&auto=format&fit=crop&w=500&q=60"
                alt="Your Blog Title" />
            </a>
          </figure>
          <div className="blog-content">
            <div className="blog-topic">
              <a href="#">Landscape Painting</a>
            </div>
            <h3 className="blog-title">
              <a href="#" dangerouslySetInnerHTML={{ __html: `\u21161 New Zealand Hotel Management Software` }} ></a>
            </h3>
            <div className="blog-footer">
              <a className="blog-category" href="#">cloud-based-software</a>
              <a className="blog-date" href="#"> | a week ago</a>
            </div>
          </div>
        </div>

      </div>
    </Layout>

  )
}