import { Metadata } from "next";

export const metadata: Metadata = {
  title: "login",
  description: "login page",
};

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LoginLayout;
