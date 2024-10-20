import type { Metadata } from "next";
import localFont from "next/font/local";

import MobileHeader from "@/components/layout/MobileHeader";

import "./globals.css";
import appConfig from "@/config/appConfig";
import { Toaster } from "react-hot-toast";
import Providers from "./providers";

export const metadata: Metadata = {
  title: appConfig.app_name,
  description: appConfig.app_description,
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  icons: [
    { rel: "icon", url: appConfig.logo },
    { rel: "apple-touch-icon", url: appConfig.logo },
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
        <Providers>
          <MobileHeader />
          <Toaster
            toastOptions={{
              className: "",
              duration: 3000,
              style: {
                background: "#363636",
                color: "#fff",
              },
            }}
          />
          <div className="container pb-4">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
