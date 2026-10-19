import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import { contact, mailHref, telHref } from '../../data/site'
import { services } from '../../data/services'
import { talentCards } from '../../data/talent'
import { BrandLogo } from '../ui/BrandLogo'
import { SocialLinks } from '../ui/SocialLinks'

const linkClass = 'text-sm text-white/65 transition hover:text-lavender'

function Column({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h3 className="mb-5 !text-sm font-bold tracking-[0.18em] text-white uppercase">{title}</h3>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className={linkClass}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-night">
      <div className="absolute -bottom-40 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-lavender/10 blur-[140px]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-10 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link to="/" aria-label="Fusión Digital — Inicio" className="inline-block p-2">
              <BrandLogo theme="dark" className="text-[17px]" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
              Agencia de marketing que integra estrategia, medios, creatividad, multimedia y desarrollo tecnológico para liberar el
              potencial de tu marca.
            </p>
            <ul className="mt-6 space-y-3">
              <li>
                <a href={mailHref} className={`inline-flex items-center gap-3 ${linkClass}`}>
                  <Mail className="size-4 text-icon" aria-hidden /> {contact.email}
                </a>
              </li>
              <li>
                <a href={telHref} className={`inline-flex items-center gap-3 ${linkClass}`}>
                  <Phone className="size-4 text-icon" aria-hidden /> {contact.phoneDisplay}
                </a>
              </li>
            </ul>
            <SocialLinks className="mt-7" />
          </div>
          <Column title="Servicios" links={[{ to: '/servicios', label: 'Todos los servicios' }, ...services.map((s) => ({ to: `/servicios/${s.slug}`, label: s.name }))]} />
          <Column title="Talento" links={[{ to: '/talento', label: 'Talento y cultura' }, ...talentCards.map((t) => ({ to: t.to, label: t.title }))]} />
          <Column
            title="Agencia"
            links={[
              { to: '/trabajo', label: 'Nuestro Trabajo' },
              { to: '/blog', label: 'Blog y recursos' },
              { to: '/contacto', label: 'Contacto' },
            ]}
          />
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Fusión Digital. Todos los derechos reservados.</p>
          <ul className="flex gap-6">
            <li>
              <Link to="/privacidad" className="transition hover:text-lavender">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link to="/terminos" className="transition hover:text-lavender">
                Términos y condiciones
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
