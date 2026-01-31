import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";
import { formatPrice } from "@/lib/format";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const image = product.images[0];
  const imageSrc = image?.src;

  if (!imageSrc) {
    return (
      <article className="group">
        <Link
          href={`/catalogo/${product.slug}`}
          className="block overflow-hidden rounded-lg border border-leather-200 bg-white shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2"
        >
          <div className="relative aspect-[4/3] flex items-center justify-center bg-leather-200 text-leather-600 text-sm">
            {product.name}
          </div>
          <div className="p-4">
            <h2 className="font-heading text-lg font-semibold text-leather-900">{product.name}</h2>
            <p className="mt-1 line-clamp-2 text-sm text-leather-600">{product.shortDescription}</p>
            <p className="mt-2 text-sm font-semibold text-leather-800">{formatPrice(product.price)}</p>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group">
      <Link
        href={`/catalogo/${product.slug}`}
        className="block overflow-hidden rounded-lg border border-leather-200 bg-white shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2"
      >
        <div className="relative aspect-[4/3] bg-leather-100">
          <Image
            src={imageSrc}
            alt={image?.alt ?? product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={priority}
          />
        </div>
        <div className="p-4">
          <h2 className="font-heading text-lg font-semibold text-leather-900 group-hover:text-accent-gold transition-colors">
            {product.name}
          </h2>
          <p className="mt-1 line-clamp-2 text-sm text-leather-600">
            {product.shortDescription}
          </p>
          <p className="mt-2 text-sm font-semibold text-leather-800">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </article>
  );
}
