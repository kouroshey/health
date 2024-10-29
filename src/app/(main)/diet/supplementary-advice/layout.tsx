import { Metadata } from "next";

export const metadata: Metadata = {
  title: "توصیه های غذایی",
};

export default function SupplementationAdviceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
