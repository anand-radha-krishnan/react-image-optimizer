import { useState, useEffect, useRef } from "react";

const useImageOptimization = (src, alt, width, height, srcSet, sizes) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the image is visible
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      // Use the srcSet if provided, otherwise fallback to a single image source
      setImgSrc(src || "");
    }
  }, [isIntersecting, src]);

  return {
    imgSrc,
    alt,
    width,
    height,
    srcSet,
    sizes,
    imgRef,
  };
};

export default useImageOptimization;
