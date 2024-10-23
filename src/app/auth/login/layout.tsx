import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ورود",
  description: "صفحه ورود",
};

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LoginLayout;
