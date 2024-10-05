import { Metadata } from "next";

export const metadata: Metadata = {
  title: "خانه",
  description: "صفحه خانه",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
