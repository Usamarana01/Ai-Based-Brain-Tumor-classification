import React, { useState } from 'react';
import Skeleton from '@mui/material/Skeleton';

const AppointmentLoader = () => {
  const [paginatedItems, setPaginatedItems] = useState([1, 2, 3, 4, 5,6,7,8.9,10]); // Adjust the number of skeleton items as needed

  return (
    <article className="text-3xl font-semibold">
      <h2 className="text-3xl font-bold mb-10">
        <Skeleton variant="text" width={200} height={40} />
      </h2>
      <div className="w-full px-5 md:px-0">
        {paginatedItems.map((_, index) => (
          <div key={index} className="mb-5">
            <div className="px-4 py-2 bg-bg-color text-sm md:text-lg text-black font-semibold rounded-xl focus:outline-none">
              <div className="flex w-full h-[45px] justify-between cursor-pointer items-center bg-transparent text-black font-semibold focus:outline-none">
                <div className="mr-2 font-bold w-[45%] lg:text-base">
                  <Skeleton variant="text" width={200} height={30} />
                </div>
                <div className="flex justify-between w-[48%]">
                  <Skeleton variant="text" width={100} height={30} />
                  <Skeleton variant="text" width={60} height={30} />
                  <span className="text-xl my-auto">
                    <Skeleton variant="circle" width={30} height={30} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default AppointmentLoader;
