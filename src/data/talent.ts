/*
  Talento, vacantes y testimonios.
  - `jobs` está vacío a propósito: la página muestra un estado vacío con candidatura espontánea.
    Añade objetos con la forma `Job` para publicar vacantes.
  - Los testimonios son DEMOSTRATIVOS: sustitúyelos por citas aprobadas por cada cliente.
*/

export type Job = { id: string; title: string; area: string; mode: 'Presencial' | 'Remoto' | 'Híbrido'; description: string }

export const jobs: Job[] = []

export const talentCards = [
  {
    to: '/talento/fusionados-leader',
    title: 'Fusionados Leader',
    text: 'Liderazgo, colaboración y desarrollo profesional para quienes impulsan la cultura Fusión.',
  },
  {
    to: '/talento/oportunidades',
    title: 'Oportunidades',
    text: 'Vacantes abiertas y candidaturas espontáneas para sumarte al equipo.',
  },
  {
    to: '/talento/panda-trainee',
    title: 'Panda Trainee',
    text: 'Nuestro programa de formación para nuevos talentos del marketing digital.',
  },
]

export const cultureMessage =
  'Cultivamos un entorno positivo, con talentos únicos que con su pasión y excelencia son capaces de liderar la transformación de nuestros clientes.'

/** Requisitos editables del programa Panda Trainee */
export const traineeRequirements = [
  'Estudiante de últimos años o recién graduado en Marketing, Comunicaciones, Diseño, Audiovisual o Ingeniería.',
  'Curiosidad por el mundo digital y ganas de aprender haciendo.',
  'Disponibilidad para el horario del programa.',
  'Portafolio o muestra de trabajos (deseable, no obligatorio).',
]

export type Testimonial = { id: string; company: string; name: string; role: string; quote: string; photo?: string; demo: boolean }

export const testimonials: Testimonial[] = [
  {
    id: 'stjacks',
    company: 'St Jacks',
    name: 'Nombre del vocero',
    role: 'Cargo en St Jacks',
    quote: 'Espacio para el testimonio aprobado de St Jacks sobre su experiencia trabajando con Fusión Digital.',
    demo: true,
  },
  {
    id: 'md',
    company: 'MD',
    name: 'Nombre del vocero',
    role: 'Cargo en MD',
    quote: 'Espacio para el testimonio aprobado de MD sobre los resultados de su campaña.',
    demo: true,
  },
  {
    id: 'diana',
    company: 'Diana',
    name: 'Nombre del vocero',
    role: 'Cargo en Diana',
    quote: 'Espacio para el testimonio aprobado de Diana sobre la colaboración con el equipo.',
    demo: true,
  },
  {
    id: 'fusalmo',
    company: 'Fusalmo',
    name: 'Nombre del vocero',
    role: 'Cargo en Fusalmo',
    quote: 'Espacio para el testimonio aprobado de Fusalmo sobre el impacto del proyecto.',
    demo: true,
  },
]

export const clients = ['St Jacks', 'MD Te Entiende', 'The Coffee Cup']
