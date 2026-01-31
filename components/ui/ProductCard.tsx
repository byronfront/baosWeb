/**
 * Tarjeta de producto para listados (home destacados y catálogo).
 *
 * - Muestra imagen (o placeholder si no hay src), nombre, descripción corta y precio.
 * - locale: si se pasa, el enlace va a /{locale}/catalogo/{slug} y el precio se formatea según ese idioma.
 * - priority: true para las primeras imágenes visibles (LCP) en la home.
 */
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";
import type { Locale } from "@/lib/i18n/config";
import { formatPrice } from "@/lib/format";
import { getProductDisplay } from "@/lib/i18n/productTranslations";
import { FormattedPrice } from "@/components/ui/FormattedPrice";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
  locale?: Locale;
};

export function ProductCard({
  product,
  priority = false,
  locale,
}: ProductCardProps) {
  const display =
    locale != null ? getProductDisplay(product, locale) : product;
  const image = product.images[0];
  const imageSrc = image?.src;
  const base = locale ? `/${locale}` : "";
  const productHref = base
    ? `${base}/catalogo/${product.slug}`
    : `/catalogo/${product.slug}`;

  if (!imageSrc) {
    return (
      <article className="group">
        <Link
          href={productHref}
          className="block overflow-hidden rounded-lg border border-leather-200 bg-white shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2"
        >
          <div className="relative aspect-[4/3] flex items-center justify-center bg-leather-200 text-leather-600 text-sm">
            {display.name}
          </div>
          <div className="p-4">
            <h2 className="font-heading text-lg font-semibold text-leather-900">
              {display.name}
            </h2>
            <p className="mt-1 line-clamp-2 text-sm text-leather-600">
              {display.shortDescription}
            </p>
            <p className="mt-2 text-sm font-semibold text-leather-800">
              {locale != null ? (
                <FormattedPrice priceInCOP={product.price} locale={locale} />
              ) : (
                formatPrice(product.price, "COP")
              )}
            </p>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group">
      <Link
        href={productHref}
        className="block overflow-hidden rounded-lg border border-leather-200 bg-white shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2"
      >
        <div className="relative aspect-[4/3] bg-leather-100">
          <Image
            src={imageSrc}
            alt={image?.alt ?? display.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={priority}
          />
        </div>
        <div className="p-4">
          <h2 className="font-heading text-lg font-semibold text-leather-900 group-hover:text-accent-gold transition-colors">
            {display.name}
          </h2>
          <p className="mt-1 line-clamp-2 text-sm text-leather-600">
            {display.shortDescription}
          </p>
          <p className="mt-2 text-sm font-semibold text-leather-800">
            {locale != null ? (
              <FormattedPrice priceInCOP={product.price} locale={locale} />
            ) : (
              formatPrice(product.price, "COP")
            )}
          </p>
        </div>
      </Link>
    </article>
  );
}
