import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";

import "./globals.css";
import MobileHeader from "@/components/layout/MobileHeader";

export const metadata: Metadata = {
  title: "نارنج",
  description: "پایش و کنترل سلامت کودکان",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  icons: [
    { rel: "icon", url: "/icons-orange.png" },
    { rel: "apple-touch-icon", url: "/icons-orange.png" },
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
      <body>
        <MobileHeader />
        <div className="container pb-4">{children}</div>
      </body>
    </html>
  );
}
