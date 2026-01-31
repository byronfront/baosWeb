"use client";

/**
 * Cabecera global: logo, navegación (Inicio, Catálogo, Contacto) y selector de idioma (ES/EN/RU).
 *
 * Flujo:
 * - useI18n() proporciona t, localizedPath y locale para enlaces y textos traducidos.
 * - isActive(href) determina si el enlace actual coincide con pathname (para resaltar).
 * - En móvil se muestra un menú colapsable (open) con los mismos enlaces y selector de idioma.
 * - Cambiar idioma: el enlace reemplaza el segmento /{locale} en pathname por el nuevo locale.
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/contexts/I18nContext";
import { locales, localeNames } from "@/lib/i18n/config";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t, localizedPath, locale } = useI18n();

  const navLinks = [
    { href: localizedPath("/"), label: t("nav.home") },
    { href: localizedPath("/catalogo"), label: t("nav.catalog") },
    { href: localizedPath("/contacto"), label: t("nav.contact") },
  ];

  /** Comprueba si el enlace corresponde a la ruta actual (para resaltar en la nav). */
  const isActive = (href: string) => {
    const base = href.replace(/\/$/, "") || "";
    if (base === "" || base === `/${locale}`)
      return pathname === href || pathname === `/${locale}`;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-leather-200/80 bg-leather-50/95 backdrop-blur-sm">
      <div className="container-tight flex h-16 items-center justify-between">
        <Link
          href={localizedPath("/")}
          className="font-heading text-2xl font-semibold text-leather-900 focus-ring rounded"
          aria-label={t("common.brandAria")}
        >
          {t("common.brand")}
        </Link>

        <nav
          className="hidden md:flex md:items-center md:gap-8"
          aria-label={t("nav.navLabel")}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors focus-ring rounded px-2 py-1 ${
                isActive(href)
                  ? "text-accent-gold"
                  : "text-leather-700 hover:text-leather-900"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="relative ml-2 flex gap-1 rounded border border-leather-200 bg-leather-50 p-0.5">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={pathname.replace(`/${locale}`, `/${loc}`) || `/${loc}`}
                className={`rounded px-2 py-1 text-xs font-medium focus-ring ${
                  loc === locale
                    ? "bg-leather-200 text-leather-900"
                    : "text-leather-600 hover:text-leather-800"
                }`}
                title={localeNames[loc]}
                aria-label={localeNames[loc]}
              >
                {loc.toUpperCase()}
              </Link>
            ))}
          </div>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 text-leather-700 hover:text-leather-900 focus-ring rounded"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? t("nav.menuClose") : t("nav.menuOpen")}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-leather-200 bg-leather-50">
          <nav
            className="container-tight flex flex-col gap-1 py-4"
            aria-label={t("nav.navMobile")}
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium focus-ring ${
                  isActive(href)
                    ? "bg-leather-200/60 text-leather-900"
                    : "text-leather-700 hover:bg-leather-100"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2 px-4 py-2">
              {locales.map((loc) => (
                <Link
                  key={loc}
                  href={pathname.replace(`/${locale}`, `/${loc}`) || `/${loc}`}
                  onClick={() => setOpen(false)}
                  className={`rounded px-3 py-2 text-sm font-medium ${
                    loc === locale ? "bg-leather-200" : "bg-leather-100"
                  }`}
                >
                  {loc.toUpperCase()}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
