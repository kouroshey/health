"use client";

import Button from "@/components/ui/button/button";
import { routes } from "@/store/local/routes.static";
import { useRouter } from "next/navigation";
import { CiSaveDown2 } from "react-icons/ci";
import { IoReturnDownBack, IoShareSocialSharp } from "react-icons/io5";

const DietButtons = () => {
  const router = useRouter();

  return (
    <div className="flex gap-2 justify-between py-4">
      <div className="flex gap-2">
        <Button
          className="text-white"
          size="sm"
          color="success"
          endIcon={<CiSaveDown2 />}
        >
          ذخیره
        </Button>
        <Button
          className="text-white"
          size="sm"
          color="error"
          endIcon={<IoReturnDownBack />}
          onClick={() => {
            router.push(`${routes.diet.root}/${routes.diet.dietPlan}`);
          }}
        >
          بازگشت
        </Button>
      </div>
      <Button
        size="sm"
        color="primary"
        className="mr-auto"
        endIcon={<IoShareSocialSharp />}
      />
    </div>
  );
};

export default DietButtons;
