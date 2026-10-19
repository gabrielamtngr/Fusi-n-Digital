import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Info } from 'lucide-react'
import { Container, CtaBanner, Reveal } from '../components/ui/Section'
import { PostCard } from '../components/cards'
import { formatDate, getPost, posts } from '../data/blog'
import { cdn } from '../data/site'
import { motion } from 'framer-motion'
import NotFound from './NotFound'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)
  if (!post) return <NotFound />

  const related = posts.filter((p) => p.slug !== post.slug)

  return (
    <>
      <article>
        <header className="relative overflow-hidden pt-24 pb-12 sm:pt-28">
          <div className="absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-lavender/15 blur-[120px]" aria-hidden />
          <Container className="relative max-w-4xl">
            <span className="rounded-full bg-lavender/15 px-3 py-1 text-xs font-medium text-lavender">{post.category}</span>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mt-6 !text-[clamp(2.2rem,1.2rem+4vw,4.5rem)]">
              {post.title}
            </motion.h1>
            <div className="mt-6 flex flex-wrap gap-5 text-sm text-white/55">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4" aria-hidden />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4" aria-hidden /> {post.readingMinutes} min de lectura
              </span>
            </div>
          </Container>
        </header>

        <Container className="max-w-5xl">
          <motion.img
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src={cdn(post.image, 1600)}
            alt=""
            className="aspect-[16/8] w-full rounded-[2.5rem] object-cover"
          />
        </Container>

        <Container className="max-w-3xl py-16">
          <p className="text-xl leading-relaxed text-white/85 sm:text-2xl">{post.intro}</p>
          {post.blocks.map((b) => (
            <Reveal key={b.heading} className="mt-12">
              <h2 className="!text-[clamp(1.5rem,1.2rem+1.2vw,2.2rem)]">{b.heading}</h2>
              {b.paragraphs.map((p) => (
                <p key={p} className="mt-4 leading-relaxed text-white/75 sm:text-lg">
                  {p}
                </p>
              ))}
              {b.bullets && (
                <ul className="mt-5 space-y-2.5">
                  {b.bullets.map((x) => (
                    <li key={x} className="flex gap-3 text-white/75 sm:text-lg">
                      <span className="mt-2.5 size-2 shrink-0 rounded-full bg-lavender" aria-hidden /> {x}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}

          <aside className="mt-14 flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/55">
            <Info className="size-5 shrink-0 text-icon" aria-hidden />
            Este artículo es contenido editorial de orientación general. No incluye estadísticas verificadas; consulta fuentes oficiales antes de tomar decisiones.
          </aside>

          <Link to="/blog" className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-lavender transition hover:text-white">
            <ArrowLeft className="size-4" aria-hidden /> Volver al blog
          </Link>
        </Container>
      </article>

      <section className="py-16">
        <Container>
          <h2 className="!text-[clamp(1.6rem,1.2rem+1.6vw,2.5rem)]">Artículos relacionados</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner title="¿Hablamos de tu estrategia digital?" />
    </>
  )
}
