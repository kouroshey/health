import Avatar from "@/components/ui/Avatar/Avatar";
import { dateToJalali } from "@/lib/helpers/jalali";
import type { Subset } from "@/store/local/users.static";
import Link from "next/link";

const SubsetsList = ({ subList }: { subList: Subset[] }) => {
  return (
    <main className="bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        {subList.map((sub) => {
          return (
            <Link
              key={sub.id}
              className="flex items-center border border-gray-100 bg-white rounded-md shadow-sm gap-x-5 w-full px-3 py-4"
              href={`/subset/dashboard/${sub.id}`}
            >
              <Avatar
                src={"/avatars/boy-black.svg"}
                alt={`پروفایل ${sub.name}`}
                rounded
              />
              <div className="w-full">
                <div className="flex justify-between w-full">
                  <h5 className="text-md text-gray-600">
                    {sub.name}
                    <span> {sub.lastname}</span>
                  </h5>
                </div>
                <div className="flex gap-x-3 mt-2 text-gray-500 text-sm">
                  <p className="w-max">وزن: {sub.weight} کیلوگرم</p>
                  <p className="w-max">قد: {sub.height} سانتیمتر</p>
                </div>
                <p className="text-pretty mt-2 text-xs text-primary flex gap-2 justify-end">
                  <span>آخرین آپدیت:</span>
                  <span>{dateToJalali(sub.updatedAt)}</span>
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default SubsetsList;
