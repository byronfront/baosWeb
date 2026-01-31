import type { Metadata } from "next";
import Link from "next/link";
import { products, categories } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "Carteras, cinturones y accesorios de cuero hechos a mano. Ver todos los productos.",
};

export default function CatalogoPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="container-tight">
        <header className="mb-12">
          <h1 className="font-heading text-3xl font-semibold text-leather-900 sm:text-4xl">
            Catálogo
          </h1>
          <p className="mt-4 max-w-2xl text-leather-700">
            Todos nuestros artículos están hechos a mano en el taller. Cada pieza
            es única.
          </p>
          <nav
            className="mt-6 flex flex-wrap gap-2"
            aria-label="Filtrar por categoría"
          >
            {categories.map(({ key, label }) => (
              <Link
                key={key}
                href={`/catalogo?categoria=${key}`}
                className="rounded-full border border-leather-300 bg-white px-4 py-2 text-sm font-medium text-leather-700 transition-colors hover:border-leather-500 hover:bg-leather-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2"
              >
                {label}
              </Link>
            ))}
          </nav>
        </header>

        <ul
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
