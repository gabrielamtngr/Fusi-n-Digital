/* Datos globales editables de Fusión Digital. */

export const contact = {
  email: 'fusiondigital26@gmail.com',
  phoneDisplay: '2222 3333',
  phoneNumber: '22223333',
  /** Código de país para el enlace tel:. Cámbialo si la línea no es de El Salvador. */
  phoneCountryCode: '+503',
}

export const telHref = `tel:${contact.phoneCountryCode}${contact.phoneNumber}`
export const mailHref = `mailto:${contact.email}`

/** URLs oficiales — no modificar sin autorización de la marca. */
export const social = {
  instagram: 'https://www.instagram.com/fusiondigital2026?srtk=d2FtZTZ0MWhvNW5y',
  facebook: 'https://www.facebook.com/share/1MbN7HCeRV/',
}

export type NavItem = { label: string; to: string; children?: { label: string; to: string; description?: string }[] }

export const navigation: NavItem[] = [
  { label: 'Inicio', to: '/' },
  {
    label: 'Servicios',
    to: '/servicios',
    children: [
      { label: 'Estrategia', to: '/servicios/estrategia', description: 'Planificación y conexión sólida' },
      { label: 'Medios', to: '/servicios/medios', description: 'Optimización de pauta' },
      { label: 'Creatividad', to: '/servicios/creatividad', description: 'Diseño de marca y campañas' },
      { label: 'Multimedia', to: '/servicios/multimedia', description: 'Producción audiovisual' },
      { label: 'Development', to: '/servicios/development', description: 'Software y experiencias web' },
    ],
  },
  {
    label: 'Talento',
    to: '/talento',
    children: [
      { label: 'Fusionados Leader', to: '/talento/fusionados-leader', description: 'Liderazgo y cultura' },
      { label: 'Oportunidades', to: '/talento/oportunidades', description: 'Vacantes abiertas' },
      { label: 'Panda Trainee', to: '/talento/panda-trainee', description: 'Programa de formación' },
    ],
  },
  { label: 'Nuestro Trabajo', to: '/trabajo' },
  { label: 'Blog', to: '/blog' },
]

/** Imagen servida a través de Netlify Image CDN (redimensionada y en WebP). */
export function cdn(path: string, width: number) {
  return `/.netlify/images?url=${encodeURIComponent(path)}&w=${width}&fm=webp`
}

export const PANDA_IMAGE = '/img/panda-oficial.jpg'
