import type { LucideIcon } from 'lucide-react'
import { Compass, Megaphone, Palette, Clapperboard, CodeXml } from 'lucide-react'

export type Service = {
  slug: string
  name: string
  short: string
  icon: LucideIcon
  /** Clases del fondo temático de la tarjeta/hero */
  theme: string
  heroTitle: string
  heroLead: string
  description: string[]
  problems: { title: string; text: string }[]
  includes: string[]
  methodTitle: string
  method: { step: string; text: string }[]
  /** slugs de proyectos relacionados en /trabajo */
  related: string[]
}

export const services: Service[] = [
  {
    slug: 'estrategia',
    name: 'Estrategia',
    short: 'Planificación y conexión sólida.',
    icon: Compass,
    theme: 'bg-strategy',
    heroTitle: 'Un rumbo claro antes de invertir un solo dólar.',
    heroLead:
      'Convertimos objetivos de negocio en planes de marketing medibles: a quién hablarle, qué decirle, dónde y cuándo.',
    description: [
      'La estrategia es el punto donde todo lo demás cobra sentido. Analizamos tu mercado, tu competencia y a tus clientes para encontrar el espacio que tu marca puede ocupar con autoridad.',
      'El resultado es una hoja de ruta compartida por todo tu equipo, con prioridades, indicadores y un calendario realista.',
    ],
    problems: [
      { title: 'Acciones sueltas', text: 'Publicas, pautas y lanzas, pero nada se conecta con un objetivo concreto.' },
      { title: 'Mensaje difuso', text: 'Tu público no tiene claro qué te hace diferente frente a la competencia.' },
      { title: 'Presupuesto sin brújula', text: 'No sabes qué canal o campaña está generando crecimiento real.' },
    ],
    includes: [
      'Diagnóstico de marca y mercado',
      'Definición de buyer persona',
      'Posicionamiento y propuesta de valor',
      'Plan de marketing anual o por campaña',
      'Arquitectura de mensajes',
      'KPIs y tablero de seguimiento',
    ],
    methodTitle: 'Del diagnóstico al plan',
    method: [
      { step: 'Escuchar', text: 'Sesiones con tu equipo y revisión de datos históricos.' },
      { step: 'Investigar', text: 'Mercado, competencia, audiencia y conversación digital.' },
      { step: 'Definir', text: 'Posicionamiento, objetivos y mensajes clave.' },
      { step: 'Planificar', text: 'Canales, calendario, presupuesto e indicadores.' },
    ],
    related: ['princesasmd', 'impactx'],
  },
  {
    slug: 'medios',
    name: 'Medios',
    short: 'Optimización de pauta.',
    icon: Megaphone,
    theme: 'bg-data',
    heroTitle: 'Cada impresión, en el lugar correcto.',
    heroLead:
      'Planificamos, compramos y optimizamos pauta digital y tradicional con un foco: que tu inversión rinda más cada semana.',
    description: [
      'Gestionamos campañas en Meta, Google, TikTok y otros canales, combinando segmentación precisa con creatividades pensadas para cada formato.',
      'Medimos de forma continua y movemos el presupuesto hacia lo que funciona, con reportes que puedes entender sin ser especialista.',
    ],
    problems: [
      { title: 'Costos que suben', text: 'Pagas cada vez más por resultado y no sabes por qué.' },
      { title: 'Audiencias equivocadas', text: 'Tus anuncios llegan a mucha gente, pero no a la correcta.' },
      { title: 'Reportes opacos', text: 'Recibes métricas de vanidad en lugar de información para decidir.' },
    ],
    includes: [
      'Plan de medios multicanal',
      'Configuración de campañas y píxeles',
      'Segmentación y audiencias personalizadas',
      'Pruebas A/B de creatividades',
      'Optimización semanal de presupuesto',
      'Reportes de rendimiento y ROI',
    ],
    methodTitle: 'Ciclo de optimización continua',
    method: [
      { step: 'Planificar', text: 'Objetivo, audiencia, canales y presupuesto por etapa.' },
      { step: 'Activar', text: 'Montaje técnico, medición y lanzamiento controlado.' },
      { step: 'Aprender', text: 'Lectura de datos y pruebas de creatividad y audiencia.' },
      { step: 'Escalar', text: 'Reinversión en los conjuntos con mejor desempeño.' },
    ],
    related: ['impactx', 'backtoschool'],
  },
  {
    slug: 'creatividad',
    name: 'Creatividad',
    short: 'Diseño de marca y campañas.',
    icon: Palette,
    theme: 'bg-creative',
    heroTitle: 'Ideas que la gente quiere compartir.',
    heroLead:
      'Diseñamos identidades y campañas con personalidad propia, coherentes en cada punto de contacto con tu público.',
    description: [
      'Nuestro equipo creativo une concepto, diseño y copy para construir marcas memorables y campañas que se ganan la atención en lugar de comprarla.',
      'Trabajamos desde la idea grande hasta la última pieza de redes, cuidando que todo respire la misma identidad.',
    ],
    problems: [
      { title: 'Marca genérica', text: 'Tu identidad se parece a la de cualquier otra empresa del sector.' },
      { title: 'Contenido que no conecta', text: 'Publicas con frecuencia, pero la interacción es baja.' },
      { title: 'Inconsistencia visual', text: 'Cada pieza parece hecha por un equipo distinto.' },
    ],
    includes: [
      'Branding e identidad visual',
      'Manual de marca',
      'Conceptos creativos de campaña',
      'Diseño para redes sociales',
      'Copywriting y tono de voz',
      'Activaciones y marketing de guerrilla',
    ],
    methodTitle: 'Así nace una idea',
    method: [
      { step: 'Insight', text: 'Encontramos una verdad del público que vale la pena contar.' },
      { step: 'Concepto', text: 'Proponemos rutas creativas y elegimos una contigo.' },
      { step: 'Diseño', text: 'Desarrollamos piezas clave y el sistema visual.' },
      { step: 'Despliegue', text: 'Adaptamos la idea a cada canal y formato.' },
    ],
    related: ['princesasmd', 'gatorade'],
  },
  {
    slug: 'multimedia',
    name: 'Multimedia',
    short: 'Producción audiovisual.',
    icon: Clapperboard,
    theme: 'bg-panel',
    heroTitle: 'Historias que se ven, se escuchan y se recuerdan.',
    heroLead:
      'Producimos video, fotografía y contenido audiovisual pensado para redes, pantallas y campañas de alto impacto.',
    description: [
      'Desde un reel de 15 segundos hasta un spot de campaña, acompañamos todo el proceso: guion, preproducción, rodaje y postproducción.',
      'Pensamos cada pieza para el formato donde va a vivir, con ritmo, subtítulos y versiones para cada plataforma.',
    ],
    problems: [
      { title: 'Video sin estrategia', text: 'Tienes material grabado, pero no sabes cómo usarlo.' },
      { title: 'Calidad irregular', text: 'Tu contenido no refleja el nivel real de tu marca.' },
      { title: 'Pocos formatos', text: 'Una sola pieza no se adapta a reels, stories y anuncios.' },
    ],
    includes: [
      'Guion y storyboard',
      'Producción de video y fotografía',
      'Contenido vertical para redes',
      'Motion graphics y animación',
      'Edición, color y sonido',
      'Cobertura de eventos y activaciones',
    ],
    methodTitle: 'De la idea al corte final',
    method: [
      { step: 'Guion', text: 'Mensaje, estructura y tratamiento visual.' },
      { step: 'Preproducción', text: 'Locaciones, talento, equipo y plan de rodaje.' },
      { step: 'Rodaje', text: 'Producción en set o en exteriores.' },
      { step: 'Post', text: 'Edición, color, sonido y versiones por formato.' },
    ],
    related: ['backtoschool', 'gatorade'],
  },
  {
    slug: 'development',
    name: 'Development',
    short: 'Desarrollo de software y experiencias web.',
    icon: CodeXml,
    theme: 'bg-data',
    heroTitle: 'Tecnología que trabaja para tu marca.',
    heroLead:
      'Construimos sitios web, landing pages y herramientas digitales rápidas, accesibles y listas para convertir.',
    description: [
      'Unimos diseño y desarrollo para crear experiencias web que se sienten premium y funcionan en cualquier dispositivo.',
      'Integramos analítica, formularios y automatizaciones para que tu sitio no sea solo una vitrina, sino un canal de negocio.',
    ],
    problems: [
      { title: 'Sitio lento o desactualizado', text: 'Tu web no representa a tu marca y espanta a los visitantes.' },
      { title: 'Cero conversiones', text: 'Recibes visitas, pero pocas se convierten en clientes.' },
      { title: 'Procesos manuales', text: 'Tu equipo pierde horas en tareas que se pueden automatizar.' },
    ],
    includes: [
      'Sitios web corporativos',
      'Landing pages de campaña',
      'E-commerce',
      'Aplicaciones web a la medida',
      'Integraciones y automatizaciones',
      'Analítica y medición de conversiones',
    ],
    methodTitle: 'Desarrollo por etapas',
    method: [
      { step: 'Descubrir', text: 'Objetivos, usuarios y requerimientos técnicos.' },
      { step: 'Prototipar', text: 'Arquitectura de información y diseño UI/UX.' },
      { step: 'Construir', text: 'Desarrollo iterativo con entregas frecuentes.' },
      { step: 'Lanzar', text: 'Pruebas, publicación, medición y mejora continua.' },
    ],
    related: ['impactx'],
  },
]

export const getService = (slug?: string) => services.find((s) => s.slug === slug)
