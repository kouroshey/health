"use client";

import React, { useState } from "react";
import AvatarSkeleton from "./SkeletonAvatar";
import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
  rounded: boolean;
  bgColor?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  className,
  width = "45px",
  height = "45px",
  rounded = false,
  bgColor,
}) => {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width,
        height,
        backgroundColor: bgColor,
      }}
    >
      {!isLoaded && <AvatarSkeleton />}
      <Image
        src={src}
        alt={alt}
        width={200}
        height={200}
        onLoad={() => setIsLoaded(true)}
        style={{
          display: isLoaded ? "block" : "none",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: rounded ? "50%" : "5px",
        }}
      />
    </div>
  );
};

export default Avatar;
