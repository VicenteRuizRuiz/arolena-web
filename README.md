# Arolena — Web del restaurante

Web oficial del **Restaurante Arolena Sabores Mediterráneos** (Albolote, Granada).
Construida con **Next.js 14 (App Router)**, **TypeScript** y **Tailwind CSS**. Lista para desplegar en **Vercel**.

## Requisitos

- Node.js 18.18+ (recomendado 20 LTS).
- npm 9+ (o pnpm/yarn).

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Build de producción

```bash
npm run build
npm start
```

## Estructura

```
src/
  app/
    layout.tsx        # Layout global, metadatos SEO, JSON-LD
    page.tsx          # Home
    carta/page.tsx    # /carta
    galeria/page.tsx  # /galeria
    sitemap.ts        # /sitemap.xml
    robots.ts         # /robots.txt
    globals.css
  components/         # Header, Hero, WoodOvenSection, ...
  data/
    menu.json         # Carta (editar aquí)
    restaurantInfo.ts # Teléfono, dirección, redes, horarios
    menu.types.ts     # Tipos preparados para alérgenos, opciones, etc.
  lib/
    getImages.ts      # Lectura de imágenes desde /public/images
public/
  images/
    platos/           # Fotos de platos
    restaurante/      # Fotos del salón y terraza
  favicon.svg
```

## Editar la carta

Edita `src/data/menu.json`. Cada categoría tiene `items` con `nombre`, `precio` y opcionalmente `descripcion`.
La estructura admite añadir en el futuro: `id`, `imagen`, `alergenos`, `disponible`, `recomendado`, `vegetariano`, `opciones`.

## Añadir o cambiar imágenes

Copia los archivos en:

- `public/images/platos/`
- `public/images/restaurante/`

Formatos admitidos: `.jpg`, `.jpeg`, `.png`, `.webp`. La galería los detecta automáticamente al hacer build.

## Editar datos de contacto, horario o redes

Edita `src/data/restaurantInfo.ts`.

## Despliegue en Vercel

1. Crea un repositorio en GitHub y sube esta carpeta.
2. Entra en https://vercel.com → **Add New → Project** → importa el repo.
3. Framework: Next.js (autodetectado). No necesita variables de entorno.
4. (Opcional) Tras el primer deploy, define `NEXT_PUBLIC_SITE_URL` con tu URL definitiva para mejorar SEO/sitemap.
5. Pulsa **Deploy**.

## Preparado para el futuro

La arquitectura está pensada para añadir sin rehacer la web:

- Reservas online (`/reservas`) con backend.
- Pedidos online (`/pedidos`).
- Panel de administración (`/admin`) — calendario de reservas para clientes.
- CMS para carta e imágenes.
- Pasarela de pago e integración con delivery.

Datos y presentación están separados (`/data`, `/components`).
