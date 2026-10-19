import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause, Play, Quote, UserRound } from 'lucide-react'
import { clients, testimonials } from '../data/talent'

/** Franja continua de clientes. Se pausa con hover/foco o con el botón. Los logos son placeholders tipográficos. */
export function ClientMarquee() {
  const [paused, setPaused] = useState(false)
  const items = [...clients, ...clients, ...clients, ...clients]
  return (
    <div className="marquee relative" data-paused={paused}>
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <ul className="animate-marquee flex w-max gap-4" aria-label="Clientes de Fusión Digital">
          {[...items, ...items].map((c, i) => (
            <li
              key={i}
              aria-hidden={i >= clients.length}
              className="flex h-24 min-w-56 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-10 text-xl font-extrabold tracking-tight text-white/70 transition hover:border-lavender/50 hover:text-white"
              title={`Logo de ${c} (placeholder)`}
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? 'Reanudar carrusel de clientes' : 'Pausar carrusel de clientes'}
        className="mx-auto mt-6 flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/70 transition hover:border-lavender hover:text-lavender"
      >
        {paused ? <Play className="size-3.5" aria-hidden /> : <Pause className="size-3.5" aria-hidden />}
        {paused ? 'Reanudar' : 'Pausar'}
      </button>
    </div>
  )
}

export function TestimonialSlider() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const [auto, setAuto] = useState(true)
  const total = testimonials.length
  const go = useCallback(
    (next: number, d = next > index ? 1 : -1) => {
      setDir(d)
      setIndex((next + total) % total)
    },
    [index, total],
  )

  useEffect(() => {
    if (!auto || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => go(index + 1, 1), 7000)
    return () => clearTimeout(t)
  }, [auto, index, go])

  const t = testimonials[index]

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Testimonios de clientes"
      onPointerEnter={() => setAuto(false)}
      onFocus={() => setAuto(false)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(index + 1, 1)
        if (e.key === 'ArrowLeft') go(index - 1, -1)
      }}
    >
      <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-white/10 bg-panel/50 p-8 sm:min-h-[19rem] sm:p-12">
        <Quote className="absolute right-8 top-8 size-20 text-lavender/15" aria-hidden />
        <AnimatePresence mode="wait" custom={dir}>
          <motion.figure
            key={t.id}
            custom={dir}
            initial={{ opacity: 0, x: dir * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -40 }}
            transition={{ duration: 0.4 }}
            aria-live="polite"
            aria-label={`Testimonio ${index + 1} de ${total}`}
          >
            {t.demo && (
              <span className="mb-6 inline-block rounded-full border border-dashed border-lavender/50 px-3 py-1 text-[11px] font-medium tracking-wide text-lavender uppercase">
                Contenido demostrativo · pendiente de aprobación
              </span>
            )}
            <blockquote className="max-w-3xl text-xl font-medium leading-relaxed text-white/90 sm:text-2xl">«{t.quote}»</blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              {t.photo ? (
                <img src={t.photo} alt={t.name} className="size-14 rounded-full object-cover" />
              ) : (
                <span className="grid size-14 place-items-center rounded-full border border-dashed border-white/25 bg-white/5" aria-label="Espacio para fotografía">
                  <UserRound className="size-6 text-white/40" aria-hidden />
                </span>
              )}
              <span>
                <span className="block font-bold">{t.name}</span>
                <span className="block text-sm text-white/60">
                  {t.role} · <span className="text-lavender">{t.company}</span>
                </span>
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex gap-2" role="tablist" aria-label="Seleccionar testimonio">
          {testimonials.map((x, i) => (
            <button
              key={x.id}
              role="tab"
              aria-selected={i === index}
              aria-label={`Ver testimonio de ${x.company}`}
              onClick={() => go(i)}
              className="grid h-8 place-items-center px-1"
            >
              <span className={`block h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-10 bg-lavender' : 'w-4 bg-white/25 hover:bg-white/50'}`} />
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => go(index - 1, -1)}
            aria-label="Testimonio anterior"
            className="grid size-12 place-items-center rounded-full border border-white/15 transition hover:border-lavender hover:bg-lavender hover:text-ink"
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <button
            onClick={() => go(index + 1, 1)}
            aria-label="Siguiente testimonio"
            className="grid size-12 place-items-center rounded-full border border-white/15 transition hover:border-lavender hover:bg-lavender hover:text-ink"
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  )
}
