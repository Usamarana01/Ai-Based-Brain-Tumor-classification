import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../data.json'; // Adjust the path according to your project structure

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = data.blogs.find(blog => blog._id === id);

  const handleBackClick = () => {
    navigate('/blogs');
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <img
            src={blog?.image}
            className="img-fluid mb-4"
            alt={blog?.title}
          />
          <h1 className="text-primary mb-4">{blog?.title}</h1>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blog?.content }}
          />
        </div>
      </div>
    
      <div className="d-flex justify-content-center">
  <button 
    className="btn btn-secondary mb-4" 
    onClick={handleBackClick}
  >
    Back to Blogs
  </button>
</div>
    </div>
    
  );
};

export default BlogDetails;
