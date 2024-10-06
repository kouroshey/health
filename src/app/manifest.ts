import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Health and Wellness",
    short_name: "HAW",
    description: "An example of how to use Serwist in Next.js",
    display: "standalone",
    orientation: "portrait",
    theme_color: "#8936FF",
    dir: "auto",
    lang: "fa-ir",
    start_url: "/",
    scope: "/",
    background_color: "#2EC6FE",
    // back: change the icon with the real one
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
