"use client";

import { useRouter } from "next/navigation";

import { BsArrowRight } from "react-icons/bs";

import { Button } from "./ui/button";

type Props = {
  link?: string;
};

const BackPage = ({ link }: Props) => {
  const router = useRouter();

  function clickBack() {
    router.back();
    router.push("/home");
  }

  return (
    <Button
      size="icon"
      variant="ghost"
      className="h-full"
      onClick={() => (link ? router.push(link) : clickBack())}
    >
      <BsArrowRight className="text-lg text-black" />
    </Button>
  );
};

export default BackPage;
