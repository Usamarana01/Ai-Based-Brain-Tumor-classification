import { Skeleton } from '@mui/material'

export const FilterSkeletonLoader = ({ lines = 4 }) => {
  const elements = []
  for (let i = 0; i < lines; i++) {
    elements.push(
      <Skeleton variant="text" height={50} width={'80%'} className="mx-auto" />
    )
  }

  return <>{elements}</>
}

export const BrandSkeletonLoader = ({ lines = 4 }) => {
  const elements = []
  for (let i = 0; i < lines; i++) {
    elements.push(
      <div className="w-[24%] flex flex-col gap-3">
        <Skeleton
          variant="rounded"
          height={60}
          animation="wave"
          width={'80%'}
          className="mx-auto"
        />
        <Skeleton
          variant="rounded"
          height={10}
          animation="wave"
          width={'50%'}
          className="mx-auto"
        />
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-row my-5 gap-2">{elements}</div>
    </div>
  )
}

export const ProductSkeletonLoader = ({ items = 10 }) => {
  const elements = []
  for (let i = 0; i < items; i++) {
    elements.push(
      <div className="mx-0 md:mx-2 my-2 md:w-[250px] h-[330px] rounded-lg bg-white flex flex-col items-center cursor-pointer flex-grow">
        {/* Product image skeleton */}
        <div className="w-full p-2">
          <Skeleton
            variant="rectangular"
            animation="wave"
            width="100%"
            height="132px"
            className="w-full object-contain rounded-lg"
          />
        </div>

        {/* Product details skeleton */}
        <div className="my-10 flex-grow flex flex-col items-center gap-1 w-full">
          <Skeleton
            variant="text"
            animation="wave"
            width="50%"
            height="20px"
            className="font-bold my-1"
          />

          <Skeleton
            variant="text"
            animation="wave"
            width="80%"
            height="20px"
            className="font-bold my-1 text-center"
          />

          <Skeleton
            variant="text"
            animation="wave"
            width="60%"
            height="20px"
            className="text-[#D6D6D6] font-bold my-1 line-through"
          />

          <Skeleton
            variant="text"
            animation="wave"
            width="50%"
            height="20px"
            className="text-tertiary font-bold my-1"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="flex w-full justify-center flex-wrap items-center mx-auto">
      {elements}
    </div>
  )
}
