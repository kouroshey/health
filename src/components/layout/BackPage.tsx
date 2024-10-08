"use client";

import { ReactElement } from "react";
import BackButton from "../ui/button/BackButton";

type backPageType = {
  title: string;
  icon?: ReactElement;
  link?: string;
};

const BackPage = ({ title, icon, link }: backPageType) => {
  return (
    <div className="w-full rounded-b-md px-4 relative md:hidden h-12 shadow-md mb-4 flex-center">
      <div className="absolute right-5 top-0 h-full">
        ‌<BackButton link={link} />
      </div>
      <h1 className="primary-h2">{title}</h1>
      {icon && <div className="absolute left-2 top-0">{icon}</div>}
    </div>
  );
};

export default BackPage;
