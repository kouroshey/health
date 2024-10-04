import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
});

export default withSerwist({
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: "images.unsplash.com" }],
  },
  // swcMinify: true,
});
