"use client";

/**
 * Sección hero de la home: título, subtítulo y dos CTAs (Ver catálogo, Contacto).
 * Rutas con localizedPath para mantener el idioma actual.
 */
import Link from "next/link";
import { useI18n } from "@/contexts/I18nContext";

export function Hero() {
  const { t, localizedPath } = useI18n();

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-leather-100 to-leather-50 py-20 sm:py-28 lg:py-36"
      aria-labelledby="hero-heading"
    >
      <div className="container-tight relative z-10 text-center">
        <h1
          id="hero-heading"
          className="font-heading text-4xl font-semibold tracking-tight text-leather-900 sm:text-5xl lg:text-6xl"
        >
          {t("home.heroTitle")}{" "}
          <span className="text-accent-gold">{t("home.heroTitleHighlight")}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-leather-700 sm:text-xl">
          {t("home.heroSubtitle")}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={localizedPath("/catalogo")}
            className="inline-flex items-center justify-center rounded-lg bg-leather-800 px-6 py-3 text-sm font-medium text-white shadow-md transition-colors hover:bg-leather-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2"
          >
            {t("home.viewCatalog")}
          </Link>
          <Link
            href={localizedPath("/contacto")}
            className="inline-flex items-center justify-center rounded-lg border-2 border-leather-700 px-6 py-3 text-sm font-medium text-leather-800 transition-colors hover:bg-leather-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2"
          >
            {t("home.contact")}
          </Link>
        </div>
      </div>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23321f18' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
    </section>
  );
}
