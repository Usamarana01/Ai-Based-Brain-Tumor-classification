import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const BlogSliderSkeleton = ({ belowIpadAir }) => {
  return (
    <div className="w-full pb-12">
      <Skeleton variant="rectangular" width="100%" height={200} animation="wave" />
      <div className="px-8 py-3 flex flex-col gap-3 items-center w-full">
        <h3 className="font-bold text-lg">
          <Skeleton variant="text" width={120} animation="wave" />
        </h3>
        <div className="flex justify-center w-full">
          <Skeleton variant="rectangular" width={belowIpadAir ? '100%' : '80%'} height={200} animation="wave" />
        </div>
      </div>
    </div>
  );
};

export default BlogSliderSkeleton;
