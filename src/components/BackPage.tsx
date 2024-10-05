"use client";

import { useRouter } from "next/navigation";

import { BsArrowRight } from "react-icons/bs";

// import Button from "./ui/button/button";

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
    // back: change this button with custom component that made for icons
    <button
      onClick={() => (link ? router.push(link) : clickBack())}
      className="h-full absolute"
    >
      <BsArrowRight className="text-lg text-black" />
    </button>
  );
};

export default BackPage;
