import React from "react";
import { ShimmerThumbnail } from "react-shimmer-effects";

export const Shimmer = ({ LengthOfArray }) => {
  return (
    <>
      {Array(LengthOfArray)
        .fill("")
        .map((card, ind) => {
          return (
            <ShimmerThumbnail key={ind} height={280} width={280} rounded />
          );
        })}
    </>
  );
};
