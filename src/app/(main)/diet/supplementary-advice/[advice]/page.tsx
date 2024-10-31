import Image from "next/image";

import { getSupplementationAdvise } from "../../_api/dietApi";
import { routes } from "@/store/local/routes.static";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import BackPage from "@/components/layout/BackPage";

export const dynamic = "force-dynamic";

// back: when cookie fix in for static
// export async function generateStaticParams() {
//   const supplementAdvice: ApiResponse<SupplementAdviceResponse[]> | undefined =
//     await getSupplementationAdvice();

//   return supplementAdvice.result.map((advice: SupplementationAdviceResponse) => ({
//     advice: advice.title + "_" + advice.id,
//   }));
// }

export default async function SupplementaryAdvicePage({
  params: { advice },
}: {
  params: { advice: string };
}) {
  const supplementAdvice = await getSupplementationAdvise();
  const [title, id] = advice.split("_");
  const selectedAdvice = supplementAdvice.result.find(
    // back: it should also check the title (item.id.toString() === id && item.title === title)
    (item) => item.id.toString() === id,
  );

  if (!selectedAdvice) {
    return console.log("error");
  }

  return (
    <main>
      <BackPage
        title={title}
        link={`${routes.diet.root}/${routes.diet.supplementaryAdvice}`}
      />
      <div className="flex flex-col gap-4">
        <div className="w-full h-[30vh] relative">
          <Image
            src={selectedAdvice.image}
            alt={selectedAdvice.title}
            fill
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl">{selectedAdvice.title}</h2>
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
          {selectedAdvice.description}
        </div>
      </div>
    </main>
  );
}
