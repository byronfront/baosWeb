"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-leather-200/80 bg-leather-50/95 backdrop-blur-sm">
      <div className="container-tight flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-heading text-2xl font-semibold text-leather-900 focus-ring rounded"
          aria-label="Bao - Inicio"
        >
          Bao
        </Link>

        <nav
          className="hidden md:flex md:items-center md:gap-8"
          aria-label="Navegación principal"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors focus-ring rounded px-2 py-1 ${
                pathname === href
                  ? "text-accent-gold"
                  : "text-leather-700 hover:text-leather-900"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden p-2 text-leather-700 hover:text-leather-900 focus-ring rounded"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-leather-200 bg-leather-50">
          <nav
            className="container-tight flex flex-col gap-1 py-4"
            aria-label="Menú móvil"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium focus-ring ${
                  pathname === href
                    ? "bg-leather-200/60 text-leather-900"
                    : "text-leather-700 hover:bg-leather-100"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
