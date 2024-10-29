import Image from "next/image";

import { getCookingMethods } from "../../api/dietApi";
import { routes } from "@/store/local/routes.static";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import BackPage from "@/components/layout/BackPage";

export const dynamic = "force-dynamic";

// back: when cookie fix in for static
// export async function generateStaticParams() {
//   const cookingMethods: ApiResponse<CookingMethodsResponse[]> | undefined =
//     await getCookingMethods();

//   return cookingMethods.result.map((method: CookingMethodsResponse) => ({
//     method: method.title + "_" + method.id,
//   }));
// }

export default async function CookingMethodPage({
  params: { method },
}: {
  params: { method: string };
}) {
  const cookingMethods = await getCookingMethods();
  const [title, id] = method.split("_");
  const selectedMethod = cookingMethods.result.find(
    // back: it should also check the title (item.id.toString() === id && item.title === title)
    (item) => item.id.toString() === id,
  );

  if (!selectedMethod) {
    return console.log("error");
  }

  return (
    <main>
      <BackPage
        title={title}
        link={`${routes.diet.root}/${routes.diet.cookingMethods}`}
      />
      <div className="flex flex-col gap-4">
        <div className="w-full h-[30vh] relative">
          <Image
            src={selectedMethod.image}
            alt={selectedMethod.title}
            fill
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl">{selectedMethod.title}</h2>
          <div className="flex flex-col text-slate-400 text-xs">
            <span className="flex items-center gap-1">
              <span>زمان مورد نیاز برای مطالعه: ۱۰ دقیقه</span>
              <FaRegClock />
            </span>
            <span className="text-end flex items-center gap-1">
              <span>تاریخ انتشار: ۱۴۰۳/۶/۲۱</span>
              <MdOutlineTimer />
            </span>
          </div>
        </div>
        <div className="text-md text-gray-700 text-justify">
          {selectedMethod.description}{" "}
        </div>
      </div>
    </main>
  );
}
