/**
 * Layout por idioma (app/[locale]/...).
 *
 * Flujo:
 * 1. Next.js pasa params.locale desde la URL (/es, /en, /ru).
 * 2. Si el locale no es válido, se muestra 404 (app/not-found.tsx o el de [locale]).
 * 3. Se cargan las traducciones para ese locale y se envuelve todo en I18nProvider.
 * 4. Header y Footer se montan aquí para que usen useI18n(); el contenido de la página va en {children}.
 */
import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { locales, isValidLocale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import { I18nProvider } from "@/contexts/I18nContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { notFound } from "next/navigation";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

/** Genera las rutas estáticas /es, /en, /ru para el build. */
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/** Metadata por idioma (Open Graph, alternates para SEO). */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const lang = locale === "es" ? "es_ES" : locale === "en" ? "en_US" : "ru_RU";
  return {
    openGraph: { locale: lang },
    alternates: {
      languages: { es: "/es", en: "/en", ru: "/ru" },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const messages = getMessages(locale as Locale);
  const lang = locale === "es" ? "es" : locale === "en" ? "en" : "ru";

  return (
    <I18nProvider locale={locale as Locale} messages={messages}>
      <div lang={lang} className="contents">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
