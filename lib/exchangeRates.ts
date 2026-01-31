/**
 * Tipos de cambio para convertir precios (base: COP) a USD y RUB.
 * Se obtienen de Frankfurter (ECB), sin API key, actualizados diariamente.
 * Uso: getExchangeRates() con caché 24h; convertAndFormatPrice(priceCOP, locale, rates) para mostrar precio.
 */
import type { Locale } from "@/lib/i18n/config";
import { formatPrice } from "@/lib/format";

const BASE_CURRENCY = "COP";
const RATES_API_URL = "https://api.frankfurter.app/v1/latest";
const RATES_QUERY = `base=${BASE_CURRENCY}&symbols=USD,RUB`;

export type DisplayCurrency = "COP" | "USD" | "RUB";

/** Moneda de visualización por idioma: es=Colombia (COP), en=USD, ru=RUB. */
export const localeToCurrency: Record<Locale, DisplayCurrency> = {
  es: "COP",
  en: "USD",
  ru: "RUB",
};

export type ExchangeRates = {
  USD: number;
  RUB: number;
  /** Fecha de los tipos (YYYY-MM-DD). */
  date: string;
};

/**
 * Obtiene tipos de cambio COP → USD y COP → RUB.
 * Next.js cachea la respuesta 24h (revalidate: 86400).
 */
export async function getExchangeRates(): Promise<ExchangeRates> {
  const url = `${RATES_API_URL}?${RATES_QUERY}`;
  const res = await fetch(url, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    return getFallbackRates();
  }

  const data = (await res.json()) as {
    base?: string;
    rates?: { USD?: number; RUB?: number };
    date?: string;
  };

  const USD = data.rates?.USD;
  const RUB = data.rates?.RUB;

  if (typeof USD !== "number" || typeof RUB !== "number") {
    return getFallbackRates();
  }

  return {
    USD,
    RUB,
    date: data.date ?? new Date().toISOString().slice(0, 10),
  };
}

/** Tasas de respaldo si la API falla (aproximadas). */
function getFallbackRates(): ExchangeRates {
  return {
    USD: 0.00024,
    RUB: 0.022,
    date: new Date().toISOString().slice(0, 10),
  };
}

/**
 * Convierte precio en COP a la moneda del locale y lo formatea.
 * Si locale es es (COP), no convierte. Si no hay rates, formatea en COP.
 */
export function convertAndFormatPrice(
  priceInCOP: number,
  locale: Locale,
  rates: ExchangeRates | null
): string {
  const currency = localeToCurrency[locale];

  if (currency === "COP" || !rates) {
    return formatPrice(priceInCOP, "COP", locale);
  }

  const rate = rates[currency];
  if (typeof rate !== "number") {
    return formatPrice(priceInCOP, "COP", locale);
  }

  const converted = priceInCOP * rate;
  return formatPrice(converted, currency, locale);
}
