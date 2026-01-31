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
    slug: "cartera-clasica-natural",
    name: "Cartera clásica natural",
    shortDescription: "Cartera de cuero vacuno con cierre metálico. Hecha a mano.",
    description:
      "Cartera de cuero vacuno curtido al vegetal, con cierre metálico y costuras reforzadas. Diseño atemporal, ideal para uso diario. Cada pieza es única por las variaciones naturales del cuero.",
    price: 18500,
    category: "carteras",
    featured: true,
    inStock: true,
    images: [
      {
        src: "https://placehold.co/800x600/f2ebe0/5e3d2c?text=Cartera+natural",
        alt: "Cartera clásica natural - vista frontal",
      },
    ],
  },
  {
    id: "2",
    slug: "cinturon-vintage-marrón",
    name: "Cinturón vintage marrón",
    shortDescription: "Cinturón de cuero con hebilla de latón. Estilo rústico.",
    description:
      "Cinturón de cuero de 3,5 cm de ancho, hebilla de latón envejecido. Acabado rústico que mejora con el uso. Hecho a medida según tu talla.",
    price: 8500,
    category: "cinturones",
    featured: true,
    inStock: true,
    images: [
      {
        src: "https://placehold.co/800x600/e4d4c0/5e3d2c?text=Cinturon+vintage",
        alt: "Cinturón vintage marrón con hebilla de latón",
      },
    ],
  },
  {
    id: "3",
    slug: "monedero-minimalista",
    name: "Monedero minimalista",
    shortDescription: "Monedero compacto en cuero. Diseño limpio y funcional.",
    description:
      "Monedero de cuero con capacidad para billetes y monedas. Diseño minimalista, costuras visibles. Disponible en varios colores de cuero.",
    price: 4200,
    category: "accesorios",
    featured: true,
    inStock: true,
    images: [
      {
        src: "https://placehold.co/800x600/d4ba9a/5e3d2c?text=Monedero",
        alt: "Monedero minimalista de cuero",
      },
    ],
  },
  {
    id: "4",
    slug: "riñonera-cuero",
    name: "Riñonera de cuero",
    shortDescription: "Riñonera artesanal. Cuero resistente y correa ajustable.",
    description:
      "Riñonera confeccionada en cuero vacuno, correa ajustable y cierre de seguridad. Compartimento principal y bolsillo frontal. Ideal para salidas.",
    price: 12500,
    category: "accesorios",
    featured: false,
    inStock: true,
    images: [
      {
        src: "https://placehold.co/800x600/c49d73/5e3d2c?text=Rinonera",
        alt: "Riñonera de cuero artesanal",
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
