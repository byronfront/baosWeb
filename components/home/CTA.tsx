"use client";

/**
 * Llamada a la acción en la home: "¿Consultas o pedidos a medida?" con botón de WhatsApp
 * y enlace a Contacto. No se renderiza si no hay contact.whatsapp en lib/data.
 */
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { contact } from "@/lib/data";
import { formatWhatsAppUrl } from "@/lib/format";
import { useI18n } from "@/contexts/I18nContext";

export function CTA() {
  const { t, localizedPath } = useI18n();
  if (!contact.whatsapp) return null;

  return (
    <section
      className="border-y border-leather-200 bg-leather-100 py-16 sm:py-20 dark:border-leather-800 dark:bg-leather-900"
      aria-labelledby="cta-heading"
    >
      <div className="container-tight text-center">
        <h2
          id="cta-heading"
          className="font-heading text-2xl font-semibold text-leather-900 sm:text-3xl dark:text-leather-50"
        >
          {t("homeCta.title")}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-leather-700 dark:text-leather-300">
          {t("homeCta.description")}
        </p>
        <a
          href={formatWhatsAppUrl(contact.whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-medium text-white shadow-md transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-leather-950"
        >
          <MessageCircle size={20} aria-hidden />
          {t("homeCta.writeWhatsApp")}
        </a>
        <p className="mt-6">
          <Link
            href={localizedPath("/contacto")}
            className="text-sm font-medium text-leather-700 hover:text-leather-900 dark:text-leather-300 dark:hover:text-leather-100 underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 rounded"
          >
            {t("homeCta.otherContact")}
          </Link>
        </p>
      </div>
    </section>
  );
}
