import { Metadata } from "next";

export const metadata: Metadata = {
  title: "وعده های غذایی",
  description: "صفحه وعده های غذایی",
};

export default function MealsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
