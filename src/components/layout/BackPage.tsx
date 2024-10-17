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
    <div className="w-full rounded-b-sm px-4 bg-slate-50 relative md:hidden shadow-sm border border-t-0 border-gray-200 mb-4 flex-center">
      <div className="absolute right-5 top-0 h-full">
        ‌<BackButton link={link} />
      </div>
      <h1 className="primary-h2 py-3">{title}</h1>
      {icon && <div className="absolute left-2 top-0">{icon}</div>}
    </div>
  );
};

export default BackPage;
