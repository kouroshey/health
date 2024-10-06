import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { HTMLAttributes } from "react";

type PaginationLinkType = {
  isActive?: boolean;
  activeClassName?: string;
  className?: string;
} & LinkProps &
  HTMLAttributes<HTMLAnchorElement>;

const PaginationLink = ({
  isActive,
  activeClassName,
  className,
  ...props
}: PaginationLinkType) => {
  return (
    <Link className={cn(isActive && activeClassName, className)} {...props} />
  );
};

export default PaginationLink;
