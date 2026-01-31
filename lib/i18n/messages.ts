/**
 * Carga de mensajes de traducción y función t (traducir).
 *
 * - getMessages(locale): devuelve el objeto de mensajes para ese idioma (fallback a es).
 * - createT(messages): crea la función t(key) que resuelve claves anidadas, ej. "nav.home" → messages.nav.home.
 */

import type { Locale } from "./config";
import es from "./translations/es";
import en from "./translations/en";
import ru from "./translations/ru";

const messages = { es, en, ru };

export type Messages = typeof es;

/** Devuelve los mensajes del idioma indicado; si no existe, usa español. */
export function getMessages(locale: Locale): Messages {
  return (messages[locale] ?? messages.es) as Messages;
}

/** Resuelve una clave con notación de punto (ej. "catalog.categories.carteras") en un objeto anidado. */
function getNested(
  obj: Record<string, unknown>,
  path: string
): string | undefined {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === "string" ? current : undefined;
}

/**
 * Crea la función t(key) para un objeto de mensajes.
 * Si la clave no existe, devuelve la propia clave (útil para detectar cadenas sin traducir).
 */
export function createT(messages: Messages) {
  return function t(key: string): string {
    return (
      getNested(messages as unknown as Record<string, unknown>, key) ?? key
    );
  };
}
