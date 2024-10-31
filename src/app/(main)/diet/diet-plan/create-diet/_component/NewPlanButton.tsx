"use client";

import Button from "@/components/ui/button/button";
import { routes } from "@/store/local/routes.static";
import { useRouter } from "next/navigation";
import { CgAdd } from "react-icons/cg";

const NewPlanButton = ({
  className = "rounded-full fixed bottom-20 right-4 py-6 px-4",
}: {
  className?: string;
}) => {
  const router = useRouter();
  return (
    <Button
      variant="contained"
      size="md"
      className={className}
      onClick={() =>
        router.push(
          `${routes.diet.root}${routes.diet.dietPlan}${routes.diet.createDiet}`,
        )
      }
    >
      برنامه جدید
      <CgAdd />
    </Button>
  );
};

export default NewPlanButton;
