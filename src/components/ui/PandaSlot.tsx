import { motion } from 'framer-motion'
import { Camera, PawPrint } from 'lucide-react'
import { cdn, PANDA_IMAGE } from '../../data/site'

type PandaSlotProps = {
  className?: string
  /** `image` muestra el render oficial; `placeholder` reserva el espacio para el modelo 3D. */
  mode?: 'image' | 'placeholder'
  width?: number
  label?: string
  float?: boolean
}

/**
 * Espacio para la mascota oficial (panda 3D de Fusión Digital).
 * Para integrar el modelo 3D interactivo, reemplaza el contenido de este componente
 * (p. ej. con un <model-viewer> o un canvas de three.js); todos los usos se actualizan.
 */
export function PandaSlot({ className = '', mode = 'image', width = 720, label = 'Mascota oficial de Fusión Digital', float = true }: PandaSlotProps) {
  if (mode === 'placeholder') {
    return (
      <div
        data-panda-slot
        className={`relative grid place-items-center rounded-[2rem] border border-dashed border-lavender/40 bg-panel/30 text-center ${className}`}
      >
        <div className="flex flex-col items-center gap-3 p-6 text-lavender">
          <PawPrint className="size-10" aria-hidden />
          <span className="text-xs font-medium tracking-[0.2em] uppercase">Espacio para panda 3D</span>
        </div>
      </div>
    )
  }
  return (
    <motion.div
      data-panda-slot
      className={`relative ${className}`}
      animate={float ? { y: [0, -14, 0] } : undefined}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="absolute inset-[10%] rounded-full bg-lavender/25 blur-3xl" aria-hidden />
      <img
        src={cdn(PANDA_IMAGE, width)}
        alt={label}
        width={width}
        height={width}
        loading="eager"
        className="relative h-full w-full rounded-[2.5rem] object-cover shadow-2xl"
      />
    </motion.div>
  )
}

/** Placeholder para fotografías o gráficos que la agencia debe proporcionar. */
export function ImageSlot({ label, className = '', tone = 'from-panel to-data' }: { label: string; className?: string; tone?: string }) {
  return (
    <div
      className={`relative flex items-end overflow-hidden rounded-3xl bg-gradient-to-br ${tone} p-5 ${className}`}
      role="img"
      aria-label={`Espacio para fotografía: ${label}`}
    >
      <div className="absolute -right-10 -top-10 size-40 rounded-full bg-lavender/20 blur-2xl" aria-hidden />
      <span className="relative inline-flex items-center gap-2 rounded-full bg-night/60 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
        <Camera className="size-3.5 text-icon" aria-hidden />
        {label}
      </span>
    </div>
  )
}
