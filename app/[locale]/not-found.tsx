"use client";

/**
 * Página 404 dentro de una ruta con locale (/es/..., /en/..., /ru/...).
 * Next.js la muestra cuando se llama notFound() desde una página bajo [locale].
 * Usa useI18n() porque se renderiza dentro del layout [locale] (I18nProvider).
 */
import Link from "next/link";
import { useI18n } from "@/contexts/I18nContext";

export default function NotFound() {
  const { t, localizedPath } = useI18n();

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16">
      <h1 className="font-heading text-4xl font-semibold text-leather-900 dark:text-leather-50">
        {t("notFound.title")}
      </h1>
      <p className="mt-4 text-leather-700 dark:text-leather-300">{t("notFound.message")}</p>
      <Link
        href={localizedPath("/")}
        className="mt-8 rounded-lg bg-leather-800 px-6 py-3 text-sm font-medium text-white hover:bg-leather-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 dark:bg-leather-700 dark:hover:bg-leather-600 dark:focus-visible:ring-accent-warm dark:focus-visible:ring-offset-leather-950"
      >
        {t("notFound.backHome")}
      </Link>
    </div>
  );
}
