"use client";

/**
 * Contexto de internacionalización (i18n).
 *
 * Proporciona a los componentes cliente:
 * - locale: idioma actual (es | en | ru).
 * - t(key): traduce una clave, ej. t("nav.home") → "Inicio".
 * - localizedPath(path): prefija la ruta con el locale, ej. localizedPath("/catalogo") → "/es/catalogo".
 *
 * Uso: en app/[locale]/layout.tsx se envuelve la app con I18nProvider;
 * los componentes que necesiten traducciones usan useI18n().
 */
import { createContext, useContext, useMemo } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Messages } from "@/lib/i18n/messages";
import { createT } from "@/lib/i18n/messages";

type I18nContextValue = {
  locale: Locale;
  t: (key: string) => string;
  localizedPath: (path: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

/**
 * Proveedor del contexto i18n. Debe envolver toda la UI que use useI18n().
 * Se usa en app/[locale]/layout.tsx con el locale y mensajes del servidor.
 */
export function I18nProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale;
  messages: Messages;
  children: React.ReactNode;
}) {
  const value = useMemo(() => {
    const t = createT(messages);
    const localizedPath = (path: string) => {
      const base = path.startsWith("/") ? path : `/${path}`;
      return `/${locale}${base}`;
    };
    return { locale, t, localizedPath };
  }, [locale, messages]);

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

/**
 * Hook para acceder al locale, traducir (t) y generar rutas localizadas (localizedPath).
 * Solo funciona dentro de un árbol envuelto por I18nProvider.
 */
export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
