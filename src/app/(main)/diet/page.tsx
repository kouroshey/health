import BackPage from "@/components/layout/BackPage";
import DietItems from "./_component/DietItems";
import Image from "next/image";
import DietBg from "public/diet-background.png";

const page = () => {
  return (
    <div>
      <BackPage title="تغذیه" link="/" />
      <DietItems />
      <div className="w-full h-[50vh] relative mt-5">
        <Image src={DietBg} alt="diet-bg" fill objectFit="contain" />
      </div>
    </div>
  );
};

export default page;
