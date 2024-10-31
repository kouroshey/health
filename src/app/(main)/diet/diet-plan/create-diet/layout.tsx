import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ساخت برنامه غذایی",
};

export default function CreateDietPlanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
