import React, { useState } from 'react'
import Skeleton from '@mui/material/Skeleton'

const ReviewSkeletonLoader = () => {
  const [reviews, setReviews] = useState([1, 2])
  return (
    <>
      <article className="p-5 md:p-10 max-h-[800px] overflow-y-scroll light-scrollbar">
        <div className="mx-auto text-center w-full my-10">
          <Skeleton
            variant="rounded"
            width={250}
            height={60}
            className="mx-auto"
          />
        </div>
        {reviews.map((review, index) => (
          <div
            className={`flex ${
              index % 2 === 1 ? 'justify-end' : 'justify-start'
            } items-center`}
          >
            <div
              className={`w-full py-5 md:w-[75%] border-2 h-auto min-h-[200px] my-5 rounded-2xl flex items-center`}
            >
              {/* Left Section: Image */}
              <div className="hidden md:block md:w-[25%]">
                <div className="rounded-full mx-5 w-14 h-14 lg:w-20 lg:h-20 object-cover">
                  <Skeleton variant="circular" width={'90%'} height={'90%'} />
                </div>
              </div>

              {/* Right Section: Top - Name, Date, Rating | Bottom - Comment */}
              <div className="flex-grow ml-5 md:w-[80%] md:-ml-10">
                {/* Top Section: Name, Date, Rating */}
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold text-xl flex gap-2">
                      <Skeleton
                        variant="text"
                        width={150}
                        height={20}
                        className="mx-auto"
                      />
                    </div>
                    <div className="opacity-70">
                      <Skeleton variant="text" width={100} height={20} />
                    </div>
                  </div>
                  <div className="ml-auto mr-4">
                    <Skeleton variant="text" width={100} height={50} />
                  </div>
                </div>

                {/* Bottom Section: Comment */}
                <div className="mt-3 mr-7 pr-5 w-full">
                  <Skeleton variant="text" width={'full'} height={20} />
                  <Skeleton variant="text" width={'full'} height={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </article>
    </>
  )
}

export default ReviewSkeletonLoader
