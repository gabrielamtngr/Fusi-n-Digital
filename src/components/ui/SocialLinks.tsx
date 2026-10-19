import { social } from '../../data/site'

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5.5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.6" cy="6.4" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
    <path d="M13.5 21.95v-7.7h2.6l.4-3.03h-3V9.3c0-.88.25-1.48 1.5-1.48h1.6V5.1a21 21 0 0 0-2.33-.12c-2.3 0-3.88 1.4-3.88 3.98v2.26H7.8v3.03h2.6v7.7A10 10 0 1 1 13.5 21.95Z" />
  </svg>
)

const links = [
  { href: social.instagram, label: 'Visitar Instagram de Fusión Digital', name: 'Instagram', Icon: InstagramIcon },
  { href: social.facebook, label: 'Visitar Facebook de Fusión Digital', name: 'Facebook', Icon: FacebookIcon },
]

export function SocialLinks({ withLabels = false, className = '' }: { withLabels?: boolean; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {links.map(({ href, label, name, Icon }) => (
        <li key={name}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className={`inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 text-white transition duration-300 hover:-translate-y-0.5 hover:border-lavender hover:bg-lavender hover:text-ink ${
              withLabels ? 'px-4 py-2.5 text-sm font-medium' : 'size-11 justify-center'
            }`}
          >
            <Icon />
            {withLabels && <span>{name}</span>}
          </a>
        </li>
      ))}
    </ul>
  )
}
