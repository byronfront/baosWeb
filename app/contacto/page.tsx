import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Instagram } from "lucide-react";
import { contact } from "@/lib/data";
import { formatWhatsAppUrl } from "@/lib/format";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escribinos por email, WhatsApp o visitá nuestro taller. Consultas y pedidos a medida.",
};

export default function ContactoPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="container-tight max-w-3xl">
        <h1 className="font-heading text-3xl font-semibold text-leather-900 sm:text-4xl">
          Contacto
        </h1>
        <p className="mt-4 text-leather-700">
          ¿Consultas, pedidos a medida o querés visitar el taller? Escribinos o
          llamanos.
        </p>

        <ul className="mt-10 space-y-6" role="list">
          {contact.email && (
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-start gap-4 rounded-lg border border-leather-200 bg-white p-6 transition-colors hover:border-leather-300 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-leather-100 text-leather-700">
                  <Mail size={24} aria-hidden />
                </span>
                <div>
                  <span className="font-medium text-leather-900">Email</span>
                  <p className="mt-1 text-leather-700">{contact.email}</p>
                </div>
              </a>
            </li>
          )}
          {contact.whatsapp && (
            <li>
              <a
                href={formatWhatsAppUrl(contact.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-lg border border-leather-200 bg-white p-6 transition-colors hover:border-leather-300 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                  <MessageCircle size={24} aria-hidden />
                </span>
                <div>
                  <span className="font-medium text-leather-900">WhatsApp</span>
                  <p className="mt-1 text-leather-700">
                    {contact.phone ?? contact.whatsapp}
                  </p>
                  <p className="mt-1 text-sm text-leather-600">
                    Click para abrir WhatsApp
                  </p>
                </div>
              </a>
            </li>
          )}
          {contact.address && (
            <li>
              <div className="flex items-start gap-4 rounded-lg border border-leather-200 bg-white p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-leather-100 text-leather-700">
                  <MapPin size={24} aria-hidden />
                </span>
                <div>
                  <span className="font-medium text-leather-900">Dirección</span>
                  <p className="mt-1 text-leather-700">{contact.address}</p>
                </div>
              </div>
            </li>
          )}
          {contact.instagram && (
            <li>
              <a
                href={`https://instagram.com/${contact.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-lg border border-leather-200 bg-white p-6 transition-colors hover:border-leather-300 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-leather-100 text-leather-700">
                  <Instagram size={24} aria-hidden />
                </span>
                <div>
                  <span className="font-medium text-leather-900">Instagram</span>
                  <p className="mt-1 text-leather-700">@{contact.instagram}</p>
                </div>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
