import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { ButtonLink } from './Button'
import { PandaSlot } from './PandaSlot'

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  light = false,
}: {
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  align?: 'left' | 'center'
  light?: boolean
}) {
  return (
    <Reveal className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className={`eyebrow mb-4 ${light ? '!text-[#6b4fb0]' : ''}`}>{eyebrow}</p>}
      <h2 className={light ? 'text-ink' : ''}>{title}</h2>
      {lead && <p className={`mt-5 text-base sm:text-lg ${light ? 'text-ink/70' : 'text-white/70'}`}>{lead}</p>}
    </Reveal>
  )
}

/** Hero estándar de página interior */
export function PageHero({
  title,
  lead,
  aside,
  children,
  className = '',
}: {
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  crumbs?: Crumb[]
  aside?: ReactNode
  children?: ReactNode
  className?: string
}) {
  return (
    <section className={`relative overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-20 ${className}`}>
      <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
      <div className="absolute -top-40 right-[-10%] size-[36rem] rounded-full bg-lavender/15 blur-[120px]" aria-hidden />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="!text-[clamp(2.3rem,1.3rem+4.2vw,5rem)]"
          >
            {title}
          </motion.h1>
          {lead && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-2xl text-base text-white/70 sm:text-lg"
            >
              {lead}
            </motion.p>
          )}
          {children && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mt-9">
              {children}
            </motion.div>
          )}
        </div>
        {aside && (
          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }}>
            {aside}
          </motion.div>
        )}
      </Container>
    </section>
  )
}

/** Banner promocional reutilizable con espacio para el panda */
export function CtaBanner({
  title = '¿Tienes un proyecto en mente?',
  text = 'Nuestro equipo creativo está listo para dar vida a tus ideas con soluciones únicas y de alta calidad.',
  cta = 'Hablemos de tu proyecto',
  to = '/contacto',
}: {
  title?: string
  text?: string
  cta?: string
  to?: string
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-creative p-8 sm:p-14">
            <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
            <div className="relative grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="max-w-xl">{title}</h2>
                <p className="mt-5 max-w-lg text-white/85 sm:text-lg">{text}</p>
                <div className="mt-8">
                  <ButtonLink to={to} variant="dark">
                    {cta}
                  </ButtonLink>
                </div>
              </div>
              <PandaSlot className="mx-auto hidden aspect-square w-full max-w-xs md:block" width={480} />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
