import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { contact } from "@/lib/data";
import { formatWhatsAppUrl } from "@/lib/format";

export function CTA() {
  if (!contact.whatsapp) return null;

  return (
    <section
      className="border-y border-leather-200 bg-leather-100 py-16 sm:py-20"
      aria-labelledby="cta-heading"
    >
      <div className="container-tight text-center">
        <h2
          id="cta-heading"
          className="font-heading text-2xl font-semibold text-leather-900 sm:text-3xl"
        >
          ¿Consultas o pedidos a medida?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-leather-700">
          Escribinos por WhatsApp y te respondemos a la brevedad. También
          hacemos piezas por encargo.
        </p>
        <a
          href={formatWhatsAppUrl(contact.whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-medium text-white shadow-md transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        >
          <MessageCircle size={20} aria-hidden />
          Escribir por WhatsApp
        </a>
        <p className="mt-6">
          <Link
            href="/contacto"
            className="text-sm font-medium text-leather-700 hover:text-leather-900 underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 rounded"
          >
            Ver otras formas de contacto
          </Link>
        </p>
      </div>
    </section>
  );
}
