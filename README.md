# CV — Pedro J. Acosta Mereles

Currículum vitae interactivo multilenguaje (ES / EN / PT) con diseño editorial, animaciones y descarga PDF.

## Stack
- React 18 + Vite 5
- CSS puro (sin dependencias de UI)
- Fuentes: Cormorant Garamond + DM Sans (Google Fonts)

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir http://localhost:5173

## Build

```bash
npm run build
# output en /dist
```

## Deploy en Render (Static Site)

1. Subir este proyecto a un repositorio GitHub
2. En [render.com](https://render.com) → **New → Static Site**
3. Conectar el repositorio
4. Configurar:

| Campo | Valor |
|-------|-------|
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |
| **Node Version** | `18` (en Environment → Add env var: `NODE_VERSION = 18`) |

5. Click **Create Static Site** → Render despliega automáticamente

## Notas
- El año en el CV se genera automáticamente con `new Date().getFullYear()`
- El botón "Descargar PDF" usa el diálogo de impresión nativo del navegador → elegir "Guardar como PDF" y activar "Gráficos de fondo"
- En cada push a `main`, Render redespliega automáticamente
