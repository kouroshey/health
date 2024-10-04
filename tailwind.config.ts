import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: ".5rem",
        sm: ".5rem",
        md: "1rem",
        lg: "2rem",
      },
    },
    extend: {
      fontFamily: {
        vazir: ["var(--font-vazir)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "var(--white)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        gray: "var(--gray)",
        black: "var(--black)",
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        primary_dark: "var(--primary-dark)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
      },
      borderRadius: {
        sm: "0.4rem",
        md: "0.8rem",
        lg: "1rem",
        xl: "1.5rem",
      },
    },
    fontSize: {
      xs: "0.5rem",
      sm: "0.8rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
      "2xl": "3rem",
      "3xl": "5rem",
    },
    screens: {
      xs: "360px",
      sm: "560px",
      md: "760px",
      lg: "960px",
      xl: "1280px",
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
