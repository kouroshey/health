"use client";

import UserDetails from "./UserDetails";
import { Subset } from "@/store/local/users.static";
import Link from "next/link";
import { IoIosAddCircle } from "react-icons/io";
import { IoBody, IoDocumentText } from "react-icons/io5";
import { MdHistory } from "react-icons/md";

const optionDetails = [
  {
    path: "/",
    name: "سوابق",
    knowAs: "personsList",
    icon: <MdHistory size={20} />,
  },
  {
    path: "/test",
    name: "افزودن وضعیت جدید",
    knownAs: "test",
    icon: <IoIosAddCircle color="primary" size={20} />,
  },
  {
    path: "/test",
    name: "گزارشات",
    knownAs: "test",
    icon: <IoDocumentText size={20} />,
  },
  {
    path: "/",
    name: "سوابق بدنی",
    knowAs: "personsList",
    icon: <IoBody size={20} />,
  },
];

const SubUserDashboard = (user: Subset) => {
  return (
    <div className="flex flex-col gap-2">
      <UserDetails {...user} />
      <ul className="flex flex-col gap-2">
        {optionDetails.map((option, index) => (
          <li
            key={index}
            className="text-gray-600 text-md md:text-lg bg-white hover:bg-slate-50 shadow-sm p-4 rounded-sm border border-gray-100"
          >
            <Link className="flex items-center gap-2" href={option.path}>
              <span className="text-primary">{option.icon}</span>
              <span>{option.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubUserDashboard;
