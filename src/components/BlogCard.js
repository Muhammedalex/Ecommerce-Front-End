import React from "react";
import { Link, useLocation } from "react-router-dom";

const BlogCard = () => {
  const location = useLocation();
  return (
    <div className={`${location.pathname==='/blogs'? 'col-6':'col-3'} mb-4`}>
      <div className="blog-card">
        <div className="card-image">
          <img src="/images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">1 Dec, 2024</p>
          <h5 className="title">A beautiful sunday morning renaissance</h5>
          <p className="desc">
            ollowing a successful API request, the API will return more than 40
            unique response objects containing result data. An API response can
            be returned in JSON or XML format and is structured into 5 modules:
            Location data, time zone data, currency data, languages data,
            security data. Response objects c
          </p>
          <Link to="/blog/:id" className="button">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
