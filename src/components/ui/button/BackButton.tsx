"use client";

import { useRouter } from "next/navigation";

import { BsArrowRight } from "react-icons/bs";

import Button from "./button";

type Props = {
  link?: string;
};

const BackButton = ({ link }: Props) => {
  const router = useRouter();

  function clickBack() {
    router.back();
    router.push("/home");
  }

  return (
    <Button
      variant={"text"}
      size={"sm"}
      onClick={() => (link ? router.push(link) : clickBack())}
      className="h-full inline pr-0"
      startIcon={<BsArrowRight className="text-lg text-black" />}
    />
  );
};

export default BackButton;
