/**
 * Configuración de Next.js.
 *
 * - images: formatos AVIF/WebP, tamaños de dispositivo y dominios externos (placehold.co para placeholders).
 * - experimental.optimizePackageImports: reduce el bundle de lucide-react importando solo los iconos usados.
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co", pathname: "/**" },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
