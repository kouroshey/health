// import type { Metadata } from "next";
import "./globals.css";
import { Vazirmatn } from "next/font/google";

// export const metadata: Metadata = {
//   title: "PWA NextJS",
//   description: "It's a simple progressive web application made with NextJS",
//   generator: "Next.js",
//   manifest: "/manifest.json",
//   keywords: ["nextjs", "next14", "pwa", "next-pwa"],
//   themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
//   authors: [
//     {
//       name: "test",
//       url: "https://www.linkedin.com/in/imvinojanv/",
//     },
//   ],
//   viewport:
//     "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
//   icons: [
//     { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
//     { rel: "icon", url: "icons/icon-128x128.png" },
//   ],
// };

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
      <body>{children}</body>
    </html>
  );
}
