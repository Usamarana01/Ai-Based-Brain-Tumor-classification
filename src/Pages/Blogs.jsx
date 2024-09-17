import React, { useState, useEffect } from 'react';
import BlogCard from '../Components/BlogCard';
import VideoCard from '../Components/videoCard';
import data from '../data.json'; 
const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Set data from JSON file
    setBlogs(data.blogs);
    setVideos(data.videos);
  }, []);

  return (
    <div className="container my-5">
      {/* Blog Section */}
      <div className="mb-5">
      <div className="mt-5">
        <h2  className="h3 text-secondary mb-3 text-center">Explore Our Blogs</h2>
        <p className="text-center mb-5">
          Our curated selection of blogs covers a wide range of topics including AI development, 
          brain-computer interfaces, machine learning techniques, and more. Each article is designed 
          to provide you with actionable insights and the latest research to help you stay informed.
        </p>
      </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {blogs.map((blog) => (
            <div className="col" key={blog._id}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>

      {/* Videos Section */}
      <div>
      <div className="mt-5">
        <h2  className="h3 text-secondary mb-3 text-center">Watch Informative Videos</h2>
        <p className="text-center mb-5">
          For visual learners, we’ve compiled a series of video resources that explain complex topics 
          in an easy-to-understand format. From beginner guides to advanced tutorials, our video library 
          is the perfect companion to our written content.
        </p>
      </div>
      <div className="row">
          {videos.map((video) => (
            <div className="col-md-4 mb-4" key={video._id}>
              <VideoCard video={video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;