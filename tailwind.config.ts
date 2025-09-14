import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f3f3f3",
        paper: "#ffffff",
        ink: "#111111",
        muted: "#6b6b6b",
        line: "#e6e6e6",
        surface: "#f7f7f7",
        brand: "#0f0f0f"
      },
      borderRadius: {
        xl: "16px"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.08)"
      },
      maxWidth: {
        max: "1200px"
      }
    },
  },
  plugins: [],
};
export default config;
