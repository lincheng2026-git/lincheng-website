import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0E8",
        "warm-white": "#FDFAF5",
        ink: "#2C2416",
        tea: "#6B4C2A",
        "warm-gray": "#8C7B6B",
        moon: "#E8E4DC",
        divider: "#D4C5B2",
        tag: "#EDE5D8",
        beige: "#E8DFD0",
        "footer-bg": "#3D3428",
      },
      fontFamily: {
        serif: ["LinChengSerif", "Songti SC", "STSong", "SimSun", "serif"],
        fangsong: ["var(--font-fangsong)", "FangSong", "serif"],
        display: ["var(--font-eb-garamond)", "Palatino Linotype", "serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        card: "0 2px 12px rgba(44, 36, 22, 0.08)",
        "card-hover": "0 8px 32px rgba(44, 36, 22, 0.14)",
      },
      animation: {
        "bounce-slow": "bounce 2.5s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
