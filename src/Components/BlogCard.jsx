import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCardCSS.css'; // Import the CSS file for custom styles

const BlogCard = ({ blog }) => {
  return (
    <div className="card shadow-sm blog-card">
      <img
        src={blog?.image}
        className="card-img-top"
        alt={blog?.title}
      />
      <div className="card-body">
        <h5 className="card-title text-primary">{blog?.title}</h5>
        <p className="card-text">
          {blog?.description?.length > 100
            ? `${blog?.description.slice(0, 100)}...`
            : blog?.description}
        </p>
        <Link
          to={`/blogs/${blog._id}`}
          className="btn btn-primary"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
