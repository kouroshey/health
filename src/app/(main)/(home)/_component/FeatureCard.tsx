import { HomeFeature } from "@/store/local/home.static";

import { IoDocumentText } from "react-icons/io5";
import { IoFastFood } from "react-icons/io5";
import { BiDumbbell } from "react-icons/bi";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaBed } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const iconsArray: Record<string, JSX.Element> = {
  reports: <IoDocumentText />,
  diet: <IoFastFood />,
  activity: <BiDumbbell />,
  health: <TbActivityHeartbeat />,
  sleep: <FaBed />,
  notifications: <FaBell />,
};

const FeatureCard: React.FC<HomeFeature> = ({ icon, name, bgColor }) => {
  return (
    <div className="card flex justify-center items-center flex-col gap-1">
      <div
        className={`icon w-max border border-gray-200 rounded-md shadow-sm text-white p-6 text-xl flex-center ${bgColor}`}
      >
        {iconsArray[icon]}
      </div>
      <div className="font-normal text-gray-500">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default FeatureCard;
