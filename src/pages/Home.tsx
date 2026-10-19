import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Sparkles, TrendingUp } from 'lucide-react'
import { ButtonLink } from '../components/ui/Button'
import { Container, CtaBanner, Reveal, SectionHeading } from '../components/ui/Section'
import { ImageSlot, PandaSlot } from '../components/ui/PandaSlot'
import { PostCard, ProjectCard, ServiceCard } from '../components/cards'
import { ClientMarquee, TestimonialSlider } from '../components/sliders'
import { services } from '../data/services'
import { projects } from '../data/projects'
import { posts } from '../data/blog'
import { cultureMessage, talentCards } from '../data/talent'
import { cdn } from '../data/site'

const ease = [0.22, 1, 0.36, 1] as const

function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
      {/* Composición animada (sustituible por un <video autoPlay muted loop playsInline>) */}
      <motion.img
        src={cdn('/img/hero-fluid.jpg', 1920)}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-70"
        initial={{ scale: 1.15 }}
        animate={{ scale: [1.05, 1.12, 1.05], x: [0, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night via-night/85 to-night/30" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-transparent to-night/50" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_left,black,transparent_70%)]" aria-hidden />

      <Container className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.p className="eyebrow mb-6" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            <Sparkles className="size-4" aria-hidden /> Fusión Digital · Agencia de marketing
          </motion.p>
          <h1 className="!text-[clamp(2.9rem,1.2rem+6.4vw,7.25rem)]">
            {['Somos', 'una', 'agencia.'].map((w, i) => (
              <motion.span
                key={w}
                className={`mr-[0.22em] inline-block ${i === 2 ? 'text-gradient' : ''}`}
                initial={{ opacity: 0, y: 50, rotate: 3 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease }}
              >
                {w}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="mt-7 max-w-xl text-base text-white/75 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
          >
            Liberamos el potencial de tu marca con creatividad, experiencia y un profundo conocimiento del mercado. Diseñamos estrategias
            personalizadas que impulsan tu crecimiento, maximizan tu ROI y transforman desafíos en oportunidades.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease }}
          >
            <ButtonLink to="/trabajo">Conoce nuestro trabajo</ButtonLink>
            <ButtonLink to="/servicios" variant="secondary">
              Explora nuestros servicios
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease }}
        >
          <PandaSlot className="aspect-square w-full" width={900} label="Panda oficial de Fusión Digital abrazando el isotipo F" />
          <motion.div
            className="absolute -left-2 top-[18%] rounded-2xl border border-white/15 bg-night/70 px-4 py-3 backdrop-blur-md sm:-left-6"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="flex items-center gap-2 text-sm font-medium">
              <TrendingUp className="size-4 text-lavender" aria-hidden /> +100 campañas
            </span>
          </motion.div>
          <motion.div
            className="absolute -right-1 bottom-[14%] rounded-2xl bg-lavender px-4 py-3 text-ink shadow-xl sm:-right-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <span className="text-sm font-bold">Estrategia · Creatividad · Datos</span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default function Home() {
  const featured = projects.filter((p) => p.slug === 'princesasmd' || p.slug === 'backtoschool')

  return (
    <>
      <Hero />

      {/* B. Experiencia y clientes */}
      <section className="py-20 sm:py-28">
        <Container className="grid items-end gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className="eyebrow mb-4">Experiencia</p>
            <p className="text-[clamp(4.5rem,2rem+10vw,9rem)] font-extrabold leading-none tracking-tighter text-gradient">+100</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2>campañas efectivas ejecutadas para nuestros clientes.</h2>
          </Reveal>
        </Container>
        <div className="mt-14">
          <ClientMarquee />
        </div>
      </section>

      {/* C. Servicios */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading eyebrow="Servicios" title="Plataformas para marcas ambiciosas" lead="Cinco especialidades que trabajan como un solo equipo." />
            <ButtonLink to="/servicios" variant="secondary" className="shrink-0">
              Ver todos los servicios
            </ButtonLink>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* D. Talento — tema claro */}
      <section className="bg-mist py-20 text-ink sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <SectionHeading light eyebrow="Talento" title="El talento detrás de tu crecimiento" lead={cultureMessage} />
              <Reveal delay={0.1} className="mt-9">
                <ButtonLink to="/talento/oportunidades" variant="dark">
                  Únete al equipo
                </ButtonLink>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
              <ImageSlot label="Foto del equipo" className="aspect-[3/4]" />
              <div className="mt-10 overflow-hidden rounded-3xl bg-night">
                <PandaSlot className="aspect-[3/4] w-full" width={480} float={false} />
              </div>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {talentCards.map((t, i) => (
              <Reveal key={t.to} delay={i * 0.08}>
                <Link
                  to={t.to}
                  className="group flex h-full flex-col rounded-[1.75rem] border border-ink/10 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:border-[#BCA4EC] hover:shadow-[0_20px_50px_-20px_rgba(59,42,94,0.45)]"
                >
                  <span className="flex items-center justify-between">
                    <span className="text-xs font-medium tracking-[0.2em] text-[#6b4fb0] uppercase">0{i + 1}</span>
                    <ArrowUpRight className="size-5 text-[#BCA4EC] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </span>
                  <h3 className="mt-8">{t.title}</h3>
                  <p className="mt-3 text-sm text-ink/65">{t.text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* E. Proyectos destacados */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading eyebrow="Proyectos destacados" title="Transformamos desafíos en oportunidades" />
            <ButtonLink to="/trabajo" variant="secondary" className="shrink-0">
              Explorar todos los proyectos
            </ButtonLink>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
                <ProjectCard project={p} large />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* F. Testimonios */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <SectionHeading eyebrow="Testimonios" title="Lo que dicen nuestros clientes" lead="St Jacks, MD, Diana y Fusalmo confían en nuestro equipo." />
          <Reveal delay={0.1}>
            <TestimonialSlider />
          </Reveal>
        </Container>
      </section>

      {/* G. Blog */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading eyebrow="Blog" title="Ideas para marcas que quieren crecer" />
            <ButtonLink to="/blog" variant="secondary" className="shrink-0">
              Ver todos los artículos
            </ButtonLink>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner cta="Hablemos hoy" />
    </>
  )
}
