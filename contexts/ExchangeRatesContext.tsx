"use client";

/**
 * Contexto de tipos de cambio para mostrar precios en la moneda del país (COP, USD, RUB).
 * El layout obtiene las tasas en el servidor (caché 24h) y las pasa aquí.
 * FormattedPrice usa este contexto para convertir y formatear.
 */
import { createContext, useContext } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { ExchangeRates } from "@/lib/exchangeRates";
import { convertAndFormatPrice } from "@/lib/exchangeRates";

type ExchangeRatesContextValue = {
  rates: ExchangeRates | null;
  formatPrice: (priceInCOP: number, locale: Locale) => string;
};

const ExchangeRatesContext = createContext<ExchangeRatesContextValue | null>(
  null
);

export function ExchangeRatesProvider({
  rates,
  children,
}: {
  rates: ExchangeRates | null;
  children: React.ReactNode;
}) {
  const formatPrice = (priceInCOP: number, locale: Locale) =>
    convertAndFormatPrice(priceInCOP, locale, rates);

  return (
    <ExchangeRatesContext.Provider value={{ rates, formatPrice }}>
      {children}
    </ExchangeRatesContext.Provider>
  );
}

export function useExchangeRates(): ExchangeRatesContextValue {
  const ctx = useContext(ExchangeRatesContext);
  if (!ctx)
    return {
      rates: null,
      formatPrice: (priceInCOP, locale) =>
        convertAndFormatPrice(priceInCOP, locale, null),
    };
  return ctx;
}
