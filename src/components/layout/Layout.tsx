import { AnimatePresence, motion } from 'framer-motion'
import { useLocation, useOutlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { CustomCursor } from './CustomCursor'

export function Layout() {
  const location = useLocation()
  const outlet = useOutlet()

  return (
    <>
      <a
        href="#contenido"
        className="fixed left-4 top-4 z-[70] -translate-y-24 rounded-full bg-lavender px-4 py-2 text-sm font-medium text-ink transition focus:translate-y-0"
      >
        Saltar al contenido
      </a>
      <Header />
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
        <motion.main
          id="contenido"
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-screen"
        >
          {outlet}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <CustomCursor />
    </>
  )
}
