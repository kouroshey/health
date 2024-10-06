import { Metadata } from "next";

export const metadata: Metadata = {
  title: "login",
  description: "login page",
};

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full md:w-8/12 md:max-w-md md:border md:rounded-sm py-4">
      {children}
    </div>
  );
};

export default LoginLayout;
