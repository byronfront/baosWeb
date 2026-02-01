/**
 * Configuración de Tailwind CSS.
 *
 * - content: directorios escaneados para clases (app, components, pages).
 * - theme.extend: paleta leather (tonos cuero), accent (gold/warm), fuentes (--font-body, --font-heading desde layout).
 */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        leather: {
          50: "#faf7f2",
          100: "#f2ebe0",
          200: "#e4d4c0",
          300: "#d4ba9a",
          400: "#c49d73",
          500: "#b8864d",
          600: "#a9723f",
          700: "#8c5a36",
          800: "#724932",
          900: "#5e3d2c",
          950: "#321f18",
        },
        accent: {
          gold: "#c9a227",
          warm: "#d4a574",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
