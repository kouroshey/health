import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeedingBanners = () => {
  // back: change these dummy data with actual data
  const features = [
    { path: "/test", cover: "/icon512_maskable.png", name: "توصیه های غذایی" },
    {
      path: "/feeding",
      cover: "/icon512_maskable.png",
      name: "محاسبه کالری و برنامه غذایی",
    },
    {
      path: "/test",
      cover: "/icon512_maskable.png",
      name: "روش صحیح طبخ غذا",
    },
    { path: "/test", cover: "/icon512_maskable.png", name: "وعده های غذایی" },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-8">
        {features.map((feature) => (
          <Link key={feature.path} href={feature.path} className="w-full h-32">
            <div className="h-full w-full relative rounded-md">
              <Image
                src={feature.cover}
                alt={feature.name}
                fill={true}
                className="rounded-md"
              />
              <h3 className="absolute flex items-center justify-center text-center backdrop-blur-[1px] text-white h-full w-full text-md">
                {feature.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeedingBanners;
