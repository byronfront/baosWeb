/**
 * PostCSS: procesa Tailwind (clases) y Autoprefixer (prefijos de navegador).
 * Next.js lo usa al compilar CSS.
 */
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
