import React from 'react'
import Skeleton from '@mui/material/Skeleton'

const ProductDetailSkeletonLoader = () => {
  return (
    <>
      <main className="w-[95%] md:w-[90%] lg:w-[90%] xl:w-[85%] mx-auto text-tertiary mt-20 bg-bg-color">
        {/* Top Section */}
        <section className="flex flex-col lg:flex-row gap-2 md:gap-20 lg:p-5">
          {/* Left Section With Product Image */}
          <div className="rounded-3xl w-full lg:w-[49%] flex flex-col gap-3 bg-white py-3 px-4 lg:p-10">
            {/* Main Image */}
            <Skeleton height={300} variant="rounded" animation="wave" />

            <Skeleton height={150} variant="rounded" animation="wave" />
          </div>

          {/* Right Section With Product Detail */}
          <div className="rounded-3xl flex flex-col lg:w-[49%] py-3 px-4 lg:p-10 bg-white">
            {/* Skeleton for Product Details */}
            <Skeleton variant="text" animation="wave" width="80%" height={40} />
            <Skeleton variant="text" animation="wave" width="60%" height={30} />
            <Skeleton variant="text" animation="wave" width="80%" height={40} />
            <Skeleton
              variant="rectangular"
              animation="wave"
              width="80%"
              height={100}
            />
            <div className="my-10">
              <Skeleton
                variant="text"
                animation="wave"
                width="80%"
                height={30}
              />
              <Skeleton
                variant="text"
                animation="wave"
                width="60%"
                height={30}
              />
              <Skeleton
                variant="text"
                animation="wave"
                width="80%"
                height={30}
              />
            </div>
            <div className="mt-5 flex flex-col md:flex-row lg:flex-col gap-5">
              <Skeleton
                variant="rectangular"
                animation="wave"
                width="100%"
                height={40}
              />
              <Skeleton
                variant="rectangular"
                animation="wave"
                width="100%"
                height={40}
              />
            </div>

            {/* Add more Skeleton components as needed for other details */}
          </div>
        </section>

        {/* Bottom Section (omitted for simplicity in skeleton loader) */}
        <section className="w-full bg-white p-5 mx-auto rounded-xl py-10 min-h-[500px] my-20 shadow-md">
          <Skeleton
            variant="rounded"
            width="90%"
            animation="wave"
            height={400}
            className="mx-auto"
          />
        </section>
      </main>
    </>
  )
}

export default ProductDetailSkeletonLoader
