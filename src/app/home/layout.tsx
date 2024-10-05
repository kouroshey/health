import { Metadata } from "next";

export const metadata: Metadata = {
  title: "نارنج",
  description: "پایش و کنترل سلامت کودکان",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
