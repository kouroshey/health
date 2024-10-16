import { routes } from "@/store/local/routes.static";
import Link from "next/link";
import React from "react";
import { FaUsers } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import { IoDocumentText, IoExit } from "react-icons/io5";

const optionDetails = [
  {
    path: routes.subset.root,
    name: "لیست کاربران",
    knowAs: "personsList",
    icon: <FaUsers size={20} />,
  },
  {
    path: routes.subset.add,
    name: "افزودن کاربر جدید",
    knownAs: "test",
    icon: <IoIosAddCircle color="primary" size={20} />,
  },
  {
    path: "/stats",
    name: "گزارشات",
    knownAs: "test",
    icon: <IoDocumentText size={20} />,
  },
  {
    path: "/logout",
    name: "خروج",
    knowAs: "personsList",
    icon: <IoExit size={20} />,
  },
];

const ProfileOptions = () => {
  return (
    <ul className="flex flex-col gap-2">
      {optionDetails.map((option, index) => (
        <li
          key={index}
          className="text-gray-600 text-md md:text-lg bg-slate-50 hover:bg-slate-100 shadow-sm p-4 rounded-sm border border-gray-100"
        >
          <Link className="flex items-center gap-2  " href={option.path}>
            <span className="text-primary">{option.icon}</span>
            <span>{option.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProfileOptions;
