import MobileMenu from "@/components/layout/MobileMenu";

export default function MainRouteGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mb-16">
      {children}
      <MobileMenu />
    </div>
  );
}
