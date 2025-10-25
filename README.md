# Analytics Core Landing

Landing page estática para Analytics Core, construida con **Tailwind CSS 4** y JavaScript minimalista. Incluye sección comercial, contactos, biografía del equipo y páginas legales (aviso de privacidad, política de privacidad y términos).

## Requisitos

- Node.js 18+

## Scripts

```bash
npm install         # Instala dependencias
npm run build:css   # Compila Tailwind a public/tailwind.css
npm run watch:css   # Reconstruye estilos al editar
```

## Desarrollo local

```bash
python3 -m http.server 8000
# Visita http://localhost:8000/ (redirige a LandingAnalyticsCore.html)
```

## Estructura

- `LandingAnalyticsCore.html`: landing principal.
- `assets/js/main.js`: interacción mínima (menú móvil y formulario).
- `public/tailwind.css`: estilos compilados.
- `privacidad.html`, `aviso-privacidad.html`, `terminos.html`: páginas legales.

## Despliegue

1. Ejecuta `npm run build:css`.
2. Publica el contenido del repositorio en tu hosting (GitHub Pages, Vercel, S3/CloudFront, etc.).
