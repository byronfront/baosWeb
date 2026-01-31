/**
 * Traducciones de productos (nombre, descripción corta y larga) por idioma.
 * El español viene de lib/data (product.name, etc.); aquí solo en y ru.
 * getProductDisplay(product, locale) devuelve el producto con textos en el idioma indicado.
 */
import type { Locale } from "./config";
import type { Product } from "@/types";

export type ProductTexts = {
  name: string;
  shortDescription: string;
  description: string;
};

/** Traducciones por id de producto y locale (en, ru). Español = datos originales en lib/data. */
export const productTranslations: Record<
  string,
  Partial<Record<Locale, ProductTexts>>
> = {
  "1": {
    en: {
      name: "Medieval bag",
      shortDescription:
        "Leather medieval-style bag. Handmade.",
      description:
        "Leather medieval-style bag. Timeless design, ideal for everyday use. Each piece is unique due to the natural variations of the leather.",
    },
    ru: {
      name: "Средневековая сумка",
      shortDescription:
        "Кожаная сумка в средневековом стиле. Ручная работа.",
      description:
        "Кожаная сумка в средневековом стиле. Классический дизайн, идеально для повседневного использования. Каждое изделие уникально благодаря естественным вариациям кожи.",
    },
  },
  "2": {
    en: {
      name: "Passport holder",
      shortDescription:
        "Leather passport holder. Handmade.",
      description:
        "Leather passport holder. Timeless design, ideal for everyday use. Each piece is unique due to the natural variations of the leather.",
    },
    ru: {
      name: "Обложка для паспорта",
      shortDescription:
        "Кожаная обложка для паспорта. Ручная работа.",
      description:
        "Кожаная обложка для паспорта. Классический дизайн, идеально для повседневного использования. Каждое изделие уникально благодаря естественным вариациям кожи.",
    },
  },
  "3": {
    en: {
      name: "Sketchbook holder",
      shortDescription:
        "Leather sketchbook holder. Handmade.",
      description:
        "Leather sketchbook holder. Timeless design, ideal for everyday use. Each piece is unique due to the natural variations of the leather.",
    },
    ru: {
      name: "Обложка для альбома для рисования",
      shortDescription:
        "Кожаная обложка для альбома для рисования. Ручная работа.",
      description:
        "Кожаная обложка для альбома для рисования. Классический дизайн, идеально для повседневного использования. Каждое изделие уникально благодаря естественным вариациям кожи.",
    },
  },
  "4": {
    en: {
      name: "Leather bag accessory",
      shortDescription:
        "Leather bag accessory. Handmade.",
      description:
        "Leather bag accessory. Timeless design, ideal for everyday use. Each piece is unique due to the natural variations of the leather.",
    },
    ru: {
      name: "Аксессуар для кожаной сумки",
      shortDescription:
        "Аксессуар для кожаной сумки. Ручная работа.",
      description:
        "Аксессуар для кожаной сумки. Классический дизайн, идеально для повседневного использования. Каждое изделие уникально благодаря естественным вариациям кожи.",
    },
  },
};

/**
 * Devuelve el producto con name, shortDescription y description en el idioma indicado.
 * Si locale es "es" o no hay traducción, se usan los datos originales del producto.
 */
export function getProductDisplay(
  product: Product,
  locale: Locale
): Product {
  if (locale === "es") return product;
  const translations = productTranslations[product.id]?.[locale];
  if (!translations) return product;
  return {
    ...product,
    name: translations.name ?? product.name,
    shortDescription:
      translations.shortDescription ?? product.shortDescription,
    description: translations.description ?? product.description,
  };
}
