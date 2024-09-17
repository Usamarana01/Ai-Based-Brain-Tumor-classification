import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const BlogHomeSkeleton = ({ customWidth = false }) => {
  return (
    <div className="max-w-[90%] mx-auto my-[80px]">
    <div className="flex flex-col items-center gap-1">
    <Skeleton variant="text" width={200} height={40} />
    </div>
    
    </div>
  );
};

export default BlogHomeSkeleton;
