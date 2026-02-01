/**
 * Página 404 raíz: se muestra cuando la ruta no coincide con ningún segmento
 * (por ejemplo locale inválido o ruta inexistente). Enlaza a /es como inicio.
 */
import Link from "next/link";

export default function RootNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 font-sans">
      <h1 className="text-2xl font-semibold text-leather-900 dark:text-leather-50">404</h1>
      <p className="mt-4 text-leather-700 dark:text-leather-300">Página no encontrada.</p>
      <Link
        href="/es"
        className="mt-8 rounded-lg bg-leather-800 px-6 py-3 text-sm font-medium text-white hover:bg-leather-900 dark:bg-leather-700 dark:hover:bg-leather-600"
      >
        Ir al inicio
      </Link>
    </div>
  );
}
