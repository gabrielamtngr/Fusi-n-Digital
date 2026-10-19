import type { ComponentProps, ReactNode } from 'react'
import { CircleAlert } from 'lucide-react'

const control =
  'w-full rounded-2xl border bg-white/5 px-4 py-3.5 text-[15px] text-white placeholder:text-white/35 transition focus:border-lavender focus:bg-white/8 focus:outline-none focus:ring-4 focus:ring-lavender/15'

const border = (error?: string) => (error ? 'border-[#ff8fa3]' : 'border-white/15 hover:border-white/30')

export function Field({ id, label, error, optional, children }: { id: string; label: string; error?: string; optional?: boolean; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between text-sm font-medium text-white/85">
        {label}
        {optional && <span className="text-xs font-normal text-white/40">Opcional</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-1.5 text-xs text-[#ff8fa3]" role="alert">
          <CircleAlert className="size-3.5" aria-hidden /> {error}
        </p>
      )}
    </div>
  )
}

type Common = { id: string; error?: string }

export const Input = ({ id, error, className = '', ...p }: Common & ComponentProps<'input'>) => (
  <input id={id} name={id} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} className={`${control} ${border(error)} ${className}`} {...p} />
)

export const Textarea = ({ id, error, className = '', ...p }: Common & ComponentProps<'textarea'>) => (
  <textarea id={id} name={id} rows={5} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} className={`${control} ${border(error)} resize-y ${className}`} {...p} />
)

export const Select = ({ id, error, className = '', children, ...p }: Common & ComponentProps<'select'>) => (
  <select
    id={id}
    name={id}
    aria-invalid={!!error}
    aria-describedby={error ? `${id}-error` : undefined}
    className={`${control} ${border(error)} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%23BFA6EE' stroke-width='2'%3E%3Cpath d='m4 6 4 4 4-4'/%3E%3C/svg%3E")] bg-[position:right_1rem_center] bg-no-repeat pr-10 [&>option]:bg-night ${className}`}
    {...p}
  >
    {children}
  </select>
)

export function Consent({ id, checked, onChange, error }: { id: string; checked: boolean; onChange: (v: boolean) => void; error?: string }) {
  return (
    <div>
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-sm font-normal text-white/70">
        <input
          id={id}
          name={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-0.5 size-5 shrink-0 accent-[#BFA6EE]"
        />
        <span>
          Acepto el tratamiento de mis datos personales conforme a la{' '}
          <a href="/privacidad" target="_blank" className="text-lavender underline underline-offset-2">
            política de privacidad
          </a>
          .
        </span>
      </label>
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-1.5 text-xs text-[#ff8fa3]" role="alert">
          <CircleAlert className="size-3.5" aria-hidden /> {error}
        </p>
      )}
    </div>
  )
}

/** Banda honeypot anti-spam de Netlify Forms (oculta a personas). */
export const Honeypot = ({ value, onChange }: { value: string; onChange: (v: string) => void }) => (
  <p className="hidden" aria-hidden>
    <label>
      No llenar: <input name="bot-field" tabIndex={-1} autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  </p>
)
