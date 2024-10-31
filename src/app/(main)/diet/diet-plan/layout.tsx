import { Metadata } from "next";

export const metadata: Metadata = {
  title: "برنامه غذایی",
};

export default function DietPlanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
