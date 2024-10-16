"use client";

import { useRouter } from "next/navigation";

import Button from "./button";
import { FaArrowRight } from "react-icons/fa6";

type Props = {
  link?: string;
};

const BackButton = ({ link }: Props) => {
  const router = useRouter();

  return (
    <Button
      variant={"text"}
      size={"sm"}
      onClick={() => (link ? router.push(link) : router.push("/"))}
      className="h-full inline pr-0"
      startIcon={<FaArrowRight size="25" color="gray" />}
    />
  );
};

export default BackButton;
