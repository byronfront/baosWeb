"use client";

/**
 * Bloque "Destacados" en la home: lista de productos con featured === true.
 * Pasa locale a ProductCard para que los enlaces y el precio usen el idioma actual.
 */
import { getFeaturedProducts } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";
import Link from "next/link";
import { useI18n } from "@/contexts/I18nContext";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();
  const { t, localizedPath, locale } = useI18n();

  if (featured.length === 0) return null;

  return (
    <section
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="featured-heading"
    >
      <div className="container-tight">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="featured-heading"
            className="font-heading text-3xl font-semibold text-leather-900 sm:text-4xl"
          >
            {t("homeFeatured.title")}
          </h2>
          <Link
            href={localizedPath("/catalogo")}
            className="text-sm font-medium text-leather-700 underline decoration-accent-gold underline-offset-4 hover:text-leather-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 rounded"
          >
            {t("homeFeatured.viewAll")}
          </Link>
        </div>
        <ul
          className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {featured.map((product, i) => (
            <li key={product.id}>
              <ProductCard
                product={product}
                priority={i < 3}
                locale={locale}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
