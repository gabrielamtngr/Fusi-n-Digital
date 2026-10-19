import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { ComponentProps, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'dark'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition duration-300 ease-brand focus-visible:outline-2 focus-visible:outline-offset-4 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary: 'bg-lavender text-ink hover:bg-white hover:shadow-[0_10px_40px_-10px_rgba(191,166,238,0.8)]',
  secondary: 'border border-white/25 text-white hover:border-lavender hover:bg-lavender/10',
  ghost: 'px-0 py-1 text-lavender hover:text-white',
  dark: 'bg-ink text-white hover:bg-panel',
}

export const buttonClass = (variant: Variant = 'primary', extra = '') => `${base} ${variants[variant]} ${extra}`

type LinkButtonProps = { to: string; variant?: Variant; children: ReactNode; className?: string; arrow?: boolean }

export function ButtonLink({ to, variant = 'primary', children, className = '', arrow = true }: LinkButtonProps) {
  return (
    <Link to={to} className={buttonClass(variant, className)}>
      {children}
      {arrow && <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />}
    </Link>
  )
}

export function Button({ variant = 'primary', className = '', ...props }: ComponentProps<'button'> & { variant?: Variant }) {
  return <button className={buttonClass(variant, className)} {...props} />
}
