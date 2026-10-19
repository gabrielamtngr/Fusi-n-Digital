import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Container, CtaBanner, PageHero, SectionHeading } from '../components/ui/Section'
import { ProjectCard } from '../components/cards'
import { projectCategories, projects, type ProjectCategory } from '../data/projects'

export default function Work() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>('Todos')
  const visible = filter === 'Todos' ? projects : projects.filter((p) => p.categories.includes(filter as ProjectCategory))
  const verified = projects.flatMap((p) => p.metrics.map((m) => ({ ...m, client: p.client })))

  return (
    <>
      <PageHero
        eyebrow="Nuestro Trabajo"
        title={
          <>
            Transformamos desafíos en <span className="text-gradient">oportunidades.</span>
          </>
        }
        lead="Una selección de campañas donde estrategia, creatividad y datos se unieron para mover a las personas y a los negocios."
        crumbs={[{ label: 'Inicio', to: '/' }, { label: 'Nuestro Trabajo' }]}
      />

      <section className="pb-6">
        <Container>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Métricas verificadas">
            <li className="rounded-[1.75rem] bg-lavender p-7 text-ink">
              <p className="text-5xl font-extrabold tracking-tight">+100</p>
              <p className="mt-2 text-sm font-medium">campañas efectivas ejecutadas</p>
            </li>
            {verified.map((m) => (
              <li key={m.client} className="rounded-[1.75rem] border border-white/10 bg-panel/50 p-7">
                <p className="text-5xl font-extrabold tracking-tight text-lavender">{m.value}</p>
                <p className="mt-2 text-sm text-white/70">
                  {m.label} · <span className="font-medium text-white">{m.client}</span>
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Portafolio" title="Casos de éxito" />
            <div role="group" aria-label="Filtrar proyectos por categoría" className="flex flex-wrap gap-2">
              {projectCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  aria-pressed={filter === c}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                    filter === c ? 'bg-lavender text-ink' : 'border border-white/15 text-white/75 hover:border-lavender hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <p className="sr-only" aria-live="polite">
            {visible.length} proyectos visibles
          </p>
          <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {visible.map((p) => (
                <motion.div key={p.slug} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.35 }}>
                  <ProjectCard project={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      <CtaBanner title="Tu marca puede ser el próximo caso de éxito" />
    </>
  )
}
