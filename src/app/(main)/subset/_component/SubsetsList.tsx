import type { Subset } from "@/store/local/users.static";
import Image from "next/image";
import Link from "next/link";

const SubsetsList = ({ subList }: { subList: Subset[] }) => {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        {subList.map((sub) => {
          return (
            <Link
              key={sub.id}
              className="flex items-center border rounded-lg shadow-md gap-x-5 w-full px-3 py-4"
              href={`/subset/dashboard/${sub.id}`}
            >
              <div className="rounded-full border w-[75px] h-[75px] relative">
                <Image
                  src={"/avatars/boy-black.svg"}
                  alt={`پروفایل ${sub.name}`}
                  fill
                  className="rounded-full"
                />
              </div>
              <div>
                <h5 className="text-lg text-gray-600">
                  {sub.name}
                  <span> {sub.familyName}</span>
                </h5>
                <div className="flex gap-x-3 mt-2">
                  <h5 className="text-md text-gray-500">وزن: {sub.weight}</h5>
                  <h5 className="text-md text-gray-500">قد: {sub.height}</h5>
                  <h5 className="text-md text-gray-500 text-pretty">
                    وضعیت سلامت : {sub.healthStatus}
                  </h5>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default SubsetsList;
