import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تایید شماره موبایل",
  description: "صفحه تایید شماره موبایل",
};

const VerifyLoginLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default VerifyLoginLayout;
