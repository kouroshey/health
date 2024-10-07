import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "نارنج",
    short_name: "نارنج",
    description: "سلامت کودکان",
    display: "standalone",
    orientation: "portrait",
    theme_color: "#f48e0c",
    dir: "rtl",
    lang: "fa-ir",
    start_url: "/",
    scope: "/",
    background_color: "white",
    icons: [
      {
        purpose: "maskable",
        sizes: "512x512",
        src: "icon512_maskable.png",
        type: "image/png",
      },
      {
        purpose: "any",
        sizes: "512x512",
        src: "icon512_rounded.png",
        type: "image/png",
      },
    ],
  };
}
