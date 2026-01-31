/**
 * Layout raíz de la aplicación.
 *
 * Responsabilidades:
 * - Cargar fuentes (Cormorant Garamond para títulos, DM Sans para cuerpo).
 * - Definir metadata y viewport por defecto.
 * - Envolver todo el sitio en <html> y <body>.
 *
 * No incluye Header/Footer: esos van en app/[locale]/layout.tsx
 * para tener acceso al locale y a las traducciones.
 */
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

// Fuente para títulos (estilo serif, artesanal)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

// Fuente para cuerpo de texto (legible, neutra)
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#321f18",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://tudominio.com"),
  title: {
    default: "Bao | Artículos de cuero artesanal",
    template: "%s | Bao Cuero",
  },
  description:
    "Artesanía en cuero. Carteras, cinturones y accesorios hechos a mano en nuestro taller. Calidad y diseño único.",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // children aquí es el resultado de app/[locale]/layout.tsx (Header + main + Footer)
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">{children}</body>
    </html>
  );
}
