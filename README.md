# Fusión Digital — Sitio web

Sitio web multipágina de **Fusión Digital**, agencia de marketing que integra estrategia, medios, creatividad, multimedia y desarrollo tecnológico. Cada sección del menú es una ruta real (sin one-page), con transiciones animadas, puntero personalizado y la identidad de marca oficial.

## Tecnologías

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (tokens de marca en `src/index.css`)
- React Router DOM (rutas independientes, enlaces directos y botón Atrás)
- Framer Motion (transiciones de página, cursor, animaciones; respeta `prefers-reduced-motion`)
- Lucide React (iconos) + SVG propios para Instagram/Facebook
- Netlify Forms (contacto y postulaciones) y Netlify Image CDN (imágenes optimizadas)

## Ejecutar en local

```bash
npm install
netlify dev   # recomendado: emula Netlify Forms e Image CDN
# o bien
npm run dev   # solo Vite; las imágenes /.netlify/images y los formularios no funcionan aquí
```

## Rutas

| Sección | Rutas |
| --- | --- |
| Inicio | `/` |
| Servicios | `/servicios`, `/servicios/{estrategia,medios,creatividad,multimedia,development}` |
| Talento | `/talento`, `/talento/{fusionados-leader,oportunidades,panda-trainee}` |
| Trabajo | `/trabajo`, `/trabajo/{princesasmd,backtoschool,impactx,gatorade}` |
| Blog | `/blog`, `/blog/{tendencias-digitales,inteligencia-artificial-marketing,consumo-online-centroamerica}` |
| Contacto | `/contacto` |
| Legales | `/privacidad`, `/terminos` |
| 404 | cualquier otra ruta |

## Formularios

Los formularios de **Contacto** y **Postulación** (Oportunidades y Panda Trainee) se envían a **Netlify Forms**. Están registrados en `public/__forms.html`; las respuestas aparecen en el panel de Netlify → *Forms*, donde también puedes activar notificaciones por correo. Si el envío falla, el usuario ve un error real (nunca se simula un éxito).

Para usar otro proveedor (Formspree, un endpoint propio…), define la variable de entorno `VITE_FORM_ENDPOINT`; los datos se enviarán como JSON a esa URL (`src/lib/forms.ts`).

## Editar contenido

Todo el contenido vive en `src/data/`:

- `site.ts` — correo, teléfono y **código de país** del enlace `tel:` (por defecto `+503`), redes sociales y menú.
- `services.ts` — los cinco servicios y sus subpáginas.
- `projects.ts` — casos de éxito y métricas (solo métricas verificadas).
- `blog.ts` — artículos (fechas editables).
- `talent.ts` — vacantes (`jobs`), requisitos de Panda Trainee, testimonios y clientes.

## Pendiente por parte de la marca

- Modelo 3D interactivo del panda: reemplazar el contenido de `PandaSlot` (`src/components/ui/PandaSlot.tsx`). Hoy se muestra el render oficial.
- Logos oficiales de clientes (St Jacks, MD Te Entiende, The Coffee Cup) en el carrusel.
- Fotografías del equipo y de los proyectos (marcadas como «Espacio para fotografía»).
- Testimonios aprobados (los actuales están marcados como demostrativos).
- Resultados verificados de Princesas MD, Back to School y Gatorade.
- Video de fondo para el hero (opcional; hoy hay una composición animada).
- Revisión legal de privacidad y términos.

El contenido del pitch deck de la agencia está en `PITCH_DECK.md`.
