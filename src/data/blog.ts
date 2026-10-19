/*
  Artículos del blog. Contenido de muestra editable: no contiene estadísticas ni estudios
  presentados como hechos. Antes de publicar, el equipo debe revisar fechas y añadir fuentes.
*/

export type BlogBlock = { heading: string; paragraphs: string[]; bullets?: string[] }

export type BlogPost = {
  slug: string
  title: string
  category: 'Tendencias' | 'Tecnología' | 'Mercado'
  /** Fecha editable en formato ISO */
  date: string
  readingMinutes: number
  image: string
  excerpt: string
  intro: string
  blocks: BlogBlock[]
  featured?: boolean
}

export const blogCategories = ['Todos', 'Tendencias', 'Tecnología', 'Mercado'] as const

export const posts: BlogPost[] = [
  {
    slug: 'tendencias-digitales',
    title: 'Tendencias digitales 2025-2026',
    category: 'Tendencias',
    date: '2026-01-15',
    readingMinutes: 6,
    image: '/img/blog-tendencias.jpg',
    excerpt: 'Las conversaciones que están moldeando el marketing digital y cómo preparar a tu marca para ellas.',
    intro:
      'Cada año aparecen nuevas plataformas, formatos y hábitos. Más que perseguir cada novedad, la clave está en entender qué cambios afectan de verdad la relación entre tu marca y tu público.',
    featured: true,
    blocks: [
      {
        heading: 'El video corto sigue marcando el ritmo',
        paragraphs: [
          'Los formatos verticales y breves se han vuelto el lenguaje común de las redes. Para las marcas, esto significa pensar primero en los primeros segundos: si no capturas la atención al inicio, el resto del mensaje no llega.',
        ],
        bullets: ['Diseña para ver sin sonido', 'Usa subtítulos y texto en pantalla', 'Prueba varias aperturas para un mismo mensaje'],
      },
      {
        heading: 'Creadores como aliados, no como vallas',
        paragraphs: [
          'Las colaboraciones con creadores funcionan mejor cuando se les da espacio para contar la historia a su manera. Una red de perfiles afines suele generar más confianza que una sola cara famosa.',
        ],
      },
      {
        heading: 'Comunidad por encima del alcance',
        paragraphs: [
          'Las marcas que responden, conversan y crean espacios para su público construyen relaciones más duraderas que las que solo publican anuncios.',
        ],
      },
      {
        heading: 'Cómo empezar',
        paragraphs: [
          'Elige una o dos tendencias alineadas con tus objetivos, pruébalas con un presupuesto controlado y mide antes de escalar.',
        ],
      },
    ],
  },
  {
    slug: 'inteligencia-artificial-marketing',
    title: 'Inteligencia Artificial en Marketing',
    category: 'Tecnología',
    date: '2026-02-10',
    readingMinutes: 7,
    image: '/img/blog-ia.jpg',
    excerpt: 'Usos prácticos de la IA para equipos de marketing, y los límites que conviene conocer.',
    intro:
      'La inteligencia artificial ya forma parte del día a día de muchos equipos creativos y de medios. Bien utilizada, libera tiempo para lo que más importa: las ideas y las personas.',
    featured: true,
    blocks: [
      {
        heading: 'Dónde ayuda hoy',
        paragraphs: ['La IA es especialmente útil en tareas repetitivas o de exploración inicial.'],
        bullets: [
          'Generar variaciones de copy para pruebas A/B',
          'Resumir reportes y encontrar patrones en datos',
          'Explorar referencias visuales en la etapa de concepto',
          'Automatizar respuestas frecuentes en canales digitales',
        ],
      },
      {
        heading: 'Lo que no reemplaza',
        paragraphs: [
          'El criterio estratégico, el conocimiento del contexto local y la sensibilidad creativa siguen siendo humanos. La IA propone; el equipo decide.',
        ],
      },
      {
        heading: 'Buenas prácticas',
        paragraphs: [
          'Revisa siempre la información generada, protege los datos de tus clientes y sé transparente cuando un contenido se haya creado con apoyo de IA.',
        ],
      },
      {
        heading: 'El enfoque de Fusión Digital',
        paragraphs: [
          'Integramos herramientas de IA en investigación, producción y optimización de campañas, siempre con supervisión de nuestro equipo.',
        ],
      },
    ],
  },
  {
    slug: 'consumo-online-centroamerica',
    title: 'Consumo online en El Salvador y Centroamérica',
    category: 'Mercado',
    date: '2026-03-05',
    readingMinutes: 5,
    image: '/img/blog-consumo.jpg',
    excerpt: 'Claves para entender cómo compra el consumidor digital en la región y cómo llegar a él.',
    intro:
      'Cada vez más personas en la región descubren, comparan y compran productos desde su teléfono. Entender ese recorrido es esencial para cualquier marca que quiera crecer.',
    blocks: [
      {
        heading: 'El celular como punto de partida',
        paragraphs: [
          'Para muchos consumidores, el primer contacto con una marca ocurre en redes sociales o en una app de mensajería. Tu presencia móvil debe ser rápida, clara y confiable.',
        ],
      },
      {
        heading: 'La confianza decide la compra',
        paragraphs: ['Reseñas, atención rápida y métodos de pago claros reducen la duda en el momento de comprar.'],
        bullets: ['Muestra opiniones reales de clientes', 'Responde mensajes con rapidez', 'Explica envíos y devoluciones'],
      },
      {
        heading: 'Lo local importa',
        paragraphs: [
          'Las campañas que hablan con expresiones, referencias y escenarios locales suelen conectar mejor que los mensajes genéricos.',
        ],
      },
      {
        heading: 'Antes de decidir, mide',
        paragraphs: [
          'Te recomendamos complementar este artículo con estudios de mercado actualizados y con los datos de tus propios canales antes de definir una estrategia.',
        ],
      },
    ],
  },
]

export const getPost = (slug?: string) => posts.find((p) => p.slug === slug)

export function formatDate(iso: string) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('es-SV', { day: 'numeric', month: 'long', year: 'numeric' })
}
