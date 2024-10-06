import MobileMenu from "@/components/layout/MobileMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="container py-2 md:py-5">{children}</div>
      <MobileMenu />
    </div>
  );
}
