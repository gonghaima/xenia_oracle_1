
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
              <img src="https://images.unsplash.com/photo-1524006231331-78f794ebbbac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04ae6b2f4654598763489bbe207779cc&auto=format&fit=crop&w=500&q=60"
                alt="Your Blog Title" />
            </a>
          </figure>
          <div className="blog-content">
            <div className="blog-topic">
              <a href="#">Beginner Photography</a>
            </div>
            <h3 className="blog-title">
              <a href="#">The Top 15 Photography Tips For Absolute Beginners</a>
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
              <a href="#">Learn How to Paint Better Landscapes With These 10 Tips</a>
            </h3>
            <div className="blog-footer">
              <a className="blog-category" href="#">Painting</a>
              <a className="blog-date" href="#"> | a week ago</a>
            </div>
          </div>
        </div>

        <div className="blog-card">
          <figure>
            <a href="#">
              <img src="https://images.unsplash.com/photo-1527751171053-6ac5ec50000b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2cec328b6204439634f1365b07ef5bcb&auto=format&fit=crop&w=500&q=60"
                alt="Your Blog Title" />
            </a>
          </figure>
          <div className="blog-content">
            <div className="blog-topic">
              <a href="#">Chef Special</a>
            </div>
            <h3 className="blog-title">
              <a href="#">This 10 Chef Blogs You Really Should be Reading</a>
            </h3>
            <div className="blog-footer">
              <a className="blog-category" href="#">Cooking</a>
              <a className="blog-date" href="#"> | 2 months ago</a>
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
              <a href="#">Learn How to Paint Better Landscapes With These 10 Tips</a>
            </h3>
            <div className="blog-footer">
              <a className="blog-category" href="#">Painting</a>
              <a className="blog-date" href="#"> | a week ago</a>
            </div>
          </div>
        </div>


      </div>
    </Layout>

  )
}