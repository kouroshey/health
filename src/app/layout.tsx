import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Vazirmatn } from "next/font/google";

export const metadata: Metadata = {
  title: "PWA NextJS",
  description: "It's a simple progressive web application made with NextJS",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

const vazir = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  weight: ["100", "300", "500", "800"],
  variable: "--font-vazir",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazir.variable}>
      <body className="container py-2 md:py-5">{children}</body>
    </html>
  );
}
