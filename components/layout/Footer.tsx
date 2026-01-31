"use client";

/**
 * Pie de página: marca, descripción, enlaces (Inicio, Catálogo, Contacto) y datos de contacto
 * (email, WhatsApp, dirección, Instagram). Todo el texto viene de useI18n().t().
 */
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Instagram } from "lucide-react";
import { contact } from "@/lib/data";
import { formatWhatsAppUrl } from "@/lib/format";
import { useI18n } from "@/contexts/I18nContext";

export function Footer() {
  const { t, localizedPath } = useI18n();

  return (
    <footer className="border-t border-leather-200 bg-leather-100 text-leather-800">
      <div className="container-tight py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <p className="font-heading text-xl font-semibold text-leather-900">
              {t("common.brand")}
            </p>
            <p className="mt-2 text-sm">{t("footer.tagline")}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-leather-900">
              {t("footer.links")}
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href={localizedPath("/")}
                  className="hover:text-accent-gold transition-colors focus:outline-none focus-visible:underline"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href={localizedPath("/catalogo")}
                  className="hover:text-accent-gold transition-colors focus:outline-none focus-visible:underline"
                >
                  {t("nav.catalog")}
                </Link>
              </li>
              <li>
                <Link
                  href={localizedPath("/contacto")}
                  className="hover:text-accent-gold transition-colors focus:outline-none focus-visible:underline"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-leather-900">
              {t("footer.contact")}
            </p>
            <ul className="mt-3 space-y-3 text-sm">
              {contact.email && (
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2 hover:text-accent-gold transition-colors focus:outline-none focus-visible:underline"
                  >
                    <Mail size={16} aria-hidden />
                    {contact.email}
                  </a>
                </li>
              )}
              {contact.whatsapp && (
                <li>
                  <a
                    href={formatWhatsAppUrl(contact.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-accent-gold transition-colors focus:outline-none focus-visible:underline"
                  >
                    <MessageCircle size={16} aria-hidden />
                    WhatsApp
                  </a>
                </li>
              )}
              {contact.address && (
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden />
                  <span>{contact.address}</span>
                </li>
              )}
              {contact.instagram && (
                <li>
                  <a
                    href={`https://instagram.com/${contact.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-accent-gold transition-colors focus:outline-none focus-visible:underline"
                  >
                    <Instagram size={16} aria-hidden />
                    @{contact.instagram}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-leather-200 pt-8 text-center text-sm text-leather-600">
          <p>
            © {new Date().getFullYear()} {t("common.brand")}. {t("footer.madeWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}
