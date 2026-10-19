import { Compass, GraduationCap, MessagesSquare, Users } from 'lucide-react'
import { ButtonLink } from '../components/ui/Button'
import { Container, CtaBanner, PageHero, Reveal, SectionHeading } from '../components/ui/Section'
import { ImageSlot } from '../components/ui/PandaSlot'

const pillars = [
  { icon: Compass, title: 'Liderazgo', text: 'Formamos líderes que inspiran con el ejemplo, toman decisiones con datos y cuidan a su equipo.' },
  { icon: Users, title: 'Colaboración', text: 'Proyectos multidisciplinarios donde estrategia, creatividad y tecnología trabajan juntas.' },
  { icon: MessagesSquare, title: 'Cultura organizacional', text: 'Comunicación abierta, retroalimentación constante y celebración de los logros compartidos.' },
  { icon: GraduationCap, title: 'Desarrollo profesional', text: 'Planes de crecimiento, capacitaciones y mentorías para avanzar en tu carrera.' },
]

export default function FusionadosLeader() {
  return (
    <>
      <PageHero
        eyebrow="Fusionados Leader"
        title="Líderes que fusionan talento y propósito."
        lead="Fusionados Leader es nuestra comunidad de liderazgo: las personas que impulsan la cultura de Fusión Digital y acompañan el crecimiento de cada integrante del equipo."
        crumbs={[{ label: 'Inicio', to: '/' }, { label: 'Talento', to: '/talento' }, { label: 'Fusionados Leader' }]}
        aside={<ImageSlot label="Foto de los Fusionados Leader" className="aspect-[4/5] w-full max-w-md" />}
      >
        <ButtonLink to="/talento/oportunidades">Ver oportunidades</ButtonLink>
      </PageHero>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Pilares" title="Cuatro pilares de nuestro liderazgo" />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="flex h-full gap-6 rounded-[1.75rem] border border-white/10 bg-panel/40 p-8">
                  <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-creative">
                    <p.icon className="size-6 text-white" aria-hidden />
                  </span>
                  <div>
                    <h3>{p.title}</h3>
                    <p className="mt-2 text-white/65">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-20 text-ink sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading light eyebrow="Cómo crecemos" title="Liderar es acompañar." />
            <Reveal delay={0.1} className="mt-6 space-y-4 text-ink/70 sm:text-lg">
              <p>Cada líder de Fusión Digital tiene la responsabilidad de compartir lo que sabe y abrir espacio para que otros brillen.</p>
              <p>Por eso combinamos mentorías uno a uno, espacios de aprendizaje en equipo y proyectos retadores desde el primer día.</p>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ImageSlot label="Mentoría" className="aspect-square" />
            <ImageSlot label="Taller interno" className="mt-10 aspect-square" tone="from-[#3A0F5E] to-[#7B9BD6]" />
          </div>
        </Container>
      </section>

      <CtaBanner title="Lidera la transformación con nosotros" text="Si te mueve formar equipos y crear marcas memorables, queremos conocerte." cta="Postúlate" to="/talento/oportunidades" />
    </>
  )
}
