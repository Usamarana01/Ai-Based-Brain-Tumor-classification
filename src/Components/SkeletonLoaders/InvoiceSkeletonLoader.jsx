import React, { useState } from 'react'
import Skeleton from '@mui/material/Skeleton'
import Breaker from '../../assets/Breaker.png'

export const InvoiceSkeletonLoader = () => {
  return (
    <main>
      <section className="my-5 md:my-10 py-5 text-center mx-auto w-full max-w-[screen]">
        <div className="text-center">
          <h1 className="mb-2 md:mb-4 font-bold text-xl md:text-3xl lg:text-5xl">
            Invoice
          </h1>
          <img
            src={Breaker}
            alt="breaker"
            className="mx-auto w-32 md:w-auto md:h-auto"
          />
        </div>
      </section>
      <section className="relative bg-white text-tertiary w-full md:w-[95%] lg:w-[80%] mx-auto h-auto my-10 rounded-xl">
        <div className="flex justify-between h-[120px] md:h-[180px] mx-auto px-7 py-7 md:px-14 md:py-12 text-sm w-full border-b-2 border-gray-200">
          <div className="w-[25%] md:w-[40%]">
            <Skeleton variant="rounded" width={'50%'} height={'100%'} />
          </div>
          <div className="h-full flex flex-col items-end w-1/3">
            <div className="flex w-full h-full gap-5">
              <Skeleton variant="text" width={'40%'} height={'70%'} />
              <Skeleton variant="text" width={'40%'} height={'70%'} />
            </div>
            <div className="flex w-full h-full gap-5">
              <Skeleton variant="text" width={'40%'} height={'70%'} />
              <Skeleton variant="text" width={'40%'} height={'70%'} />
            </div>
          </div>
        </div>
        <div className="flex justify-between h-auto mx-auto px-7 py-7 md:px-14 md:py-12 text-sm w-full border-b-2 border-gray-200">
          {/*  */}
          <div className="w-[48%] h-full md:w-[31%] text-base md:text-xl">
            <Skeleton variant="text" width={'40%'} height={'100%'} />
            <div className="font-bold text-tertiary h-full">
              <div className="my-2 h-full">
                <Skeleton variant="text" width={'60%'} height={'20%'} />
                <Skeleton variant="text" width={'80%'} height={'20%'} />
                <Skeleton variant="text" width={'70%'} height={'20%'} />
                <Skeleton variant="text" width={'50%'} height={'20%'} />
              </div>
            </div>
          </div>
          <div className="w-[35%] h-full md:w-[31%] text-base md:text-xl">
            <Skeleton variant="text" width={'40%'} height={'100%'} />
            <div className="font-bold text-tertiary h-full">
              <div className="my-2 h-full">
                <Skeleton variant="text" width={'60%'} height={'20%'} />
                <Skeleton variant="text" width={'80%'} height={'20%'} />
                <Skeleton variant="text" width={'70%'} height={'20%'} />
                <Skeleton variant="text" width={'50%'} height={'20%'} />
              </div>
            </div>
          </div>
        </div>
        <div className="px-7 py-7 md:px-14 md:py-12 flex flex-col gap-8 mx-auto border-b-2 border-gray-200">
          <InvoiceItems items={[1, 2, 3, 4]} />
          <div className="w-full flex justify-end">
            <div className="flex flex-col w-1/2 md:w-1/3 gap-3 items-end justify-end">
              <div className="w-full flex justify-between text-sm md:text-xl text-tertiary font-bold">
                <Skeleton variant="text" width={'40%'} height={'100%'} />
                <Skeleton variant="text" width={'40%'} height={'100%'} />
              </div>
              <div className="w-full flex justify-between text-sm md:text-xl text-tertiary font-bold">
                <Skeleton variant="text" width={'40%'} height={'100%'} />
                <Skeleton variant="text" width={'40%'} height={'100%'} />
              </div>
              <div className="w-full flex justify-between text-sm md:text-xl text-black font-bold">
                <Skeleton variant="text" width={'40%'} height={'100%'} />
                <Skeleton variant="text" width={'40%'} height={'100%'} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-2 px-4 py-7 md:px-14 md:py-12 font-semibold">
          <div className="flex gap-2 w-1/3 text-center items-center justify-left">
            <Skeleton variant="text" width={'40%'} height={'100%'} />
            <Skeleton variant="text" width={'40%'} height={'100%'} />
          </div>
          <div className="flex gap-2 w-1/3 text-center items-center justify-center">
            <Skeleton variant="text" width={'40%'} height={'100%'} />
            <Skeleton variant="text" width={'40%'} height={'100%'} />
          </div>
          <div className="flex w-1/3 md:text-center justify-end">
            <Skeleton variant="text" width={'40%'} height={'100%'} />
            <Skeleton variant="text" width={'40%'} height={'100%'} />
          </div>
        </div>
      </section>
    </main>
  )
}
const InvoiceItems = ({ items }) => {
  return (
    <div className="flex flex-col text-sm md:text-lg h-full">
      {items?.map((item) => (
        <div className="h-24 w-full flex gap-2">
          <div className="h-full w-1/4">
            <Skeleton variant="rounded" width={'100%'} height={'50%'} />
          </div>
          <div className="h-full w-1/4">
            <Skeleton variant="rounded" width={'90%'} height={'50%'} />
          </div>
          <div className="h-full w-1/4">
            <Skeleton variant="rounded" width={'90%'} height={'50%'} />
          </div>
          <div className="h-full w-1/4">
            <Skeleton variant="rounded" width={'90%'} height={'50%'} />
          </div>
        </div>
      ))}
    </div>
  )
}