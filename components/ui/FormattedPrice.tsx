"use client";

/**
 * Muestra un precio en COP convertido a la moneda del locale (es=COP, en=USD, ru=RUB).
 * Usa los tipos de cambio del contexto (actualizados cada 24h).
 */
import type { Locale } from "@/lib/i18n/config";
import { useExchangeRates } from "@/contexts/ExchangeRatesContext";

type FormattedPriceProps = {
  priceInCOP: number;
  locale: Locale;
};

export function FormattedPrice({ priceInCOP, locale }: FormattedPriceProps) {
  const { formatPrice } = useExchangeRates();
  return <>{formatPrice(priceInCOP, locale)}</>;
}
