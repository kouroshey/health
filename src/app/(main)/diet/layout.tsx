import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تغذیه",
  description: "صفحه تغذیه",
};

export default function FeedingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
