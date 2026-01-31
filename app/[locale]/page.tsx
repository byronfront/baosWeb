/**
 * Página de inicio (ruta: /es, /en, /ru).
 * Compone: Hero + productos destacados + CTA de WhatsApp.
 * Header y Footer vienen de app/[locale]/layout.tsx.
 */
import { Hero } from "@/components/home/Hero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <CTA />
    </>
  );
}
