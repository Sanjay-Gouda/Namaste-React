import React from "react";
import { ShimmerThumbnail } from "react-shimmer-effects";

export const Shimmer = () => {
  return (
    <>
      {Array(10)
        .fill("")
        .map((card, ind) => {
          return (
            <ShimmerThumbnail key={ind} height={350} width={300} rounded />
          );
        })}
    </>
  );
};
