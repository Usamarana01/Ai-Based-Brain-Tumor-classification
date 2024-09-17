import React, { useState } from 'react';
import Skeleton from '@mui/material/Skeleton';

const BlogSkeleton = () => {
  const [blogs, setBlogs] = useState([1, 2, 3, 4, 5,6,7,8,9,10]);

  return (
    <div className="flex flex-col items-center gap-1 py-10">
      <h2 className="text-3xl font-bold mb-10">
        <Skeleton variant="text" width={200} height={40} />
      </h2>
      <div className="flex gap-10 justify-center flex-wrap max-w-[90%] xl:max-w-[80%] mx-auto my-10">
        {blogs.map((_, index) => (
             <div className="w-[300px] h-[350px] flex flex-col items-center gap-4 bg-bg-color text-inherit rounded-3xl pb-6 cursor-pointer flex-grow my-2">
      <Skeleton variant="rectangular" width="100%" height={210} animation="wave" />
      <div className="px-6 py-4 flex flex-col gap-3 items-center w-full">
        <h3 className="font-bold text-lg">
          <Skeleton variant="text" width={150} animation="wave" />
        </h3>
        <p className="text-primary underline cursor-pointer text-center font-bold">
          <Skeleton variant="text" width={100} animation="wave" />
        </p>
      </div>
    </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSkeleton;
