import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Calendar, Clock } from 'lucide-react'
import type { Service } from '../data/services'
import type { Project } from '../data/projects'
import { formatDate, type BlogPost } from '../data/blog'
import { cdn } from '../data/site'

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = service.icon
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-panel/60 p-7 transition duration-500 hover:-translate-y-1.5 hover:border-lavender/60 hover:bg-panel"
    >
      <div className={`absolute inset-x-0 top-0 h-1 ${service.theme === 'bg-creative' ? 'bg-creative' : 'bg-lavender/70'} opacity-0 transition group-hover:opacity-100`} aria-hidden />
      <div className="absolute -right-12 -top-12 size-36 rounded-full bg-lavender/0 blur-2xl transition duration-500 group-hover:bg-lavender/25" aria-hidden />
      <span className={`relative grid size-14 place-items-center rounded-2xl ${service.theme} border border-white/10`}>
        <Icon className="size-6 text-icon" aria-hidden />
      </span>
      <h3 className="relative mt-7">{service.name}</h3>
      <p className="relative mt-3 flex-1 text-sm text-white/65">{service.short}</p>
      <Link
        to={`/servicios/${service.slug}`}
        className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-lavender transition hover:text-white after:absolute after:inset-0 after:content-['']"
        aria-label={`Explorar servicio: ${service.name}`}
      >
        Explorar servicio <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
      </Link>
    </motion.article>
  )
}

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-panel/40">
      <div className={`relative overflow-hidden ${large ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition duration-700 group-hover:scale-105`} aria-hidden />
        <div className="absolute inset-0 grid place-items-center p-6 text-center" role="img" aria-label={`Espacio para imagen del proyecto ${project.name}`}>
          <span className="text-[clamp(1.6rem,1rem+2vw,2.6rem)] font-extrabold leading-tight tracking-tight text-white/90 drop-shadow">{project.name}</span>
        </div>
        <span className="absolute left-5 top-5 rounded-full bg-night/70 px-3 py-1 text-xs font-medium backdrop-blur">{project.client}</span>
        {project.metrics[0] && (
          <span className="absolute bottom-5 right-5 rounded-2xl bg-lavender px-4 py-2 text-ink">
            <span className="block text-xl font-extrabold leading-none">{project.metrics[0].value}</span>
            <span className="text-[11px] font-medium">{project.metrics[0].label}</span>
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="flex flex-wrap gap-2">
          {project.categories.map((c) => (
            <span key={c} className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-medium text-white/60">
              {c}
            </span>
          ))}
        </div>
        <h3 className="mt-4 flex-1">{project.title}</h3>
        <Link
          to={`/trabajo/${project.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-lavender transition hover:text-white after:absolute after:inset-0 after:content-['']"
        >
          Ver caso de éxito <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        </Link>
      </div>
    </article>
  )
}

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-panel/40 transition duration-500 hover:-translate-y-1 hover:border-lavender/50">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={cdn(post.image, 720)}
          alt=""
          loading="lazy"
          width={720}
          height={450}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center gap-3 text-xs text-white/50">
          <span className="rounded-full bg-lavender/15 px-3 py-1 font-medium text-lavender">{post.category}</span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="size-3.5" aria-hidden /> {formatDate(post.date)}
          </span>
          <span className="hidden items-center gap-1 sm:inline-flex">
            <Clock className="size-3.5" aria-hidden /> {post.readingMinutes} min
          </span>
        </div>
        <h3 className="mt-4">{post.title}</h3>
        <p className="mt-3 flex-1 text-sm text-white/65">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-lavender transition hover:text-white after:absolute after:inset-0 after:content-['']"
        >
          Leer artículo <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
        </Link>
      </div>
    </article>
  )
}
