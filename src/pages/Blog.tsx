import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Search, X } from 'lucide-react'
import { Container, CtaBanner, PageHero } from '../components/ui/Section'
import { PostCard } from '../components/cards'
import { blogCategories, formatDate, posts } from '../data/blog'
import { cdn } from '../data/site'

const PAGE_SIZE = 6
const normalize = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

export default function Blog() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<(typeof blogCategories)[number]>('Todos')
  const [limit, setLimit] = useState(PAGE_SIZE)

  const results = useMemo(() => {
    const q = normalize(query.trim())
    return posts.filter(
      (p) => (category === 'Todos' || p.category === category) && (!q || normalize(`${p.title} ${p.excerpt} ${p.intro} ${p.category}`).includes(q)),
    )
  }, [query, category])

  const featured = posts.find((p) => p.featured)!
  const filtering = query.trim() !== '' || category !== 'Todos'

  return (
    <>
      <PageHero
        eyebrow="Blog y recursos"
        title={
          <>
            Ideas, tendencias y <span className="text-gradient">aprendizajes.</span>
          </>
        }
        lead="Contenido práctico sobre marketing digital, tecnología y consumo para marcas que quieren crecer en la región."
        crumbs={[{ label: 'Inicio', to: '/' }, { label: 'Blog' }]}
      />

      {!filtering && (
        <section className="pb-12">
          <Container>
            <Link to={`/blog/${featured.slug}`} className="group grid overflow-hidden rounded-[2.5rem] border border-white/10 bg-panel/40 transition hover:border-lavender/50 lg:grid-cols-2">
              <div className="aspect-[16/10] overflow-hidden lg:aspect-auto">
                <img src={cdn(featured.image, 1200)} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <span className="eyebrow">Artículo destacado · {featured.category}</span>
                <h2 className="mt-5 !text-[clamp(1.8rem,1.2rem+2vw,3rem)]">{featured.title}</h2>
                <p className="mt-4 text-white/70">{featured.excerpt}</p>
                <p className="mt-6 text-xs text-white/50">{formatDate(featured.date)}</p>
                <span className="mt-8 inline-flex items-center gap-2 font-medium text-lavender">
                  Leer artículo <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </Link>
          </Container>
        </section>
      )}

      <section className="py-12">
        <Container>
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
              <label htmlFor="buscar" className="sr-only">
                Buscar artículos
              </label>
              <Search className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-white/40" aria-hidden />
              <input
                id="buscar"
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setLimit(PAGE_SIZE)
                }}
                placeholder="Buscar artículos…"
                className="w-full rounded-full border border-white/15 bg-white/5 py-3.5 pl-13 pr-12 text-[15px] placeholder:text-white/40 focus:border-lavender focus:outline-none focus:ring-4 focus:ring-lavender/15"
              />
              {query && (
                <button onClick={() => setQuery('')} aria-label="Limpiar búsqueda" className="absolute right-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full hover:bg-white/10">
                  <X className="size-4" aria-hidden />
                </button>
              )}
            </div>
            <div role="group" aria-label="Filtrar por categoría" className="flex flex-wrap gap-2">
              {blogCategories.map((c) => (
                <button
                  key={c}
                  aria-pressed={category === c}
                  onClick={() => {
                    setCategory(c)
                    setLimit(PAGE_SIZE)
                  }}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                    category === c ? 'bg-lavender text-ink' : 'border border-white/15 text-white/75 hover:border-lavender hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-6 text-sm text-white/50" aria-live="polite">
            {results.length === 1 ? '1 artículo' : `${results.length} artículos`}
            {query.trim() && ` para «${query.trim()}»`}
          </p>

          {results.length ? (
            <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {results.slice(0, limit).map((p) => (
                  <motion.div key={p.slug} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }}>
                    <PostCard post={p} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="mt-8 rounded-[2rem] border border-dashed border-white/20 p-12 text-center">
              <Search className="mx-auto size-10 text-lavender" aria-hidden />
              <h3 className="mt-4">No encontramos artículos</h3>
              <p className="mt-2 text-white/60">Prueba con otras palabras o cambia la categoría.</p>
              <button
                onClick={() => {
                  setQuery('')
                  setCategory('Todos')
                }}
                className="mt-6 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium transition hover:border-lavender hover:text-lavender"
              >
                Ver todos los artículos
              </button>
            </div>
          )}

          {results.length > limit && (
            <div className="mt-12 text-center">
              <button onClick={() => setLimit((l) => l + PAGE_SIZE)} className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:border-lavender hover:text-lavender">
                Cargar más
              </button>
            </div>
          )}
        </Container>
      </section>

      <CtaBanner title="¿Quieres aplicar estas ideas a tu marca?" />
    </>
  )
}
