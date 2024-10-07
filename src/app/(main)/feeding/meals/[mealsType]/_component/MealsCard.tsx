import Image from "next/image";

import "./mealsItemStyle.css";
import Button from "@/components/ui/button/button";
import { BiRepost, BiSolidDislike, BiSolidLike } from "react-icons/bi";

const MealsCard = () => {
  return (
    <div className="pt-3 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {/* // back: map() {} on the real data */}
      <div className="flex items-center gap-x-2 shadow-md pl-2 rounded-md">
        <div className="h-full w-2/6 relative">
          <Image
            src="/salad.png"
            alt="description of ..."
            className="rounded-r-md pb-[1px]"
            fill={true}
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-col justify-center w-2/3 py-2">
          <h4 className="text-sm md:text-md text-black">کره و عسل</h4>
          <p className="text-xs md:text-sm text-gray-400 MealsDescription">
            کره و عسل هم خوشمزه است و هم پرخاصیت. به همین علت است که برخی افراد
            حداقل یک روز در هفته وعده صبحانه خود را به کره و عسل اختصاص می دهند.
            به طور کلی مصرف کره به صورت هر روزه خوب نیست و بهتر است در برخی
            روزهای هفته، به جای کره، از پنیر یا برخی مواد خوراکی دیگر مثل تخم
            مرغ و... استفاده شود. با این حال چقدر خوب است که در اکثر مواقع مصرف
            کره، از عسل طبیعی استفاده کنید.
          </p>
          <div className="flex justify-between items-center pt-1">
            <div className="flex gap-x-2">
              <Button
                variant={"text"}
                size={"sm"}
                // onClick={() => (link ? router.push(link) : clickBack())}
                className="h-full w-fit items-start px-0 p-2"
                startIcon={<BiSolidLike />}
              />
              <Button
                variant={"text"}
                size={"sm"}
                // onClick={() => (link ? router.push(link) : clickBack())}
                className="h-full w-fit items-start px-0 p-2"
                startIcon={<BiSolidDislike />}
              />
              <Button
                variant={"text"}
                size={"sm"}
                // onClick={() => (link ? router.push(link) : clickBack())}
                className="h-full text-black w-fit items-start px-0 p-2"
                startIcon={<BiRepost />}
              />
            </div>
            <Button
              variant={"text"}
              size={"sm"}
              className="text-xs text-black px-0"
            >
              جزییات بیشتر
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-2 shadow-md pl-2 rounded-md">
        <div className="h-full w-2/6 relative">
          <Image
            src="/berger.png"
            alt="description of ..."
            className="rounded-r-md pb-[1px]"
            fill={true}
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-col justify-center w-2/3 py-2">
          <h4 className="text-sm md:text-md text-black">کره و عسل</h4>
          <p className="text-xs md:text-sm text-gray-400 MealsDescription">
            کره و عسل هم خوشمزه است و هم پرخاصیت. به همین علت است که برخی افراد
            حداقل یک روز در هفته وعده صبحانه خود را به کره و عسل اختصاص می دهند.
            به طور کلی مصرف کره به صورت هر روزه خوب نیست و بهتر است در برخی
            روزهای هفته، به جای کره، از پنیر یا برخی مواد خوراکی دیگر مثل تخم
            مرغ و... استفاده شود. با این حال چقدر خوب است که در اکثر مواقع مصرف
            کره، از عسل طبیعی استفاده کنید.
          </p>
          <div className="flex justify-between items-center pt-1">
            <div className="flex gap-x-2">
              <Button
                variant={"text"}
                size={"sm"}
                // onClick={() => (link ? router.push(link) : clickBack())}
                className="h-full w-fit items-start px-0 p-2"
                startIcon={<BiSolidLike />}
              />
              <Button
                variant={"text"}
                size={"sm"}
                // onClick={() => (link ? router.push(link) : clickBack())}
                className="h-full w-fit items-start px-0 p-2"
                startIcon={<BiSolidDislike />}
              />
              <Button
                variant={"text"}
                size={"sm"}
                // onClick={() => (link ? router.push(link) : clickBack())}
                className="h-full text-black w-fit items-start px-0 p-2"
                startIcon={<BiRepost />}
              />
            </div>
            <Button
              variant={"text"}
              size={"sm"}
              className="text-xs text-black px-0"
            >
              جزییات بیشتر
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-2 shadow-md pl-2 rounded-md">
        <div className="h-full w-2/6 relative">
          <Image
            src="/smoothie.png"
            alt="description of ..."
            className="rounded-r-md pb-[1px]"
            fill={true}
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-col justify-center w-2/3 py-2">
          <h4 className="text-sm md:text-md text-black">کره و عسل</h4>
          <p className="text-xs md:text-sm text-gray-400 MealsDescription">
            کره و عسل هم خوشمزه است و هم پرخاصیت. به همین علت است که برخی افراد
            حداقل یک روز در هفته وعده صبحانه خود را به کره و عسل اختصاص می دهند.
            به طور کلی مصرف کره به صورت هر روزه خوب نیست و بهتر است در برخی
            روزهای هفته، به جای کره، از پنیر یا برخی مواد خوراکی دیگر مثل تخم
            مرغ و... استفاده شود. با این حال چقدر خوب است که در اکثر مواقع مصرف
            کره، از عسل طبیعی استفاده کنید.
          </p>
          <div className="flex justify-between items-center pt-1">
            <div className="flex gap-x-2">
              <Button
                variant={"text"}
                size={"sm"}
                // onClick={() => (link ? router.push(link) : clickBack())}
                className="h-full w-fit items-start px-0 p-2"
                startIcon={<BiSolidLike />}
              />
              <Button
                variant={"text"}
                size={"sm"}
                // onClick={() => (link ? router.push(link) : clickBack())}
                className="h-full w-fit items-start px-0 p-2"
                startIcon={<BiSolidDislike />}
              />
              <Button
                variant={"text"}
                size={"sm"}
                // onClick={() => (link ? router.push(link) : clickBack())}
                className="h-full text-black w-fit items-start px-0 p-2"
                startIcon={<BiRepost />}
              />
            </div>
            <Button
              variant={"text"}
              size={"sm"}
              className="text-xs text-black px-0"
            >
              جزییات بیشتر
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealsCard;
