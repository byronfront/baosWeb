import { getFeaturedProducts } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";
import Link from "next/link";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

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
            Destacados
          </h2>
          <Link
            href="/catalogo"
            className="text-sm font-medium text-leather-700 underline decoration-accent-gold underline-offset-4 hover:text-leather-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 rounded"
          >
            Ver todo el catálogo
          </Link>
        </div>
        <ul
          className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {featured.map((product, i) => (
            <li key={product.id}>
              <ProductCard product={product} priority={i < 3} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
