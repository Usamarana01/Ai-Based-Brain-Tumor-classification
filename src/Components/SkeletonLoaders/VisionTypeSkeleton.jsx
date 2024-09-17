import { Skeleton } from "@mui/material";

const VisionTypeSkeleton = ({ items = 3 }) => {
  const elements = [];
  for (let i = 0; i < items; i++) {
    elements.push(
      <div className="flex flex-col xl:flex-row gap-4">
        <div className="relative bg-white overflow-hidden min-w-[240px] h-[250px]">
          {/* Skeleton for the image */}
          <Skeleton
            variant="rectangular"
            animation="wave"
            width="100%"
            height="100%"
            className="w-full h-full object-cover"
          />

          {/* Skeleton for the bottom section */}
          <div className="absolute bottom-0 left-0 w-full bg-primary text-white text-lg font-semibold px-4 py-2 flex justify-between items-center">
            {/* Placeholder for the title */}
            <Skeleton
              variant="text"
              animation="wave"
              width="50%"
              height="20px"
            />

            {/* Placeholder for the tag */}
            <Skeleton
              variant="text"
              animation="wave"
              width="80px"
              height="20px"
              className="bg-white text-primary rounded-full px-3 py-1"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full justify-center flex-wrap items-center mx-auto">
      {elements}
    </div>
  );
};

export default VisionTypeSkeleton;
