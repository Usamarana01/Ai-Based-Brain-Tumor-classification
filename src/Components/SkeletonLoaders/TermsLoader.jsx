import React from "react";
import Skeleton from "@mui/material/Skeleton";

const TermsLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-bg-color py-10">
      <div className="w-4/5 mx-auto bg-white rounded-3xl p-8">
        {/* Title Skeleton */}
        <div className="flex justify-center">
        <Skeleton variant="text" width="80%" height={40} animation="wave" style={{ marginBottom: "1rem" }} />
        </div>

        {/* Text Skeletons */}
        <div className="flex flex-col gap-4 my-10">
          <Skeleton variant="text" width="100%" height={30} animation="wave" />
          <Skeleton variant="text" width="100%" height={30} animation="wave" />
          <Skeleton variant="text" width="90%" height={30} animation="wave" />
          <Skeleton variant="text" width="80%" height={30} animation="wave" />
        </div>
        {/* Image Skeleton */}
        <div className="mt-8 flex justify-center">
          <Skeleton variant="rectangular" width={"90%"} height={200} animation="wave" />
        </div>
      </div>
    </div>
  );
};

export default TermsLoader;
