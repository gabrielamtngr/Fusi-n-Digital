import { Briefcase, Inbox, MapPin } from 'lucide-react'
import { Container, PageHero, Reveal, SectionHeading } from '../components/ui/Section'
import { PandaSlot } from '../components/ui/PandaSlot'
import { ApplicationForm } from '../components/ApplicationForm'
import { buttonClass } from '../components/ui/Button'
import { jobs } from '../data/talent'

export default function Opportunities() {
  return (
    <>
      <PageHero
        eyebrow="Oportunidades"
        title="Haz crecer tu carrera en Fusión Digital."
        lead="Buscamos talentos únicos con pasión por la estrategia, la creatividad, los medios, el audiovisual y la tecnología."
        crumbs={[{ label: 'Inicio', to: '/' }, { label: 'Talento', to: '/talento' }, { label: 'Oportunidades' }]}
      />

      <section className="pb-16">
        <Container>
          <SectionHeading eyebrow="Vacantes" title="Posiciones abiertas" />
          <div className="mt-10">
            {jobs.length ? (
              <ul className="grid gap-4">
                {jobs.map((j) => (
                  <li key={j.id} className="flex flex-col gap-5 rounded-[1.75rem] border border-white/10 bg-panel/40 p-7 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3>{j.title}</h3>
                      <p className="mt-2 flex flex-wrap gap-4 text-sm text-white/60">
                        <span className="inline-flex items-center gap-1.5">
                          <Briefcase className="size-4 text-icon" aria-hidden /> {j.area}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="size-4 text-icon" aria-hidden /> {j.mode}
                        </span>
                      </p>
                      <p className="mt-3 max-w-2xl text-sm text-white/70">{j.description}</p>
                    </div>
                    <a href="#postulacion" className={buttonClass('primary', 'shrink-0')}>
                      Postularme
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <Reveal>
                <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] border border-dashed border-lavender/40 bg-panel/30 p-8 sm:p-12 md:grid-cols-[1.4fr_1fr]">
                  <div>
                    <Inbox className="size-10 text-lavender" aria-hidden />
                    <h3 className="mt-5 !text-2xl">Por ahora no tenemos vacantes abiertas</h3>
                    <p className="mt-3 max-w-lg text-white/70">
                      Pero siempre queremos conocer talento. Envíanos una candidatura espontánea y te tendremos en cuenta para próximos proyectos.
                    </p>
                    <a href="#postulacion" className={buttonClass('primary', 'mt-7')}>
                      Enviar candidatura espontánea
                    </a>
                  </div>
                  <PandaSlot className="mx-auto aspect-square w-full max-w-60" width={400} />
                </div>
              </Reveal>
            )}
          </div>
        </Container>
      </section>

      <section id="postulacion" className="scroll-mt-28 py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow="Postulación" title="Cuéntanos sobre ti" lead="Completa el formulario y nuestro equipo revisará tu perfil." />
          <ApplicationForm program={jobs.length ? 'Vacante' : 'Candidatura espontánea'} />
        </Container>
      </section>
    </>
  )
}
