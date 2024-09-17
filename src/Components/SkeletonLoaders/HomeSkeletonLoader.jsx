import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import { BrandSkeletonLoader, ProductSkeletonLoader } from './ShopLoaders'

export const BannerLoader = () => {
  return (
    <div className="w-full bg-white z-0 pb-10 relative">
      <div className="w-full h-[220px] md:h-[500px] bg-white pt-10">
        <Skeleton
          variant="rounded"
          animation="wave"
          width={'90%'}
          height={'80%'}
          className="mx-auto"
        />
        {/* <img src={bannerBottom} /> */}
        <div className=" w-full h-[45px] flex justify-between gap-2 md:gap-4 lg:gap-7 px-2 sm:px-5 md:px-6 lg:px-8 py-1 sm:py-2 md:py-5">
          <Skeleton
            variant="rounded"
            animation="wave"
            width={'90%'}
            height={100}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  )
}

export const HomeCategoriesLoader = () => {
  const cats = [1, 2, 3]
  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
      {cats?.map(() => (
        <div className="text-center">
          <Skeleton
            variant="rounded"
            animation="wave"
            width={400}
            height={520}
          />
        </div>
      ))}
    </div>
  )
}

export const HomeProductsLoader = () => {
  return (
    <div className="w-full text-center">
      <div className="mx-auto my-10">
        <Skeleton variant="text" className="mx-auto" height={70} width={200} />
        <Skeleton variant="text" className="mx-auto" height={20} width={220} />
      </div>
      <div className="w-[80%] mx-auto">
        <ProductSkeletonLoader items={4} />
        <Skeleton variant="text" className="mx-auto" height={70} width={250} />
        <BrandSkeletonLoader />
        <div className="flex flex-col md:flex-row h-auto gap-5 mt-10">
          <div className="h-[550px] w-1/2 flex flex-col gap-5">
            <Skeleton
              variant="rounded"
              animation="wave"
              height={'32%'}
              width={'full'}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              height={'32%'}
              width={'full'}
            />{' '}
            <Skeleton
              variant="rounded"
              animation="wave"
              height={'32%'}
              width={'full'}
            />
          </div>
          <div className="h-[550px] w-1/2">
            <Skeleton
              variant="rounded"
              animation="wave"
              height={'100%'}
              width={'full'}
            />
          </div>
        </div>
        <div className="w-full h-[300px] my-10">
          <Skeleton variant="rounded" height={'100%'} width={'full'} />
        </div>
      </div>
    </div>
  )
}
