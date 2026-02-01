/**
 * Página de detalle de producto (ruta: /es/catalogo/[slug], etc.).
 * Muestra imagen, nombre, precio, descripción y CTAs (WhatsApp, Contacto).
 * generateStaticParams pregenera todas las combinaciones locale + slug para el build.
 */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getProductBySlug, products } from "@/lib/data";
import { formatWhatsAppUrl } from "@/lib/format";
import { contact } from "@/lib/data";
import { getMessages } from "@/lib/i18n/messages";
import { getProductDisplay } from "@/lib/i18n/productTranslations";
import { FormattedPrice } from "@/components/ui/FormattedPrice";
import type { Locale } from "@/lib/i18n/config";

type Props = { params: Promise<{ locale: string; slug: string }> };

/** Pre-genera rutas estáticas para cada producto en cada idioma. */
export async function generateStaticParams() {
  return products.flatMap((p) =>
    (["es", "en", "ru"] as const).map((locale) => ({
      locale,
      slug: p.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const product = getProductBySlug(slug);
  const messages = getMessages(locale as Locale);
  if (!product)
    return { title: messages.product.notFound };
  const display = getProductDisplay(product, locale as Locale);
  return {
    title: display.name,
    description: display.shortDescription,
    openGraph: {
      title: display.name,
      description: display.shortDescription,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug, locale } = await params;
  const product = getProductBySlug(slug);
  const messages = getMessages(locale as Locale);
  const base = `/${locale}`;

  if (!product) notFound();

  const display = getProductDisplay(product, locale as Locale);
  const image = product.images[0];
  const imageSrc = image?.src;

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="container-tight">
        <Link
          href={`${base}/catalogo`}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-leather-700 hover:text-leather-900 dark:text-leather-300 dark:hover:text-leather-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 rounded dark:focus-visible:ring-accent-warm dark:focus-visible:ring-offset-leather-950"
        >
          <ArrowLeft size={18} aria-hidden />
          {messages.product.backToCatalog}
        </Link>

        <article className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-leather-100 lg:aspect-square dark:bg-leather-800">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={image?.alt ?? display.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-leather-500 dark:text-leather-400">
                {display.name}
              </div>
            )}
          </div>

          <div>
            <h1 className="font-heading text-3xl font-semibold text-leather-900 sm:text-4xl dark:text-leather-50">
              {display.name}
            </h1>
            <p className="mt-4 text-2xl font-semibold text-leather-800 dark:text-leather-200">
              <FormattedPrice priceInCOP={product.price} locale={locale as Locale} />
            </p>
            <p className="mt-6 text-leather-700 leading-relaxed dark:text-leather-300">
              {display.description}
            </p>
            {product.inStock !== false && (
              <p className="mt-4 text-sm font-medium text-leather-600 dark:text-leather-400">
                {messages.product.available}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-4">
              {contact.whatsapp && (
                <a
                  href={formatWhatsAppUrl(
                    contact.whatsapp,
                    `Hola, me interesa: ${display.name}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-[#25D366] px-6 py-3 text-sm font-medium text-white shadow-md hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-leather-950"
                >
                  {messages.product.consultWhatsApp}
                </a>
              )}
              <Link
                href={`${base}/contacto`}
                className="inline-flex items-center justify-center rounded-lg border-2 border-leather-700 px-6 py-3 text-sm font-medium text-leather-800 hover:bg-leather-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 dark:border-leather-500 dark:text-leather-200 dark:hover:bg-leather-800"
              >
                {messages.product.otherContacts}
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
