/*
  Envío de formularios.
  Por defecto usa Netlify Forms (formularios registrados en public/__forms.html).
  Para usar otro proveedor (Formspree, un endpoint propio, etc.) define VITE_FORM_ENDPOINT;
  en ese caso los datos se envían como JSON a esa URL.
*/

const customEndpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

export async function submitForm(formName: string, data: Record<string, string>) {
  const res = customEndpoint
    ? await fetch(customEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ form: formName, ...data }),
      })
    : await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': formName, ...data }).toString(),
      })
  if (!res.ok) throw new Error(`El servidor respondió ${res.status}`)
}

export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
