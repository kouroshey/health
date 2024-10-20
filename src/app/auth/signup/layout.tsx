import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ثبت نام",
  description: "ثبت نام در ترنج",
};

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LoginLayout;
