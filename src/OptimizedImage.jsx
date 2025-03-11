import React from "react";
import useImageOptimization from "./useImageOptimization";

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  srcSet,
  sizes,
  fallbackSrc,
}) => {
  const { imgSrc, imgRef } = useImageOptimization(
    src,
    alt,
    width,
    height,
    srcSet,
    sizes
  );

  return (
    <img
      ref={imgRef}
      src={imgSrc || fallbackSrc} // Fallback in case image fails to load
      alt={alt}
      width={width}
      height={height}
      srcSet={srcSet}
      sizes={sizes}
      loading="lazy" // Native lazy loading for browsers that support it
      style={{ width: "100%", height: "auto" }}
    />
  );
};

export default OptimizedImage;
