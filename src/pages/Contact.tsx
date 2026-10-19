import { useState, type FormEvent } from 'react'
import { CircleCheck, LoaderCircle, Mail, Phone, Send, TriangleAlert } from 'lucide-react'
import { Container, PageHero } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { Consent, Field, Honeypot, Input, Select, Textarea } from '../components/ui/Form'
import { SocialLinks } from '../components/ui/SocialLinks'
import { PandaSlot } from '../components/ui/PandaSlot'
import { emailPattern, submitForm } from '../lib/forms'
import { contact, mailHref, telHref } from '../data/site'
import { services } from '../data/services'

const budgets = ['Menos de $1,000', '$1,000 – $3,000', '$3,000 – $10,000', 'Más de $10,000', 'Aún no lo sé']
const empty = { nombre: '', email: '', empresa: '', telefono: '', servicio: '', presupuesto: '', mensaje: '' }

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [consent, setConsent] = useState(false)
  const [bot, setBot] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const set = (k: keyof typeof empty) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }))
    if (errors[k]) setErrors(({ [k]: _, ...rest }) => rest)
  }

  function validate() {
    const e: Record<string, string> = {}
    if (values.nombre.trim().length < 3) e.nombre = 'Escribe tu nombre completo.'
    if (!emailPattern.test(values.email)) e.email = 'Ingresa un correo electrónico válido.'
    if (!/^[+\d\s()-]{8,}$/.test(values.telefono)) e.telefono = 'Ingresa un teléfono válido (mínimo 8 dígitos).'
    if (!values.servicio) e.servicio = 'Selecciona el servicio que te interesa.'
    if (values.mensaje.trim().length < 20) e.mensaje = 'Cuéntanos un poco más sobre tu proyecto (mínimo 20 caracteres).'
    if (!consent) e.consentimiento = 'Debes aceptar el tratamiento de datos para continuar.'
    return e
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) {
      document.getElementById(Object.keys(e)[0])?.focus()
      return
    }
    setStatus('loading')
    try {
      await submitForm('contacto', { ...values, consentimiento: 'sí', 'bot-field': bot })
      setStatus('success')
      setValues(empty)
      setConsent(false)
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title={
          <>
            Hablemos de tu <span className="text-gradient">próximo proyecto.</span>
          </>
        }
        lead="Nuestro equipo creativo está listo para dar vida a tus ideas con soluciones únicas y de alta calidad."
        crumbs={[{ label: 'Inicio', to: '/' }, { label: 'Contacto' }]}
      />

      <section className="pb-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <aside className="space-y-4">
            <a href={mailHref} className="group flex items-center gap-5 rounded-[1.75rem] border border-white/10 bg-panel/50 p-6 transition hover:border-lavender">
              <span className="grid size-12 place-items-center rounded-2xl bg-lavender text-ink">
                <Mail className="size-5" aria-hidden />
              </span>
              <span>
                <span className="block text-xs text-white/50">Correo</span>
                <span className="block font-medium break-all group-hover:text-lavender">{contact.email}</span>
              </span>
            </a>
            <a href={telHref} className="group flex items-center gap-5 rounded-[1.75rem] border border-white/10 bg-panel/50 p-6 transition hover:border-lavender">
              <span className="grid size-12 place-items-center rounded-2xl bg-lavender text-ink">
                <Phone className="size-5" aria-hidden />
              </span>
              <span>
                <span className="block text-xs text-white/50">Teléfono</span>
                <span className="block font-medium group-hover:text-lavender">
                  {contact.phoneCountryCode} {contact.phoneDisplay}
                </span>
              </span>
            </a>
            <div className="rounded-[1.75rem] border border-white/10 bg-panel/50 p-6">
              <p className="mb-4 text-xs text-white/50">Síguenos</p>
              <SocialLinks withLabels />
            </div>
            <PandaSlot className="mx-auto hidden aspect-square w-full max-w-xs lg:block" width={480} />
          </aside>

          {status === 'success' ? (
            <div className="grid place-items-center rounded-[2rem] border border-lavender/40 bg-panel/50 p-10 text-center" role="status">
              <div>
                <CircleCheck className="mx-auto size-14 text-lavender" aria-hidden />
                <h2 className="mt-6 !text-3xl">¡Mensaje enviado!</h2>
                <p className="mx-auto mt-3 max-w-md text-white/70">Gracias por escribirnos. Te responderemos lo antes posible al correo que nos compartiste.</p>
                <Button variant="secondary" className="mt-8" onClick={() => setStatus('idle')}>
                  Enviar otro mensaje
                </Button>
              </div>
            </div>
          ) : (
            <form
              name="contacto"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              noValidate
              onSubmit={onSubmit}
              className="space-y-5 rounded-[2rem] border border-white/10 bg-panel/40 p-6 sm:p-10"
            >
              <input type="hidden" name="form-name" value="contacto" />
              <Honeypot value={bot} onChange={setBot} />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="nombre" label="Nombre completo" error={errors.nombre}>
                  <Input id="nombre" value={values.nombre} onChange={set('nombre')} autoComplete="name" error={errors.nombre} />
                </Field>
                <Field id="email" label="Correo electrónico" error={errors.email}>
                  <Input id="email" type="email" value={values.email} onChange={set('email')} autoComplete="email" error={errors.email} />
                </Field>
                <Field id="empresa" label="Empresa" optional>
                  <Input id="empresa" value={values.empresa} onChange={set('empresa')} autoComplete="organization" />
                </Field>
                <Field id="telefono" label="Teléfono" error={errors.telefono}>
                  <Input id="telefono" type="tel" value={values.telefono} onChange={set('telefono')} autoComplete="tel" placeholder="+503 0000 0000" error={errors.telefono} />
                </Field>
                <Field id="servicio" label="Servicio de interés" error={errors.servicio}>
                  <Select id="servicio" value={values.servicio} onChange={set('servicio')} error={errors.servicio}>
                    <option value="">Selecciona un servicio</option>
                    {services.map((s) => (
                      <option key={s.slug}>{s.name}</option>
                    ))}
                    <option>Varios servicios</option>
                  </Select>
                </Field>
                <Field id="presupuesto" label="Presupuesto estimado" optional>
                  <Select id="presupuesto" value={values.presupuesto} onChange={set('presupuesto')}>
                    <option value="">Prefiero no indicarlo</option>
                    {budgets.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </Select>
                </Field>
              </div>
              <Field id="mensaje" label="Mensaje" error={errors.mensaje}>
                <Textarea id="mensaje" value={values.mensaje} onChange={set('mensaje')} placeholder="Cuéntanos sobre tu marca, tus objetivos y tus plazos." error={errors.mensaje} />
              </Field>
              <Consent id="consentimiento" checked={consent} onChange={setConsent} error={errors.consentimiento} />

              {status === 'error' && (
                <div className="flex gap-3 rounded-2xl border border-[#ff8fa3]/40 bg-[#ff8fa3]/10 p-4 text-sm text-white/85" role="alert">
                  <TriangleAlert className="size-5 shrink-0 text-[#ff8fa3]" aria-hidden />
                  <p>
                    No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos directamente a{' '}
                    <a href={mailHref} className="text-lavender underline">
                      {contact.email}
                    </a>
                    .
                  </p>
                </div>
              )}

              <Button type="submit" disabled={status === 'loading'} className="w-full sm:w-auto">
                {status === 'loading' ? <LoaderCircle className="size-4 animate-spin" aria-hidden /> : <Send className="size-4" aria-hidden />}
                {status === 'loading' ? 'Enviando…' : 'Enviar mensaje'}
              </Button>
            </form>
          )}
        </Container>
      </section>
    </>
  )
}
