import { BookOpen, CircleCheck, Clapperboard, CodeXml, Compass, Megaphone, Palette, Rocket, Target, Users } from 'lucide-react'
import { Container, PageHero, Reveal, SectionHeading } from '../components/ui/Section'
import { PandaSlot } from '../components/ui/PandaSlot'
import { ApplicationForm } from '../components/ApplicationForm'
import { buttonClass } from '../components/ui/Button'
import { traineeRequirements } from '../data/talent'

const goals = [
  { icon: BookOpen, title: 'Aprender haciendo', text: 'Participar en proyectos reales con acompañamiento de mentores.' },
  { icon: Target, title: 'Descubrir tu especialidad', text: 'Rotar por diferentes áreas para encontrar dónde brillas.' },
  { icon: Users, title: 'Construir red', text: 'Conectar con profesionales, clientes y otros talentos.' },
  { icon: Rocket, title: 'Dar el salto', text: 'Prepararte para tu primer rol profesional en marketing digital.' },
]

const areas = [
  { icon: Compass, name: 'Estrategia' },
  { icon: Megaphone, name: 'Medios' },
  { icon: Palette, name: 'Creatividad' },
  { icon: Clapperboard, name: 'Multimedia' },
  { icon: CodeXml, name: 'Development' },
]

export default function PandaTrainee() {
  return (
    <>
      <PageHero
        eyebrow="Panda Trainee"
        title={
          <>
            Tu primer gran paso en el <span className="text-gradient">marketing digital.</span>
          </>
        }
        lead="Panda Trainee es el programa de formación de Fusión Digital para nuevos talentos: tranquilo para aprender, ingenioso para crear y cercano para crecer."
        crumbs={[{ label: 'Inicio', to: '/' }, { label: 'Talento', to: '/talento' }, { label: 'Panda Trainee' }]}
        aside={<PandaSlot className="mx-auto aspect-square w-full max-w-lg" width={900} label="Panda oficial, protagonista del programa Panda Trainee" />}
      >
        <a href="#postularme" className={buttonClass('primary')}>
          Postularme
        </a>
      </PageHero>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Objetivos del programa" title="Lo que vas a lograr" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {goals.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.06}>
                <div className="h-full rounded-[1.75rem] border border-white/10 bg-panel/40 p-7">
                  <g.icon className="size-7 text-icon" aria-hidden />
                  <h3 className="mt-6">{g.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{g.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="rounded-[2.5rem] bg-creative p-8 sm:p-14">
            <h2>Áreas de aprendizaje</h2>
            <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
              {areas.map((a) => (
                <li key={a.name} className="flex flex-col items-center gap-3 rounded-3xl bg-night/40 p-6 text-center backdrop-blur">
                  <a.icon className="size-8 text-white" aria-hidden />
                  <span className="font-medium">{a.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-20 text-ink sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2">
          <SectionHeading light eyebrow="Requisitos" title="¿Quién puede postularse?" />
          <ul className="space-y-3">
            {traineeRequirements.map((r) => (
              <li key={r} className="flex gap-3 rounded-2xl bg-white p-5">
                <CircleCheck className="mt-0.5 size-5 shrink-0 text-[#BCA4EC]" aria-hidden /> {r}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="postularme" className="scroll-mt-28 py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <SectionHeading eyebrow="Postulación" title="Únete a la próxima generación Panda" />
            <PandaSlot mode="placeholder" className="mt-10 hidden aspect-square max-w-xs lg:grid" />
          </div>
          <ApplicationForm program="Panda Trainee" submitLabel="Postularme" />
        </Container>
      </section>
    </>
  )
}
