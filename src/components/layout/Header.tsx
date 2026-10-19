import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { navigation, type NavItem } from '../../data/site'
import { BrandLogo } from '../ui/BrandLogo'
import { buttonClass } from '../ui/Button'
import { SocialLinks } from '../ui/SocialLinks'

const isActive = (pathname: string, to: string) => (to === '/' ? pathname === '/' : pathname === to || pathname.startsWith(to + '/'))

function Dropdown({ item }: { item: NavItem }) {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLLIElement>(null)
  const active = isActive(pathname, item.to)
  const menuId = `menu-${item.label.toLowerCase()}`

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        ref.current?.querySelector<HTMLButtonElement>('button')?.focus()
      }
    }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <li
      ref={ref}
      className="relative"
      onPointerEnter={(e) => e.pointerType === 'mouse' && setOpen(true)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && setOpen(false)}
      onBlur={(e) => !ref.current?.contains(e.relatedTarget as Node) && setOpen(false)}
    >
      <div className={`flex items-center rounded-full transition ${active ? 'bg-white/10' : ''}`}>
        <NavLink
          to={item.to}
          end
          className={`py-2 pl-4 pr-1 text-sm font-medium transition hover:text-lavender ${active ? 'text-lavender' : 'text-white/85'}`}
        >
          {item.label}
        </NavLink>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={`Abrir submenú de ${item.label}`}
          onClick={() => setOpen((o) => !o)}
          className="grid size-8 place-items-center rounded-full text-white/70 transition hover:text-lavender"
        >
          <ChevronDown className={`size-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} aria-hidden />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3"
          >
            <ul className="rounded-3xl border border-white/10 bg-[#221843]/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
              {item.children!.map((c) => (
                <li key={c.to}>
                  <NavLink
                    to={c.to}
                    className={({ isActive: a }) =>
                      `block rounded-2xl px-4 py-3 transition hover:bg-white/8 focus-visible:bg-white/8 ${a ? 'bg-lavender/15' : ''}`
                    }
                  >
                    {({ isActive: a }) => (
                      <>
                        <span className={`block text-sm font-medium ${a ? 'text-lavender' : 'text-white'}`}>{c.label}</span>
                        {c.description && <span className="mt-0.5 block text-xs text-white/55">{c.description}</span>}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { pathname } = useLocation()
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Menú principal"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 260 }}
            className="absolute right-0 top-0 flex h-full w-[min(24rem,100%)] flex-col overflow-y-auto bg-night p-6"
          >
            <div className="flex items-center justify-between">
              <Link to="/" onClick={onClose} aria-label="Fusión Digital — Inicio">
                <BrandLogo className="text-[15px]" />
              </Link>
              <button onClick={onClose} aria-label="Cerrar menú" className="grid size-11 place-items-center rounded-full bg-white/10">
                <X className="size-5" aria-hidden />
              </button>
            </div>
            <ul className="mt-10 space-y-1">
              {navigation.map((item) => {
                const active = isActive(pathname, item.to)
                return (
                  <li key={item.to} className="border-b border-white/10">
                    <div className="flex items-center justify-between">
                      <NavLink
                        to={item.to}
                        end
                        onClick={onClose}
                        className={`flex-1 py-4 text-xl font-bold ${active ? 'text-lavender' : 'text-white'}`}
                      >
                        {item.label}
                      </NavLink>
                      {item.children && (
                        <button
                          aria-expanded={expanded === item.label}
                          aria-label={`Mostrar opciones de ${item.label}`}
                          onClick={() => setExpanded((e) => (e === item.label ? null : item.label))}
                          className="grid size-11 place-items-center rounded-full bg-white/5"
                        >
                          <ChevronDown className={`size-5 transition ${expanded === item.label ? 'rotate-180' : ''}`} aria-hidden />
                        </button>
                      )}
                    </div>
                    <AnimatePresence initial={false}>
                      {item.children && expanded === item.label && (
                        <motion.ul initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                          {item.children.map((c) => (
                            <li key={c.to}>
                              <NavLink
                                to={c.to}
                                onClick={onClose}
                                className={({ isActive: a }) => `block py-2.5 pl-4 text-base ${a ? 'text-lavender' : 'text-white/75'}`}
                              >
                                {c.label}
                              </NavLink>
                            </li>
                          ))}
                          <li className="h-3" />
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                )
              })}
            </ul>
            <Link to="/contacto" onClick={onClose} className={buttonClass('primary', 'mt-8 w-full')}>
              Contáctanos
            </Link>
            <div className="mt-auto pt-10">
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-white/50 uppercase">Síguenos</p>
              <SocialLinks withLabels />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const closeMobile = useCallback(() => setMobileOpen(false), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [pathname])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'border-b border-white/10 bg-night/80 py-3 backdrop-blur-xl' : 'py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <Link to="/" aria-label="Fusión Digital — Ir al inicio" className="shrink-0 p-1">
            <BrandLogo className="text-[14px] sm:text-[15px]" />
          </Link>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navigation.map((item) =>
                item.children ? (
                  <Dropdown key={item.to} item={item} />
                ) : (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive: a }) =>
                        `block rounded-full px-4 py-2 text-sm font-medium transition hover:text-lavender ${
                          a ? 'bg-white/10 text-lavender' : 'text-white/85'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contacto" className={buttonClass('primary', 'hidden !py-3 sm:inline-flex')}>
              Contáctanos
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={mobileOpen}
              className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 lg:hidden"
            >
              <Menu className="size-5" aria-hidden />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={mobileOpen} onClose={closeMobile} />
    </>
  )
}
