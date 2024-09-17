import React from "react";
import Skeleton from "@mui/material/Skeleton";

const BlogItemSkeleton = ({ belowIpadAir }) => {
  return (
    <div className="bg-bg-color w-full min-h-screen py-10">
      {/* <div className="flex flex-col items-center gap-1 py-10">
        <h2 className="text-4xl font-bold">
          <Skeleton variant="text" width={200} height={40} />
        </h2>
        <Skeleton
          variant="rectangular"
          width={300}
          height={200}
          animation="wave"
        />
      </div> */}
      <div
        className={`flex ${
          belowIpadAir ? "flex-col" : "flex-row"
        } max-w-[95%] 2xl:max-w-[90%] mx-auto`}
      >
        <div
          className={`${
            belowIpadAir ? "w-full" : "w-[65%]"
          } 2xl:w-[70%] rounded-2xl flex flex-col bg-white`}
        >
          <Skeleton variant="rectangular" height={300} animation="wave" />
          <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
            <Skeleton variant="text" width={100} />
            <Skeleton variant="text" width={100} />
          </div>
          <div className="w-full p-8 text-xl bg-white text-[#A09C96] gap-4">
            <h3 className="text-3xl text text-tertiary font-bold mb-4">
              <Skeleton variant="text" width={200} />
            </h3>
            <p>
              <Skeleton variant="text" width="100%" height={150} />
            </p>
          </div>
        </div>
        <div
          className={`${
            belowIpadAir ? "w-full" : "w-[35%]"
          } lg:w-[30%] lg:pl-[50px] xl:pl-[80px] 2xl:pl-[150px] flex flex-col gap-8 items-center`}
        >
          <h3 className={`text-2xl font-bold ${belowIpadAir && "mt-10"}`}>
            <Skeleton variant="text" width={200} />
          </h3>
          <div className="w-full pb-12">
            <Skeleton
              variant="rectangular"
              width="100%"
              height={200}
              animation="wave"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItemSkeleton;
