/*
  Casos de éxito. Solo se muestran métricas proporcionadas por Fusión Digital.
  Los campos `pending` marcan contenido que debe completar el equipo con datos verificados.
*/

export type ProjectCategory = 'Guerrilla' | 'Influencers' | 'Performance' | 'Campañas'

export type CaseSection = { title: string; body: string[]; pending?: boolean }

export type Project = {
  slug: string
  client: string
  name: string
  title: string
  summary: string
  categories: ProjectCategory[]
  services: string[]
  /** Métricas confirmadas por la agencia. Vacío = ninguna verificada aún. */
  metrics: { value: string; label: string }[]
  gradient: string
  sections: CaseSection[]
  gallery: string[]
}

export const projectCategories: ('Todos' | ProjectCategory)[] = ['Todos', 'Guerrilla', 'Influencers', 'Performance', 'Campañas']

export const projects: Project[] = [
  {
    slug: 'princesasmd',
    client: 'MD Te Entiende',
    name: 'Las princesas también usan tenis',
    title: 'Marketing de guerrilla en las calles de SS',
    summary: 'Una activación urbana que llevó el mensaje de la marca directamente a las calles de San Salvador.',
    categories: ['Guerrilla', 'Campañas'],
    services: ['Estrategia', 'Creatividad', 'Multimedia'],
    metrics: [],
    gradient: 'from-[#3A0F5E] via-[#A98BEA] to-[#7B9BD6]',
    sections: [
      {
        title: 'Contexto',
        body: [
          '«Las princesas también usan tenis» nació como una idea para romper el molde: sacar la marca de las pantallas y llevarla a la calle, donde ocurre la vida real.',
        ],
      },
      {
        title: 'Desafío',
        body: ['Generar conversación genuina y recordación de marca en un entorno saturado de publicidad tradicional.'],
      },
      {
        title: 'Estrategia',
        body: [
          'Apostamos por el marketing de guerrilla: una intervención inesperada, fotografiable y fácil de compartir, que transformara a los transeúntes en difusores del mensaje.',
        ],
      },
      {
        title: 'Ejecución',
        body: [
          'Diseño del concepto, producción de piezas y coordinación de la activación en puntos estratégicos de San Salvador, con cobertura audiovisual para redes sociales.',
        ],
      },
      {
        title: 'Resultados',
        body: ['Espacio reservado para los resultados verificados de la campaña (alcance, interacciones, menciones).'],
        pending: true,
      },
    ],
    gallery: ['Activación en calle', 'Piezas de campaña', 'Cobertura en redes', 'Detrás de cámaras'],
  },
  {
    slug: 'backtoschool',
    client: 'St Jacks',
    name: 'Back School',
    title: 'Campaña de regreso a clases con 10 influencers para St Jacks',
    summary: 'Una campaña de temporada escolar impulsada por una red de 10 creadores de contenido.',
    categories: ['Influencers', 'Campañas'],
    services: ['Estrategia', 'Medios', 'Multimedia'],
    metrics: [{ value: '10', label: 'influencers activados' }],
    gradient: 'from-[#1A1630] via-[#3B2A5E] to-[#BFA6EE]',
    sections: [
      {
        title: 'Contexto de campaña',
        body: ['El regreso a clases es una de las temporadas más competidas del año para las marcas de calzado y moda escolar.'],
      },
      {
        title: 'Objetivo',
        body: ['Posicionar a St Jacks como la opción natural para el regreso a clases entre familias y estudiantes.'],
      },
      {
        title: 'Estrategia con influencers',
        body: [
          'Seleccionamos 10 influencers con audiencias afines a la marca y diseñamos una narrativa común que cada creador adaptó a su propio estilo.',
        ],
      },
      {
        title: 'Ejecución',
        body: [
          'Briefs creativos, coordinación de contenidos, calendario de publicaciones y amplificación del material en los canales de la marca.',
        ],
      },
      {
        title: 'Resultados disponibles',
        body: ['Espacio reservado para las métricas verificadas de alcance, interacción y ventas de la campaña.'],
        pending: true,
      },
    ],
    gallery: ['Contenido de influencers', 'Producto en escena', 'Stories de campaña', 'Piezas para pauta'],
  },
  {
    slug: 'impactx',
    client: 'ImpactX',
    name: 'Transformación de captación',
    title: 'Transformación de captación del +850% para ImpactX',
    summary: 'Rediseño del embudo de captación digital con estrategia, pauta optimizada y desarrollo web.',
    categories: ['Performance'],
    services: ['Estrategia', 'Medios', 'Development'],
    metrics: [{ value: '+850%', label: 'en captación' }],
    gradient: 'from-[#121014] via-[#3B2A5E] to-[#7B9BD6]',
    sections: [
      { title: 'Contexto', body: ['ImpactX necesitaba convertir su presencia digital en un canal constante de nuevos prospectos.'] },
      { title: 'Desafío', body: ['Aumentar la captación sin perder el control del costo por resultado.'] },
      {
        title: 'Estrategia',
        body: ['Replanteamos el embudo completo: mensajes por etapa, segmentación de audiencias y una experiencia de conversión más simple.'],
      },
      { title: 'Ejecución', body: ['Campañas de pauta optimizadas semanalmente y mejoras en los puntos de conversión del sitio.'] },
      { title: 'Resultados', body: ['La captación creció un +850%.'] },
    ],
    gallery: ['Embudo de conversión', 'Creatividades de pauta', 'Landing page', 'Tablero de métricas'],
  },
  {
    slug: 'gatorade',
    client: 'Gatorade',
    name: 'Campaña deportiva',
    title: 'Campaña deportiva con 60 influencers para Gatorade',
    summary: 'Una red de 60 creadores llevando la energía del deporte a las redes sociales.',
    categories: ['Influencers', 'Campañas'],
    services: ['Estrategia', 'Creatividad', 'Multimedia'],
    metrics: [{ value: '60', label: 'influencers activados' }],
    gradient: 'from-[#3A0F5E] via-[#3B2A5E] to-[#A98BEA]',
    sections: [
      { title: 'Contexto', body: ['Gatorade buscaba conectar con una comunidad deportiva activa y diversa en redes sociales.'] },
      { title: 'Desafío', body: ['Coordinar a una gran red de creadores manteniendo un mensaje de marca consistente.'] },
      {
        title: 'Estrategia',
        body: ['Construimos una red de 60 influencers de distintas disciplinas deportivas con una línea creativa compartida.'],
      },
      { title: 'Ejecución', body: ['Selección de perfiles, briefs, calendario, revisión de contenidos y seguimiento de publicaciones.'] },
      { title: 'Resultados', body: ['Espacio reservado para las métricas verificadas de la campaña.'], pending: true },
    ],
    gallery: ['Creadores en acción', 'Contenido deportivo', 'Piezas de marca', 'Cobertura de campaña'],
  },
]

export const getProject = (slug?: string) => projects.find((p) => p.slug === slug)
