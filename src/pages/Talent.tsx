import { Link } from 'react-router-dom'
import { ArrowUpRight, Award, HeartHandshake, Sparkles, Users } from 'lucide-react'
import { ButtonLink } from '../components/ui/Button'
import { Container, CtaBanner, PageHero, Reveal, SectionHeading } from '../components/ui/Section'
import { ImageSlot, PandaSlot } from '../components/ui/PandaSlot'
import { cultureMessage, talentCards } from '../data/talent'

const values = [
  { icon: Sparkles, title: 'Pasión', text: 'Nos emociona lo que hacemos y se nota en cada proyecto.' },
  { icon: Award, title: 'Excelencia', text: 'Cuidamos los detalles y buscamos siempre una versión mejor.' },
  { icon: Users, title: 'Colaboración', text: 'Las mejores ideas nacen cuando las disciplinas se mezclan.' },
  { icon: HeartHandshake, title: 'Cercanía', text: 'Tratamos a clientes y compañeros con respeto y confianza.' },
]

export default function Talent() {
  return (
    <>
      <PageHero
        eyebrow="Talento y cultura"
        title={
          <>
            El talento detrás de <span className="text-gradient">tu crecimiento.</span>
          </>
        }
        lead={cultureMessage}
        crumbs={[{ label: 'Inicio', to: '/' }, { label: 'Talento' }]}
        aside={<PandaSlot className="mx-auto aspect-square w-full max-w-md" label="Panda de Fusión Digital, embajador de nuestra cultura" />}
      >
        <ButtonLink to="/talento/oportunidades">Únete al equipo</ButtonLink>
      </PageHero>

      <section className="py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-3 sm:grid-rows-2">
            <ImageSlot label="Foto del equipo completo" className="min-h-64 sm:col-span-2 sm:row-span-2" />
            <ImageSlot label="Sesión creativa" className="min-h-48" tone="from-[#3A0F5E] to-[#7B9BD6]" />
            <ImageSlot label="Día a día en la agencia" className="min-h-48" tone="from-data to-panel" />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Nuestra cultura" title="Lo que nos mueve" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="h-full rounded-[1.75rem] border border-white/10 bg-panel/40 p-7">
                  <v.icon className="size-7 text-icon" aria-hidden />
                  <h3 className="mt-6">{v.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-20 text-ink sm:py-28">
        <Container>
          <SectionHeading light eyebrow="Explora" title="Crece con nosotros" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {talentCards.map((t, i) => (
              <Reveal key={t.to} delay={i * 0.08}>
                <Link to={t.to} className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(59,42,94,0.45)]">
                  {t.to.endsWith('panda-trainee') ? (
                    <div className="bg-night">
                      <PandaSlot className="aspect-[16/10] w-full" width={560} float={false} />
                    </div>
                  ) : (
                    <ImageSlot label={t.title} className="aspect-[16/10] !rounded-none" />
                  )}
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="flex items-center justify-between">
                      {t.title}
                      <ArrowUpRight className="size-5 text-[#BCA4EC] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                    </h3>
                    <p className="mt-3 text-sm text-ink/65">{t.text}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner title="¿Quieres ser parte de Fusión?" text="Buscamos personas curiosas, apasionadas y con ganas de transformar marcas." cta="Ver oportunidades" to="/talento/oportunidades" />
    </>
  )
}
