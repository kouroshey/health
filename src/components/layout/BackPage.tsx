import { ReactElement } from "react";
import BackButton from "../ui/button/BackButton";

type backPageType = {
  title: string;
  icon?: ReactElement;
  link?: string;
};

const BackPage = ({ title, icon, link }: backPageType) => {
  return (
    <div className="w-full relative md:hidden">
      <div className="absolute right-0 top-0 h-full">
        ‌<BackButton link={link} />
      </div>
      <h1 className="w-full m-auto text-lg text-center text-primary">
        {title}
      </h1>
      {icon && <div className="absolute left-0 top-0">{icon}</div>}
    </div>
  );
};

export default BackPage;
