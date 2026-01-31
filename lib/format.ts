/**
 * Utilidades de formato: precios según locale y URL de WhatsApp.
 */

// Locale del sitio (es/en/ru) → locale de Intl para números y moneda
const localeToNumberFormat: Record<string, string> = {
  es: "es-CO",
  en: "en-US",
  ru: "ru-RU",
};

/**
 * Formatea un precio como moneda según el idioma actual.
 * @param price - Valor numérico.
 * @param currency - Código ISO (ej. COP, USD).
 * @param locale - Idioma del sitio (es | en | ru) para formato regional.
 */
export function formatPrice(
  price: number,
  currency = "COP",
  locale?: string
): string {
  const localeKey = locale ?? "es";
  const numberLocale = localeToNumberFormat[localeKey] ?? "es-CO";
  return new Intl.NumberFormat(numberLocale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Genera la URL de WhatsApp con número y mensaje opcional.
 * El número se normaliza quitando todo lo que no sea dígito.
 */
export function formatWhatsAppUrl(phone: string, message?: string): string {
  const clean = phone.replace(/\D/g, "");
  const text = message
    ? encodeURIComponent(message)
    : encodeURIComponent("Hola, vi su página y me interesa consultar.");
  return `https://wa.me/${clean}?text=${text}`;
}
