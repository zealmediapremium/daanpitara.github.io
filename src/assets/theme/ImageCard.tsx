import React, { useState } from "react";
import { motion } from "framer-motion";

interface SmartImageProps {
  src: string;              // Primary image URL or route
  altImage: string;         // Fallback image URL
  altText: string;          // Alt text for accessibility
  width?: number | string;  // Optional width (px, %, etc.)
  height?: number | string; // Optional height (px, %, etc.)
  className?: string;       // Optional Tailwind classes
}

const SmartImage: React.FC<SmartImageProps> = ({
  src,
  altImage,
  altText,
  width,
  height,
  className = "",
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    if (currentSrc !== altImage) setCurrentSrc(altImage);
  };

  return (
    <motion.img
      src={currentSrc}
      alt={altText}
      onError={handleError}
      onLoad={() => setIsLoaded(true)}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.98 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`object-cover rounded-xl transition-transform duration-300 hover:scale-[1.04] ${className}`}
      style={{
        width: width ?? "auto",
        height: height ?? "auto",
      }}
    />
  );
};

export default SmartImage;
