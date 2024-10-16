"use client";

import { useState } from "react";
import ProfileOptions from "../user-details/_components/ProfileOptions";
import UserDetails from "./UserDetails";

const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <UserDetails isEditMode={isEditMode} setIsEditMode={setIsEditMode} />
      {!isEditMode && <ProfileOptions />}
    </div>
  );
};

export default Profile;
