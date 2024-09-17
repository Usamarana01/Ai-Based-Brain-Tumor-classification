import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BlogItem from './videoCard';

const BlogSlider = ({ blogs }) => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full pb-12">
      <Slider {...settings}>
        {blogs.map((blog, index) => (
          <div key={index} className="px-2">
            <BlogItem blog={blog} customWidth={true} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogSlider;
