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

export type ProductCategory = "carteras" | "cinturones" | "accesorios" | "otros";

export type ContactInfo = {
  email: string;
  phone?: string;
  whatsapp?: string;
  address?: string;
  instagram?: string;
};
