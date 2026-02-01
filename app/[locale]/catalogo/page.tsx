/**
 * Página de catálogo (ruta: /es/catalogo, /en/catalogo, /ru/catalogo).
 * Lista todos los productos y filtros por categoría (enlaces listos; lógica de filtrado opcional).
 * Textos desde getMessages(locale); ProductCard recibe locale para enlaces y precio.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { products, categories } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";
import { getMessages } from "@/lib/i18n/messages";
import type { Locale } from "@/lib/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = getMessages(locale as Locale);
  return {
    title: messages.catalog.title,
    description: messages.catalog.description,
  };
}

export default async function CatalogoPage({ params }: Props) {
  const { locale } = await params;
  const messages = getMessages(locale as Locale);
  /** Resuelve claves anidadas para etiquetas de categoría (catalog.categories.carteras, etc.). */
  const t = (key: string) => {
    const parts = key.split(".");
    let cur: unknown = messages;
    for (const p of parts) cur = (cur as Record<string, unknown>)?.[p];
    return (typeof cur === "string" ? cur : key) as string;
  };
  const base = `/${locale}`;

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="container-tight">
        <header className="mb-12">
          <h1 className="font-heading text-3xl font-semibold text-leather-900 sm:text-4xl dark:text-leather-50">
            {messages.catalog.title}
          </h1>
          <p className="mt-4 max-w-2xl text-leather-700 dark:text-leather-300">
            {messages.catalog.description}
          </p>
          <nav
            className="mt-6 flex flex-wrap gap-2"
            aria-label={messages.catalog.filterByCategory}
          >
            {categories.map(({ key }) => (
              <Link
                key={key}
                href={`${base}/catalogo?categoria=${key}`}
                className="rounded-full border border-leather-300 bg-white px-4 py-2 text-sm font-medium text-leather-700 transition-colors hover:border-leather-500 hover:bg-leather-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 dark:border-leather-600 dark:bg-leather-900 dark:text-leather-200 dark:hover:border-leather-500 dark:hover:bg-leather-800 dark:focus-visible:ring-accent-warm dark:focus-visible:ring-offset-leather-950"
              >
                {t(`catalog.categories.${key}`)}
              </Link>
            ))}
          </nav>
        </header>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} locale={locale as Locale} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
