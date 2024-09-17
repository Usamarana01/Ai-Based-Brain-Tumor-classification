import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Breaker from "../../assets/Breaker.png";

const OrderDetailsSkeleton = () => {
  return (
    <main>
      <section className="my-5 md:my-10 py-5 text-center mx-auto w-full max-w-[screen]">
        <div className="text-center">
          <h1 className="mb-2 md:mb-4 font-bold text-xl md:text-3xl lg:text-5xl">
            Order Details
          </h1>
          <img
            src={Breaker}
            alt="breaker"
            className="mx-auto w-32 md:w-auto md:h-auto"
          />
        </div>
      </section>
      <section className="bg-white text-tertiary w-full md:w-[95%] lg:w-[80%] mx-auto h-auto py-14 px-3 lg:px-5 my-10 rounded-xl">
        <div className="flex justify-between text-sm">
          <div className="w-[40%]">
            <h2 className="font-bold text-xs md:text-3xl mb-4">
              <Skeleton width={150} />
            </h2>
            <div>
              <Skeleton width={100} />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 h-full justify-end">
            <Skeleton variant="rectangular" width={100} height={40} />
            <Skeleton variant="rectangular" width={100} height={40} />
          </div>
        </div>
        <div className="mt-14 flex justify-between text-[0.7rem] md:text-[1rem]">
          <div className="w-[31%]">
            <h2 className="font-bold text-black text-sm md:text-2xl lg:text-3xl">
              <Skeleton width={200} />
            </h2>
            <div className="font-bold text-tertiary my-10">
              <Skeleton width={150} />
              <Skeleton width={150} />
              <Skeleton width={150} />
              <Skeleton width={150} />
            </div>
          </div>
          <div className="w-[32%] ml-5">
            <h2 className="font-bold text-black text-sm md:text-2xl lg:text-3xl">
              <Skeleton width={200} />
            </h2>
            <div className="font-bold text-tertiary my-8 mx-auto">
              <Skeleton width={150} />
              <Skeleton width={200} />
            </div>
          </div>
          <div className="w-[31%] md:w-[32%] text-right md:text-left">
            <h2 className="font-bold text-black text-sm md:text-2xl lg:text-3xl">
              <Skeleton width={200} />
            </h2>
            <div className="font-bold text-tertiary my-10">
              <Skeleton variant="rectangular" width={150} height={80} />
              <Skeleton width={150} />
              <Skeleton width={150} />
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-black text-sm md:text-2xl lg:text-3xl mb-5">
            <Skeleton width={200} />
          </h2>
          <div className="w-[95%] flex flex-col gap-8 mx-auto my-11">
            <div className="hidden md:flex justify-between items-center w-full text-xl font-bold">
              <h4 className="md:w-1/2">
                <Skeleton width={200} />
              </h4>
              <div className="flex justify-between md:w-1/2">
                <h4>
                  <Skeleton width={100} />
                </h4>
                <h4>
                  <Skeleton width={100} />
                </h4>
                <h4>
                  <Skeleton width={100} />
                </h4>
              </div>
            </div>
            <div className="border-t-2 border-gray-200 w-full"></div>
            {[...Array(3)].map((_, index) => (
              <React.Fragment key={index}>
                <Skeleton variant="rectangular" width="100%" height={80} />
                <div className="border-t-2 border-gray-200 w-full"></div>
              </React.Fragment>
            ))}
            <div className="flex flex-col gap-8 w-full">
              <div className="w-full flex gap-28 text-lg md:text-xl text-primary font-bold justify-end">
                <Skeleton width={100} />
                <Skeleton width={100} />
              </div>
              <div className="w-full flex gap-28 text-lg md:text-xl text-primary font-bold justify-end">
                <Skeleton width={100} />
                <Skeleton width={100} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OrderDetailsSkeleton;
