import Button from "@/components/ui/button/button";
import { statuses } from "@/store/local/home.static";
import { BiSolidError } from "react-icons/bi";
import { FaRegHeart, FaUser, FaWeightScale } from "react-icons/fa6";
import { IoBody } from "react-icons/io5";
import { MdOutlineUpdate } from "react-icons/md";
import { RxHeight } from "react-icons/rx";

export default function UserDetails() {
  return (
    <div className="rounded-md px-3 py-6 h-full flex justify-between bg-purple-100 text-purple-900">
      <div className="flex flex-col justify-between text-sm">
        <p className="flex gap-1 items-center">
          <span className="flex gap-1 items-center">
            <FaUser />
            <span className="font-bold">نام: </span>
          </span>
          <span>سعیده موسوی</span>
        </p>
        <p className="flex gap-1 items-center">
          <span className="flex gap-1 items-center">
            <RxHeight />
            <span className="font-bold">قد: </span>
          </span>
          <span>۱۶۸ سانتیمتر</span>
        </p>
        <p className="flex gap-1 items-center">
          <span className="flex gap-1 items-center">
            <FaWeightScale />
            <span className="font-bold">وزن: </span>
          </span>
          <span>۶۷ کیلوگرم</span>
        </p>
        <p className="flex gap-1 items-center">
          <span className="flex gap-1 items-center">
            <IoBody />
            <span className="font-bold">BMI: </span>
          </span>
          <span>۴۲</span>
        </p>
        <p className="flex gap-1 items-center">
          <span className="flex gap-1 items-center">
            <MdOutlineUpdate />
            <span className="font-bold">بروزرسانی: </span>
          </span>
          <span>۱۴۰۳/۱۲/۵</span>
        </p>
      </div>
      <div className="flex text-sm flex-col gap-2 items-center">
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
        <div className="flex gap-1 flex-col items-center">
          <span className="font-bold">کالری</span>
          <Button className="text-white" size="sm" color="primary">
            ۱۶۸,۰۰۰
          </Button>
        </div>
      </div>
    </div>
  );
}
