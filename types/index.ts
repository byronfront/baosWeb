/**
 * Tipos compartidos de la aplicación.
 *
 * Product: modelo de un artículo (catálogo y detalle).
 * ProductImage: una imagen de producto (src puede ser URL o path en public/).
 * ProductCategory: claves usadas en lib/data y en traducciones (catalog.categories.*).
 * ContactInfo: datos de contacto de la tienda (lib/data).
 */

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  category: ProductCategory;
  images: ProductImage[];
  featured?: boolean;
  inStock?: boolean;
};

export type ProductImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type ProductCategory =
  | "carteras"
  | "cinturones"
  | "accesorios"
  | "otros";

export type ContactInfo = {
  email: string;
  phone?: string;
  whatsapp?: string;
  address?: string;
  instagram?: string;
};
