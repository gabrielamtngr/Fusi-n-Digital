import type { ReactNode } from 'react'
import { Container, PageHero } from '../components/ui/Section'
import { contact, mailHref } from '../data/site'

/*
  Textos legales de referencia. Deben ser revisados por asesoría legal antes de su publicación definitiva.
*/

function LegalPage({ title, crumb, updated, children }: { title: string; crumb: string; updated: string; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} lead={`Última actualización: ${updated}`} crumbs={[{ label: 'Inicio', to: '/' }, { label: crumb }]} />
      <section className="pb-24">
        <Container className="max-w-3xl space-y-10 text-white/75 [&_h2]:!text-2xl [&_h2]:text-white [&_p]:mt-3 [&_p]:leading-relaxed">{children}</Container>
      </section>
    </>
  )
}

export function Privacy() {
  return (
    <LegalPage title="Política de privacidad" crumb="Política de privacidad" updated="14 de octubre de 2026">
      <div>
        <h2>1. Responsable del tratamiento</h2>
        <p>
          Fusión Digital es responsable del tratamiento de los datos personales que recibe a través de este sitio. Puedes escribirnos a{' '}
          <a href={mailHref} className="text-lavender underline">
            {contact.email}
          </a>
          .
        </p>
      </div>
      <div>
        <h2>2. Datos que recopilamos</h2>
        <p>Nombre, correo electrónico, teléfono, empresa y la información que compartas voluntariamente en los formularios de contacto y postulación.</p>
      </div>
      <div>
        <h2>3. Finalidad</h2>
        <p>Usamos tus datos para responder tus consultas, preparar propuestas comerciales y evaluar postulaciones a nuestros programas y vacantes.</p>
      </div>
      <div>
        <h2>4. Conservación y seguridad</h2>
        <p>Conservamos la información solo durante el tiempo necesario para la finalidad indicada y aplicamos medidas razonables para protegerla.</p>
      </div>
      <div>
        <h2>5. Tus derechos</h2>
        <p>Puedes solicitar el acceso, la corrección o la eliminación de tus datos escribiendo a nuestro correo de contacto.</p>
      </div>
    </LegalPage>
  )
}

export function Terms() {
  return (
    <LegalPage title="Términos y condiciones" crumb="Términos y condiciones" updated="14 de octubre de 2026">
      <div>
        <h2>1. Uso del sitio</h2>
        <p>Al navegar en este sitio aceptas utilizarlo de forma lícita y respetuosa, sin afectar su funcionamiento ni el de terceros.</p>
      </div>
      <div>
        <h2>2. Propiedad intelectual</h2>
        <p>El logotipo, la mascota, los textos y los diseños de Fusión Digital están protegidos. No pueden reproducirse sin autorización previa.</p>
      </div>
      <div>
        <h2>3. Contenido informativo</h2>
        <p>Los artículos del blog tienen fines informativos y no constituyen asesoría profesional personalizada.</p>
      </div>
      <div>
        <h2>4. Enlaces externos</h2>
        <p>Este sitio puede incluir enlaces a redes sociales y otros sitios. Fusión Digital no se responsabiliza por su contenido.</p>
      </div>
      <div>
        <h2>5. Cambios</h2>
        <p>Podemos actualizar estos términos en cualquier momento. La versión vigente será siempre la publicada en esta página.</p>
      </div>
    </LegalPage>
  )
}
