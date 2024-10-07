import Image from "next/image";
import Link from "next/link";

import homeBannersData from "@/store/local/homeBannersData.json";

const FeatureBanners = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-8">
      {homeBannersData.map((item) => (
        <Link key={item.path} href={item.path} className="w-full h-32">
          <div className="h-full w-full relative rounded-md">
            <Image
              src={item.cover}
              alt={item.name}
              fill={true}
              className="rounded-md"
            />
            <h3 className="absolute flex items-center justify-center backdrop-blur-[1px] text-white h-full w-full text-md">
              {item.name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeatureBanners;
