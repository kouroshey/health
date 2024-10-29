import { Metadata } from "next";

export const metadata: Metadata = {
  title: "روش های طبخ غذا",
};

export default function CookingMethodsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
