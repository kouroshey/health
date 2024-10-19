import type { Metadata } from "next";
import localFont from "next/font/local";

import MobileHeader from "@/components/layout/MobileHeader";

import "./globals.css";
import ReactQueryProvider from "@/lib/providers/ReactQueryProvider";

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

const vazir = localFont({
  src: [
    {
      path: "./fonts/vazirmatn-thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/vazirmatn-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/vazirmatn-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/vazirmatn-extra-bold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazir.variable}>
      <body>
        <ReactQueryProvider>
          <MobileHeader />
          <div className="container pb-4">{children}</div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
