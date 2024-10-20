import Image, { StaticImageData } from "next/image";
import { RiEditFill } from "react-icons/ri";
import SaladImg from "public/salad.png";
import { FaTrash } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import { ReactElement } from "react";

export interface MealItem {
  img: StaticImageData;
  title: string;
  weight: string;
  calories: string;
}

export interface MealDetailsProps {
  label: string;
  icon: ReactElement;
  items: MealItem[];
}

const MealDetails: React.FC<MealDetailsProps> = ({ items, label, icon }) => {
  return (
    <div>
      <p className="text-md mb-3 flex gap-1 items-center after:absolute after:rounded-md after:right-0 after:w-full w-max after:h-[1px] after:bottom-0 after:bg-primary-500 relative">
        <span>{icon}</span>
        {label}
      </p>
      <div className="flex flex-col gap-2 items-center w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center px-2 gap-x-2 border border-gray-100 bg-slate-50 pl-2 rounded-md h-full w-full"
          >
            <div className="h-24 w-2/6 relative">
              <Image
                src={SaladImg}
                alt={item.title}
                className="rounded-r-md pb-[1px] object-contain"
                fill={true}
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="h-full w-full relative rounded-md text-gray-600 font-bold border-gray-100 py-4 px-2 hover:shadow-sm hover:text-primary flex justify-center">
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between">
                  <span className="text-sm md:text-md text-gray-600">
                    {item.title}
                  </span>
                  <span className="text-sm md:text-md text-gray-500 font-normal">
                    {item.calories} کالری
                  </span>
                </div>
                <p className="text-xs text-gray-400 font-light">
                  {item.weight} گرم
                </p>
                <div className="flex gap-2 justify-end">
                  <div className="text-[10px] px-2 py-1 text-purple-600 bg-purple-50 rounded-sm gap-1 flex items-center font-normal md:text-lg justify-self-end self-end">
                    <span className="w-max">ویرایش</span>
                    <RiEditFill />
                  </div>
                  <div className="text-[10px] px-2 py-1 text-error-600 bg-error-50 rounded-sm gap-1 flex items-center font-normal md:text-lg justify-self-end self-end">
                    <span className="w-max">حذف</span>
                    <FaTrash />
                  </div>
                  <div className="text-[10px] px-2 py-1 text-green-600 bg-green-50 rounded-sm gap-1 flex items-center font-normal md:text-lg justify-self-end self-end">
                    <span className="w-max">جایگزین</span>
                    <BiRepost />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealDetails;
