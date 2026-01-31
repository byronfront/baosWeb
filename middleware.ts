/**
 * Middleware de internacionalización (i18n).
 *
 * Flujo:
 * 1. Si la URL ya tiene un locale válido (/es, /en, /ru o subrutas), deja pasar la petición.
 * 2. Si la URL es "/" o no tiene locale, redirige a la misma ruta con el locale por defecto.
 * 3. El locale se obtiene de: cookie NEXT_LOCALE > cabecera Accept-Language > defaultLocale (es).
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isValidLocale } from "@/lib/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Comprueba si la ruta empieza por un locale soportado
  const pathnameHasLocale =
    pathname.startsWith("/es") ||
    pathname.startsWith("/en") ||
    pathname.startsWith("/ru");

  // Si ya tiene locale, extrae el primer segmento y valida (evita /español, etc.)
  if (pathnameHasLocale) {
    const segment = pathname.slice(1).split("/")[0];
    if (isValidLocale(segment)) {
      return NextResponse.next();
    }
  }

  // Ruta sin locale o raíz: redirigir añadiendo el locale
  if (pathname === "/" || !pathnameHasLocale) {
    const locale =
      request.cookies.get("NEXT_LOCALE")?.value ||
      request.headers.get("accept-language")?.split(",")[0]?.slice(0, 2) ||
      defaultLocale;
    const resolved =
      locale === "en" || locale === "ru" ? locale : defaultLocale;
    const url = request.nextUrl.clone();
    url.pathname =
      pathname === "/" ? `/${resolved}` : `/${resolved}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Excluye archivos estáticos y recursos de Next.js del middleware
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
