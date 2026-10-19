import { useId } from 'react'

type BrandLogoProps = {
  variant?: 'full' | 'isotipo'
  theme?: 'dark' | 'light'
  className?: string
  /** Opcional: carga el archivo oficial (p. ej. import logo from '@/assets/logo-fusion-digital.jpeg') en lugar del SVG. */
  imageSrc?: string
}

/** Isotipo «F»: dos trazos con curva a la izquierda y corte diagonal a la derecha, en degradado morado. */
export function Isotipo({ className = 'h-10 w-auto' }: { className?: string }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg viewBox="0 0 64 72" className={className} role="img" aria-label="Isotipo de Fusión Digital">
      <defs>
        <linearGradient id={`fd-a-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#BFA6EE" />
          <stop offset="0.5" stopColor="#A98BEA" />
          <stop offset="1" stopColor="#6E3FD8" />
        </linearGradient>
        <linearGradient id={`fd-b-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#A98BEA" />
          <stop offset="0.55" stopColor="#7C4FE0" />
          <stop offset="1" stopColor="#3A0F5E" />
        </linearGradient>
        <linearGradient id={`fd-fold-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.35" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Trazo superior */}
      <path d="M6 41V23C6 12.5 12.5 6 23 6h38l-8.5 14H25c-4.4 0-7 2.6-7 7v3.5L6 41Z" fill={`url(#fd-a-${id})`} />
      {/* Pliegue tridimensional en la esquina superior izquierda */}
      <path d="M6 23C6 12.5 12.5 6 23 6h7v14h-5c-4.4 0-7 2.6-7 7v3.5L6 41V23Z" fill={`url(#fd-fold-${id})`} />
      {/* Trazo inferior */}
      <path d="M6 68V51c0-10.5 6.5-17 17-17h29l-8.5 14H25c-4.4 0-7 2.6-7 7v13H6Z" fill={`url(#fd-b-${id})`} />
    </svg>
  )
}

export function BrandLogo({ variant = 'full', theme = 'dark', className = '', imageSrc }: BrandLogoProps) {
  if (imageSrc) {
    return <img src={imageSrc} alt="Fusión Digital" className={`h-12 w-auto object-contain ${className}`} />
  }
  if (variant === 'isotipo') return <Isotipo className={className || 'h-10 w-auto'} />

  const text = theme === 'dark' ? 'text-white' : 'text-ink'
  return (
    <span role="img" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Fusión Digital">
      <Isotipo className="h-[2.4em] w-auto shrink-0" />
      <span className={`flex flex-col leading-none ${text}`} aria-hidden="true">
        <span className="text-[1.45em] font-extrabold tracking-[-0.03em]">Fusión</span>
        <span className="mt-[0.2em] pl-[0.08em] text-[0.62em] font-medium tracking-[0.42em]">DIGITAL</span>
      </span>
    </span>
  )
}
