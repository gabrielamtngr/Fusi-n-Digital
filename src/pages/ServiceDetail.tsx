import { useParams } from 'react-router-dom'
import { CircleCheck } from 'lucide-react'
import { ButtonLink } from '../components/ui/Button'
import { Container, CtaBanner, PageHero, Reveal, SectionHeading } from '../components/ui/Section'
import { ProjectCard } from '../components/cards'
import { getService, services } from '../data/services'
import { getProject } from '../data/projects'
import NotFound from './NotFound'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)
  if (!service) return <NotFound />

  const Icon = service.icon
  const related = service.related.map(getProject).filter((p) => !!p)
  const others = services.filter((s) => s.slug !== service.slug)

  return (
    <>
      <PageHero
        eyebrow={service.name}
        title={service.heroTitle}
        lead={service.heroLead}
        crumbs={[{ label: 'Inicio', to: '/' }, { label: 'Servicios', to: '/servicios' }, { label: service.name }]}
        aside={
          <div className={`relative mx-auto grid aspect-square w-full max-w-sm place-items-center overflow-hidden rounded-[2.5rem] border border-white/10 ${service.theme}`}>
            <div className="absolute size-2/3 rounded-full bg-lavender/20 blur-3xl" aria-hidden />
            <Icon className="relative size-32 text-icon" strokeWidth={1.2} aria-hidden />
          </div>
        }
      >
        <ButtonLink to="/contacto">Hablemos de tu proyecto</ButtonLink>
      </PageHero>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading eyebrow="Descripción" title={`${service.name} en Fusión Digital`} />
          <Reveal delay={0.1} className="space-y-5 text-white/70 sm:text-lg">
            {service.description.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading eyebrow="Problemas que resolvemos" title="¿Te suena familiar?" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {service.problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-[1.75rem] border border-white/10 bg-panel/40 p-7">
                  <h3>{p.title}</h3>
                  <p className="mt-3 text-sm text-white/65">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-20 text-ink sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading light eyebrow="Servicios incluidos" title="Qué hacemos por ti" />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 text-sm font-medium">
                  <CircleCheck className="mt-0.5 size-5 shrink-0 text-[#BCA4EC]" aria-hidden /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading light eyebrow="Metodología" title={service.methodTitle} />
            <ol className="relative mt-10 space-y-6 border-l-2 border-[#BCA4EC]/50 pl-8">
              {service.method.map((m, i) => (
                <li key={m.step} className="relative">
                  <span className="absolute -left-[2.85rem] grid size-8 place-items-center rounded-full bg-ink text-xs font-bold text-lavender">{i + 1}</span>
                  <h3 className="!text-lg">{m.step}</h3>
                  <p className="mt-1 text-sm text-ink/65">{m.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Proyectos relacionados" title="Este servicio en acción" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <div className="mt-16 border-t border-white/10 pt-10">
            <p className="mb-5 text-sm font-medium text-white/50">Otros servicios</p>
            <div className="flex flex-wrap gap-3">
              {others.map((s) => (
                <ButtonLink key={s.slug} to={`/servicios/${s.slug}`} variant="secondary" className="!py-2.5">
                  {s.name}
                </ButtonLink>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner title={`Impulsa tu marca con ${service.name.toLowerCase()}`} />
    </>
  )
}
