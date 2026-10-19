import { useState, type FormEvent } from 'react'
import { CircleCheck, LoaderCircle, Send, TriangleAlert } from 'lucide-react'
import { Button } from './ui/Button'
import { Consent, Field, Honeypot, Input, Select, Textarea } from './ui/Form'
import { emailPattern, submitForm } from '../lib/forms'
import { contact, mailHref } from '../data/site'

type Status = 'idle' | 'loading' | 'success' | 'error'

const areas = ['Estrategia', 'Medios', 'Creatividad', 'Multimedia', 'Development', 'Otra área']

/** Formulario de postulación (Oportunidades y Panda Trainee) enviado a Netlify Forms. */
export function ApplicationForm({ program, submitLabel = 'Enviar postulación' }: { program: string; submitLabel?: string }) {
  const [values, setValues] = useState({ nombre: '', email: '', telefono: '', area: '', portafolio: '', motivacion: '' })
  const [consent, setConsent] = useState(false)
  const [bot, setBot] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<Status>('idle')

  const set = (k: keyof typeof values) => (e: { target: { value: string } }) => setValues((v) => ({ ...v, [k]: e.target.value }))

  function validate() {
    const e: Record<string, string> = {}
    if (values.nombre.trim().length < 3) e.nombre = 'Escribe tu nombre completo.'
    if (!emailPattern.test(values.email)) e.email = 'Ingresa un correo válido.'
    if (values.telefono && !/^[+\d\s()-]{8,}$/.test(values.telefono)) e.telefono = 'Revisa el número de teléfono.'
    if (!values.area) e.area = 'Selecciona un área de interés.'
    if (values.portafolio && !/^https?:\/\/.+\..+/.test(values.portafolio)) e.portafolio = 'Usa un enlace completo (https://…).'
    if (values.motivacion.trim().length < 20) e.motivacion = 'Cuéntanos un poco más (mínimo 20 caracteres).'
    if (!consent) e.consentimiento = 'Necesitamos tu consentimiento para procesar la postulación.'
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
      await submitForm('postulacion', { ...values, programa: program, consentimiento: 'sí', 'bot-field': bot })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-[2rem] border border-lavender/40 bg-panel/50 p-10 text-center" role="status">
        <CircleCheck className="mx-auto size-12 text-lavender" aria-hidden />
        <h3 className="mt-5">¡Postulación recibida!</h3>
        <p className="mt-3 text-white/70">Gracias por tu interés en {program}. Nuestro equipo revisará tu perfil y te contactará por correo.</p>
      </div>
    )
  }

  return (
    <form name="postulacion" method="POST" data-netlify="true" netlify-honeypot="bot-field" noValidate onSubmit={onSubmit} className="space-y-5 rounded-[2rem] border border-white/10 bg-panel/40 p-6 sm:p-10">
      <input type="hidden" name="form-name" value="postulacion" />
      <Honeypot value={bot} onChange={setBot} />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="nombre" label="Nombre completo" error={errors.nombre}>
          <Input id="nombre" value={values.nombre} onChange={set('nombre')} autoComplete="name" error={errors.nombre} />
        </Field>
        <Field id="email" label="Correo electrónico" error={errors.email}>
          <Input id="email" type="email" value={values.email} onChange={set('email')} autoComplete="email" error={errors.email} />
        </Field>
        <Field id="telefono" label="Teléfono" optional error={errors.telefono}>
          <Input id="telefono" type="tel" value={values.telefono} onChange={set('telefono')} autoComplete="tel" error={errors.telefono} />
        </Field>
        <Field id="area" label="Área de interés" error={errors.area}>
          <Select id="area" value={values.area} onChange={set('area')} error={errors.area}>
            <option value="">Selecciona un área</option>
            {areas.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </Select>
        </Field>
      </div>
      <Field id="portafolio" label="Portafolio o LinkedIn" optional error={errors.portafolio}>
        <Input id="portafolio" type="url" placeholder="https://" value={values.portafolio} onChange={set('portafolio')} error={errors.portafolio} />
      </Field>
      <Field id="motivacion" label="¿Por qué quieres ser parte de Fusión Digital?" error={errors.motivacion}>
        <Textarea id="motivacion" value={values.motivacion} onChange={set('motivacion')} error={errors.motivacion} />
      </Field>
      <Consent id="consentimiento" checked={consent} onChange={setConsent} error={errors.consentimiento} />

      {status === 'error' && (
        <div className="flex gap-3 rounded-2xl border border-[#ff8fa3]/40 bg-[#ff8fa3]/10 p-4 text-sm text-white/85" role="alert">
          <TriangleAlert className="size-5 shrink-0 text-[#ff8fa3]" aria-hidden />
          <p>
            No pudimos enviar tu postulación. Inténtalo de nuevo o escríbenos a{' '}
            <a href={mailHref} className="text-lavender underline">
              {contact.email}
            </a>
            .
          </p>
        </div>
      )}

      <Button type="submit" disabled={status === 'loading'} className="w-full sm:w-auto">
        {status === 'loading' ? <LoaderCircle className="size-4 animate-spin" aria-hidden /> : <Send className="size-4" aria-hidden />}
        {status === 'loading' ? 'Enviando…' : submitLabel}
      </Button>
    </form>
  )
}
