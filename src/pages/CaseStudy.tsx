import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ChartColumn, Clock } from 'lucide-react'
import { Container, CtaBanner, PageHero, Reveal } from '../components/ui/Section'
import { ImageSlot } from '../components/ui/PandaSlot'
import { getProject, projects } from '../data/projects'
import NotFound from './NotFound'

const tones = ['from-panel to-data', 'from-[#3A0F5E] to-[#7B9BD6]', 'from-data to-panel', 'from-[#3B2A5E] to-[#A98BEA]']

export default function CaseStudy() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <NotFound />

  const idx = projects.indexOf(project)
  const next = projects[(idx + 1) % projects.length]

  return (
    <>
      <PageHero
        eyebrow={`Caso de éxito · ${project.client}`}
        title={project.title}
        lead={project.summary}
        crumbs={[{ label: 'Inicio', to: '/' }, { label: 'Nuestro Trabajo', to: '/trabajo' }, { label: project.name }]}
      >
        <dl className="flex flex-wrap gap-x-10 gap-y-4 text-sm">
          <div>
            <dt className="text-white/50">Cliente</dt>
            <dd className="mt-1 font-medium">{project.client}</dd>
          </div>
          <div>
            <dt className="text-white/50">Servicios</dt>
            <dd className="mt-1 font-medium">{project.services.join(' · ')}</dd>
          </div>
          <div>
            <dt className="text-white/50">Categoría</dt>
            <dd className="mt-1 font-medium">{project.categories.join(' · ')}</dd>
          </div>
        </dl>
      </PageHero>

      <Container>
        <div className={`relative grid aspect-[21/9] min-h-56 place-items-center overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${project.gradient}`} role="img" aria-label={`Espacio para imagen principal de ${project.name}`}>
          <p className="relative px-6 text-center text-[clamp(2rem,1rem+4vw,4.5rem)] font-extrabold leading-none tracking-tight">{project.name}</p>
        </div>
      </Container>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-14 lg:grid-cols-[1fr_2fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow mb-5">Métricas</p>
            {project.metrics.length ? (
              <ul className="space-y-4">
                {project.metrics.map((m) => (
                  <li key={m.label} className="rounded-[1.75rem] bg-lavender p-7 text-ink">
                    <ChartColumn className="size-6" aria-hidden />
                    <p className="mt-4 text-5xl font-extrabold tracking-tight">{m.value}</p>
                    <p className="mt-1 text-sm font-medium">{m.label}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="rounded-[1.75rem] border border-dashed border-lavender/40 p-7 text-sm text-white/65">
                <Clock className="mb-3 size-6 text-lavender" aria-hidden />
                Métricas en verificación. Este espacio mostrará los resultados confirmados de la campaña.
              </div>
            )}
            <div className="mt-4 rounded-[1.75rem] border border-dashed border-white/15 p-7 text-sm text-white/50" role="img" aria-label="Espacio para gráfico de resultados">
              <ChartColumn className="mb-3 size-6 text-icon" aria-hidden />
              Espacio para gráfico de resultados
            </div>
          </aside>

          <div className="space-y-14">
            {project.sections.map((s, i) => (
              <Reveal key={s.title}>
                <article>
                  <p className="text-sm font-medium text-lavender">0{i + 1}</p>
                  <h2 className="mt-2 !text-[clamp(1.6rem,1.2rem+1.6vw,2.5rem)]">{s.title}</h2>
                  {s.body.map((b) => (
                    <p key={b} className={`mt-4 sm:text-lg ${s.pending ? 'rounded-2xl border border-dashed border-lavender/40 p-5 text-white/55' : 'text-white/75'}`}>
                      {b}
                    </p>
                  ))}
                </article>
              </Reveal>
            ))}

            <Reveal>
              <article>
                <p className="text-sm font-medium text-lavender">0{project.sections.length + 1}</p>
                <h2 className="mt-2 !text-[clamp(1.6rem,1.2rem+1.6vw,2.5rem)]">Galería</h2>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {project.gallery.map((g, i) => (
                    <ImageSlot key={g} label={g} tone={tones[i % tones.length]} className={i === 0 ? 'col-span-2 aspect-[16/8]' : 'aspect-square'} />
                  ))}
                </div>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      <Container>
        <nav className="flex flex-col justify-between gap-4 border-y border-white/10 py-8 sm:flex-row sm:items-center" aria-label="Navegación entre proyectos">
          <Link to="/trabajo" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-lavender">
            <ArrowLeft className="size-4" aria-hidden /> Todos los proyectos
          </Link>
          <Link to={`/trabajo/${next.slug}`} className="group text-right">
            <span className="block text-xs text-white/50">Siguiente caso</span>
            <span className="inline-flex items-center gap-2 font-bold transition group-hover:text-lavender">
              {next.name} <ArrowRight className="size-4" aria-hidden />
            </span>
          </Link>
        </nav>
      </Container>

      <CtaBanner title="¿Quieres resultados así para tu marca?" />
    </>
  )
}
