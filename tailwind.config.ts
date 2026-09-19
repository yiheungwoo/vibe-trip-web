import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vibe: {
          bg: "#07070C",
          purple: "#6C5CE7",
          deep: "#4834D4",
          light: "#8B7CFF",
          tint: "#A79BFF",
          badge: "#C9C1FF",
          cyan: "#00CEC9",
          card: "#12121B",
          card2: "#14141F",
        },
      },
      opacity: {
        12: "0.12",
        14: "0.14",
      },
      fontFamily: {
        sans: [
          '"Pretendard Variable"',
          "Pretendard",
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      maxWidth: { page: "1240px" },
      keyframes: {
        vtfloat: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        vtpulse: {
          "0%,100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
        },
        fadein: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        modalin: {
          from: { opacity: "0", transform: "translateY(12px) scale(0.98)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        float: "vtfloat 6s ease-in-out infinite",
        "float-slow": "vtfloat 7s 0.8s ease-in-out infinite",
        "pulse-dot": "vtpulse 1.4s ease-in-out infinite",
        "fade-in": "fadein 0.2s ease-out",
        "modal-in": "modalin 0.24s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
