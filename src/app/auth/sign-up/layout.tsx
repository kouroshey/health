import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ثبت نام",
  description: "صفحه‌ی ثبت نام",
};

const SignUpLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default SignUpLayout;
