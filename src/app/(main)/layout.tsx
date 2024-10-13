export default function MainRouteGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mb-16">{children}</div>;
}
