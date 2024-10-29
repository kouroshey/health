import Button from "@/components/ui/button/button";
import { bmiCalculator } from "@/lib/helpers";
import { dateToJalali } from "@/lib/helpers/jalali";
import { statuses } from "@/store/local/home.static";
import { Subset } from "@/store/local/users.static";
import { BiSolidError } from "react-icons/bi";
import { FaRegHeart, FaUser, FaWeightScale } from "react-icons/fa6";
import { IoBody } from "react-icons/io5";
import { MdOutlineUpdate } from "react-icons/md";
import { RxHeight } from "react-icons/rx";

export default function UserDetails(user: Subset) {
  const userBMI = () => {
    if (Number(user.weight) && Number(user.height)) {
      return bmiCalculator(Number(user.weight), Number(user.height));
    }
  };
  return (
    <div className="rounded-md px-3 py-6 h-full flex justify-between bg-purple-100 text-purple-900">
      <div className="flex flex-col justify-between text-sm">
        <p className="flex gap-1 items-center">
          <span className="flex gap-1 items-center">
            <FaUser />
            <span className="font-bold">نام کاربر: </span>
          </span>
          <span>{`${user.name} ${user.lastname}`}</span>
        </p>
        <p className="flex gap-1 items-center">
          <span className="flex gap-1 items-center">
            <RxHeight />
            <span className="font-bold">قد: </span>
          </span>
          <span>{user.height} سانتیمتر</span>
        </p>
        <p className="flex gap-1 items-center">
          <span className="flex gap-1 items-center">
            <FaWeightScale />
            <span className="font-bold">وزن: </span>
          </span>
          <span>{user.weight} کیلوگرم</span>
        </p>
        <p className="flex gap-1 items-center">
          <span className="flex gap-1 items-center">
            <IoBody />
            <span className="font-bold">BMI: </span>
          </span>
          <span>{userBMI() || "-"}</span>
        </p>
        <p className="flex gap-1 items-center">
          <span className="flex gap-1 items-center">
            <MdOutlineUpdate />
            <span className="font-bold">بروزرسانی در: </span>
          </span>
          <span>{dateToJalali(user.updatedAt)}</span>
        </p>
      </div>
      <div className="flex text-sm flex-col gap-2 items-center">
        <div className="flex gap-1 flex-col items-center">
          <span className="font-bold">کالری</span>
          <Button className="text-white" size="sm" color="primary">
            168.000
          </Button>
        </div>

        <div className="flex gap-1 flex-col items-center">
          <span className="font-bold">وضعیت قد</span>
          <Button
            className="text-white"
            size="sm"
            color={
              statuses.height.normal.color as
                | "primary"
                | "secondary"
                | "warning"
            }
            endIcon={<FaRegHeart />}
          >
            {statuses.height.normal.label}
          </Button>
        </div>

        <div className="flex gap-1 flex-col items-center">
          <span className="font-bold">وضعیت وزن</span>
          <Button
            className="text-white"
            size="sm"
            color="error"
            endIcon={<BiSolidError />}
          >
            اضافه وزن
          </Button>
        </div>
      </div>
    </div>
  );
}
