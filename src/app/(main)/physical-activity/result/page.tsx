import BackPage from "@/components/layout/BackPage";
import { routes } from "@/store/local/routes.static";
import Image from "next/image";
import Link from "next/link";
import physicalActivityBg from "public/physical-activity-bg.jpg";
import ResaultCard from "./_component/ResultCard";

const Result = () => {
  return (
    <main>
      <BackPage
        title="تحلیل اولیه آزمون"
        link={`${routes.physicalActivity.root}`}
      />
      <div className="w-full h-[35vh] max-h-[40vh] relative mt-5  rounded-sm">
        <Image
          src={physicalActivityBg}
          alt="mental-health-bg"
          fill
          objectFit="cover"
          className="rounded-sm"
        />
      </div>
      <p className="text-gray-600 text-md text-justify py-5">
        نتیجه آزمون شما آماده است! خسته نباشید! <br /> حالا که آزمون رو با
        موفقیت به پایان رسوندید، وقتشه که یک قدم به سوی بهبود سبک زندگی خودتون
        بردارید. با کلیک روی توصیه‌های مربوط به افزایش قد یا روش‌های کاهش وزن،
        می‌تونید اطلاعات و راهکارهای مفیدی دریافت کنید که به شما کمک می‌کنن تا
        به اهدافتون نزدیک‌تر بشید. <br /> قدم‌های کوچیک، تغییرات بزرگ به همراه
        دارن! با انتخاب هر یک از این توصیه‌ها، مسیر جدیدی برای بهبود سلامت و
        توانایی‌های خودتون باز می‌کنید. به یاد داشته باشید که این مسیر، یک سفره
        و با هر انتخابی که انجام می‌دید، به مقصد نزدیک‌تر می‌شید. <br /> حالا
        نوبت شماست! یکی از گزینه‌ها رو انتخاب کنید و برای آینده‌ای بهتر گام
        بردارید!
      </p>
      <div className="flex justify-between">
        <Link
          href={`${routes.diet.root}/${routes.diet.supplementaryAdvice}`}
          className="w-full h-24"
        >
          <ResaultCard
            path={`${routes.diet.root}/${routes.diet.supplementaryAdvice}`}
            icon={"FaWeightScale"}
            name="روش‌های کاهش استرس"
            bgColor="bg-green-500"
          />
        </Link>
        <Link
          href={`${routes.diet.root}/${routes.diet.supplementaryAdvice}`}
          className="w-full h-24"
        >
          <ResaultCard
            path={`${routes.diet.root}/${routes.diet.supplementaryAdvice}`}
            icon={"FaArrowUpLong"}
            name="توصیه‌های شاد بودن"
            bgColor="bg-indigo-300"
          />
        </Link>
      </div>
    </main>
  );
};

export default Result;
