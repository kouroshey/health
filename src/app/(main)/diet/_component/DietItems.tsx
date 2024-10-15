import Link from "next/link";

import { PiCookingPotBold } from "react-icons/pi";
import { FaPlateWheat, FaWeightScale } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { routes } from "@/store/local/routes.static";

export const dietItems = [
  {
    path: `${routes.diet.root}/${routes.diet.supplementaryAdvice}`,
    cover: "/slide-1.webp",
    name: "توصیه های غذایی",
    description: "راهنمایی‌های علمی و به‌روز برای داشتن تغذیه‌ای سالم‌تر.",
    icon: <FaPlateWheat />,
  },
  {
    path: "#",
    cover: "/slide-2.webp",
    name: "محاسبه کالری و برنامه غذایی",
    description:
      "ابزاری برای تنظیم برنامه غذایی مناسب بر اساس نیاز کالری روزانه شما.",
    icon: <FaWeightScale />,
  },
  {
    path: `${routes.diet.root}/${routes.diet.cookingMethods}`,
    cover: "/slide-3.webp",
    name: "روش صحیح طبخ غذا",
    description: "روش‌های بهینه و سالم برای پخت غذاهای متنوع و مغذی.",
    icon: <PiCookingPotBold />,
  },
];

const DietItems = () => {
  return (
    <div className="w-full md:w-min">
      <div className="flex flex-col gap-4">
        {dietItems.map((item, index) => (
          <Link key={index} href={item.path}>
            <div className="h-full w-full relative rounded-md bg-slate-50 border text-gray-500 border-gray-100 py-4 px-2 hover:shadow-sm hover:text-primary flex justify-center">
              <div className="flex flex-col gap-2 w-full">
                <div className="w-full text-sm md:text-md flex items-center gap-2">
                  <span className="text-md md:text-lg">{item.icon}</span>
                  <h3>{item.name}</h3>
                </div>
                <p className="text-xs text-gray-400">{item.description}</p>
              </div>
              <span className="text-md md:text-lg justify-self-end self-center">
                <IoIosArrowBack />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DietItems;
