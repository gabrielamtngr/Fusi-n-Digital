import { motion } from 'framer-motion'
import { ButtonLink } from '../components/ui/Button'
import { Container } from '../components/ui/Section'
import { PandaSlot } from '../components/ui/PandaSlot'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" aria-hidden />
      <Container className="relative grid items-center gap-10 lg:grid-cols-2">
        <div>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-[clamp(6rem,3rem+14vw,13rem)] font-extrabold leading-none tracking-tighter text-gradient">
            404
          </motion.p>
          <h1 className="!text-[clamp(1.8rem,1.2rem+2.5vw,3.25rem)]">Esta página se fue de paseo.</h1>
          <p className="mt-5 max-w-md text-white/70">La ruta que buscas no existe o cambió de lugar. Nuestro panda te ayuda a volver.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/">Volver al inicio</ButtonLink>
            <ButtonLink to="/contacto" variant="secondary">
              Contáctanos
            </ButtonLink>
          </div>
        </div>
        <PandaSlot className="mx-auto aspect-square w-full max-w-md" />
      </Container>
    </section>
  )
}
