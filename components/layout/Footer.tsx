import Link from "next/link";
import { Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import { contact } from "@/lib/data";
import { formatWhatsAppUrl } from "@/lib/format";

export function Footer() {
  return (
    <footer className="border-t border-leather-200 bg-leather-100 text-leather-800">
      <div className="container-tight py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <p className="font-heading text-xl font-semibold text-leather-900">
              Bao
            </p>
            <p className="mt-2 text-sm">
              Artículos de cuero hechos a mano en nuestro taller. Calidad y
              diseño único.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-leather-900">Enlaces</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-accent-gold transition-colors focus:outline-none focus-visible:underline"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogo"
                  className="hover:text-accent-gold transition-colors focus:outline-none focus-visible:underline"
                >
                  Catálogo
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="hover:text-accent-gold transition-colors focus:outline-none focus-visible:underline"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-leather-900">Contacto</p>
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
          <p>© {new Date().getFullYear()} Bao. Hecho a mano con dedicación.</p>
        </div>
      </div>
    </footer>
  );
}
