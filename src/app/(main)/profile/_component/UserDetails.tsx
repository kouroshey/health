"use client";

import Avatar from "@/components/ui/Avatar/Avatar";
import { Dispatch, SetStateAction } from "react";
import UserDetailsForm from "./UserDetailsForm";
import { RiEditFill } from "react-icons/ri";

interface UserDetailsProps {
  isEditMode: boolean;
  setIsEditMode: Dispatch<SetStateAction<boolean>>;
}

const UserDetails: React.FC<UserDetailsProps> = ({
  isEditMode,
  setIsEditMode,
}) => {
  return (
    <div className="w-full bg-slate-50 border border-gray-100 rounded-sm p-2 shadow-sm">
      {isEditMode ? (
        <UserDetailsForm
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
        />
      ) : (
        <div className="flex gap-4 w-full flex-col">
          <div className="flex flex-col items-center gap-4">
            <Avatar
              alt="آواتار"
              className="bg-center bg-cover border border-muted rounded-full shadow-sm"
              rounded
              width="70px"
              height="70px"
              src="/user-avatar-placeholder.png"
            />
          </div>
          <div className="flex flex-col gap-2 items-center w-full">
            <div className="flex gap-1 flex-col items-center">
              <p className="text-gray-500">نام: سمیه موسوی</p>
              <p className="text-gray-500">جنسیت: خانم</p>
            </div>
            <div
              onClick={() => setIsEditMode(true)}
              className="text-sm px-2 py-1 text-error-600 bg-error-50 rounded-sm gap-1 flex items-center font-normal md:text-lg"
            >
              <span className="w-max">ویرایش</span>
              <RiEditFill />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
