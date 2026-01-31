/**
 * Configuración de idiomas soportados (i18n).
 *
 * - locales: lista de códigos de idioma usados en la URL (/es, /en, /ru).
 * - defaultLocale: idioma por defecto cuando no se detecta preferencia.
 * - localeNames: nombre del idioma en su propio idioma (para selector en la UI).
 * - isValidLocale: type guard para comprobar que un string es un locale válido.
 */

export const locales = ["es", "en", "ru"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  ru: "Русский",
};

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
