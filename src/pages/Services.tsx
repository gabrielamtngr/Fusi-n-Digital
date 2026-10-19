import { Gauge, HeartHandshake, Layers, Lightbulb, Rocket, Search, ShieldCheck, Target } from 'lucide-react'
import { Container, CtaBanner, PageHero, Reveal, SectionHeading } from '../components/ui/Section'
import { ImageSlot, PandaSlot } from '../components/ui/PandaSlot'
import { ServiceCard } from '../components/cards'
import { services } from '../data/services'

const process = [
  { icon: Search, title: 'Descubrimos', text: 'Entendemos tu negocio, tu público y tu momento de mercado.' },
  { icon: Lightbulb, title: 'Diseñamos', text: 'Creamos una estrategia y una idea a la medida de tus objetivos.' },
  { icon: Rocket, title: 'Ejecutamos', text: 'Producimos, pautamos y desarrollamos con un solo equipo coordinado.' },
  { icon: Gauge, title: 'Optimizamos', text: 'Medimos resultados y ajustamos para crecer cada mes.' },
]

const differentiators = [
  { icon: Layers, title: 'Todo en un mismo lugar', text: 'Estrategia, medios, creatividad, multimedia y tecnología sin intermediarios.' },
  { icon: Target, title: 'Enfoque en resultados', text: 'Cada acción se conecta con un indicador de negocio.' },
  { icon: HeartHandshake, title: 'Cercanía real', text: 'Un equipo que conoce tu marca y responde rápido.' },
  { icon: ShieldCheck, title: 'Conocimiento local', text: 'Entendemos al consumidor salvadoreño y centroamericano.' },
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title={
          <>
            Todo lo que tu marca necesita, <span className="text-gradient">en un solo equipo.</span>
          </>
        }
        lead="Integramos estrategia, medios, creatividad, multimedia y desarrollo tecnológico para que cada peso invertido trabaje a favor de tu crecimiento."
        crumbs={[{ label: 'Inicio', to: '/' }, { label: 'Servicios' }]}
        aside={<PandaSlot className="mx-auto aspect-square w-full max-w-md" />}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <SectionHeading eyebrow="Propuesta de valor" title="Conectamos ideas con resultados medibles." />
          <Reveal delay={0.1} className="space-y-5 text-white/70 sm:text-lg">
            <p>
              Las marcas no crecen con acciones aisladas. Crecen cuando la estrategia, el mensaje, la pauta y la experiencia digital
              empujan en la misma dirección.
            </p>
            <p>En Fusión Digital diseñamos esa dirección contigo y la ejecutamos de principio a fin.</p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Especialidades" title="Cinco servicios, una sola visión" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
            <ImageSlot label="Imagen o gráfico de servicios" className="min-h-64 sm:col-span-2 lg:col-span-1" tone="from-[#3A0F5E] to-[#7B9BD6]" />
          </div>
        </Container>
      </section>

      <section className="bg-mist py-20 text-ink sm:py-28">
        <Container>
          <SectionHeading light eyebrow="Proceso" title="Cómo trabajamos" lead="Un método claro para que siempre sepas en qué etapa está tu proyecto." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-[1.75rem] bg-white p-7">
                  <p.icon className="size-7 text-[#BCA4EC]" aria-hidden />
                  <h3 className="mt-6">{p.title}</h3>
                  <p className="mt-3 text-sm text-ink/65">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Diferenciadores" title="Por qué Fusión Digital" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.06}>
                <div className="flex h-full gap-5 rounded-[1.75rem] border border-white/10 bg-panel/40 p-7">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-lavender/15">
                    <d.icon className="size-5 text-icon" aria-hidden />
                  </span>
                  <div>
                    <h3>{d.title}</h3>
                    <p className="mt-2 text-sm text-white/65">{d.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner title="¿Listo para crecer?" cta="Contactar a la agencia" />
    </>
  )
}
