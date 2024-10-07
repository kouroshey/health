import Image from "next/image";
import Link from "next/link";

import feedingBannersData from "@/store/local/feedingBannersData.json";

const FeedingBanners = () => {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-8">
        {feedingBannersData.map((item) => (
          <Link key={item.path} href={item.path} className="w-full h-32">
            <div className="h-full w-full relative rounded-md">
              <Image
                src={item.cover}
                alt={item.name}
                fill={true}
                className="rounded-md"
              />
              <h3 className="absolute flex items-center justify-center text-center backdrop-blur-[1px] text-white h-full w-full text-sm md:text-md">
                {item.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeedingBanners;
