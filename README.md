# Bao — Tienda de cuero artesanal

Sitio web de la tienda de artículos de cuero hechos a mano. Next.js 14, TypeScript y Tailwind CSS.

## Requisitos

- Node.js 18+
- npm

## Instalación

```bash
npm install
```

Si ves un error `EACCES` relacionado con la caché de npm, en tu sistema podés corregir permisos con:  
`sudo chown -R $(whoami) ~/.npm`

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build para producción

```bash
npm run build
npm start
```

## Estructura del proyecto

- `app/` — Rutas y páginas (App Router)
- `components/` — Componentes reutilizables (layout, home, ui)
- `lib/` — Datos, utilidades y formato
- `types/` — Tipos TypeScript
- `public/` — Archivos estáticos (imágenes de productos, favicon)

## Personalización

### Datos de la tienda

- **Contacto:** edita `lib/data.ts` → objeto `contact` (email, WhatsApp, dirección, Instagram).
- **Productos:** edita el array `products` en `lib/data.ts`. Cada producto tiene: nombre, descripción, precio, categoría, imágenes y si es destacado.

### Imágenes de productos

Las imágenes pueden ser:

1. **URLs externas:** usa `src` con URL completa (dominio permitido en `next.config.ts` → `images.remotePatterns`).
2. **Archivos locales:** coloca las imágenes en `public/images/products/` y usa rutas como `/images/products/tu-foto.jpg`.

Recomendación: comprimir fotos antes de subir (por ejemplo con [Squoosh](https://squoosh.app)) para mejor rendimiento.

### Dominio y SEO

Crea un archivo `.env.local` en la raíz:

```env
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

Así las URLs en Open Graph y metadata serán correctas al compartir en redes.

## Despliegue (Vercel)

1. Sube el proyecto a GitHub.
2. En [vercel.com](https://vercel.com) importa el repositorio.
3. Deja las opciones por defecto y despliega.
4. Opcional: en el proyecto de Vercel, Settings → Environment Variables → añade `NEXT_PUBLIC_SITE_URL` con tu dominio.

## Scripts

| Comando   | Descripción              |
| --------- | ------------------------- |
| `npm run dev`   | Servidor de desarrollo |
| `npm run build` | Build de producción       |
| `npm start`     | Servidor de producción    |
| `npm run lint`  | Ejecutar ESLint           |
