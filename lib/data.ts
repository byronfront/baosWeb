/**
 * Datos de la tienda: contacto, productos y categorías.
 *
 * - contact: datos de contacto (email, WhatsApp, dirección, Instagram).
 * - products: listado de productos; cada uno tiene slug, precios, imágenes, categoría y si es destacado.
 * - categories: claves y etiquetas para filtrar; las etiquetas se traducen en la UI con lib/i18n.
 *
 * Para añadir productos: agregar objetos al array products con la misma estructura.
 * Las imágenes pueden ser URL externas (dominio en next.config images.remotePatterns) o rutas en public/.
 */
import type { Product, ContactInfo } from "@/types";

export const contact: ContactInfo = {
  email: "cuerosbao@gmail.com",
  phone: "+57 301 496 3136",
  whatsapp: "+57 301 496 3136",
  address: "Medellín, Colombia",
  instagram: "cuerosbao",
};

export const products: Product[] = [
  {
    id: "1",
    slug: "monedero-medieval",
    name: "Bolsa medieval",
    shortDescription: "Bolsa de cuero vacuno tipo bolsa medieval. Hecha a mano.",
    description:
      "Bolsa de cuero vacuno tipo bolsa medieval. Diseño atemporal, ideal para uso diario. Cada pieza es única por las variaciones naturales del cuero.",
    price: 25000,
    category: "accesorios",
    featured: true,
    inStock: true,
    images: [
      {
        src: "https://placehold.co/800x600/f2ebe0/5e3d2c?text=Bolsa+medieval",
        alt: "Bolsa medieval - vista frontal",
      },
    ],
  },
  {
    id: "2",
    slug: "porta-pasaportes",
    name: "Porta pasaportes",
    shortDescription: "Porta pasaportes de cuero vacuno. Hecha a mano.",
    description:
      "Porta pasaportes de cuero vacuno. Diseño atemporal, ideal para uso diario. Cada pieza es única por las variaciones naturales del cuero.",
    price: 75000,
    category: "accesorios",
    featured: true,
    inStock: true,
    images: [
      {
        src: "https://placehold.co/800x600/e4d4c0/5e3d2c?text=Porta+pasaportes",
        alt: "Porta pasaportes - vista frontal",
      },
    ],
  },
  {
    id: "3",
    slug: "libreta-dibujos",
    name: "Porta libreta de dibujos",
    shortDescription: "Porta libreta de dibujos de cuero vacuno. Hecha a mano.",
    description:
      "Porta libreta de dibujos de cuero vacuno. Diseño atemporal, ideal para uso diario. Cada pieza es única por las variaciones naturales del cuero.",
    price: 180000,
    category: "accesorios",
    featured: true,
    inStock: true,
    images: [
      {
        src: "https://placehold.co/800x600/d4ba9a/5e3d2c?text=Libreta+de+dibujos",
        alt: "Libreta de dibujos - vista frontal",
      },
    ],
  },
  {
    id: "4",
    slug: "accesorio-bolsa-cuero",
    name: "Accesorio para bolsa de cuero",
    shortDescription: "Accesorio para bolsa de cuero. Hecha a mano.",
    description:
      "Accesorio para bolsa de cuero. Diseño atemporal, ideal para uso diario. Cada pieza es única por las variaciones naturales del cuero.",
    price: 145000,
    category: "accesorios",
    featured: false,
    inStock: true,
    images: [
      {
        src: "https://placehold.co/800x600/c49d73/5e3d2c?text=Accesorio+para+bolsa+de+cuero",
        alt: "Accesorio para bolsa de cuero - vista frontal",
      },
    ],
  },
];

/** Busca un producto por su slug (usado en la página de detalle /catalogo/[slug]). */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Productos marcados como destacados (se muestran en la home). */
export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

/** Filtra productos por categoría (para futuros filtros en catálogo). */
export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category);
}

/** Lista de categorías; label se usa como fallback; en la UI se usa t("catalog.categories.{key}"). */
export const categories: { key: Product["category"]; label: string }[] = [
  { key: "carteras", label: "Carteras" },
  { key: "cinturones", label: "Cinturones" },
  { key: "accesorios", label: "Accesorios" },
  { key: "otros", label: "Otros" },
];
