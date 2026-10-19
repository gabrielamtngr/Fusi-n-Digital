import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

const INTERACTIVE = 'a, button, input, textarea, select, label, summary, [role="button"], [data-cursor="hover"]'

/**
 * Puntero personalizado global (solo escritorio con puntero fino).
 * pointer-events: none — nunca intercepta clics ni selección.
 */
export function CustomCursor() {
  const reduced = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [pressed, setPressed] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const spring = reduced ? { stiffness: 2000, damping: 100 } : { stiffness: 380, damping: 32, mass: 0.6 }
  const ringX = useSpring(x, spring)
  const ringY = useSpring(y, spring)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setEnabled(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!enabled) return
    document.documentElement.classList.add('has-custom-cursor')
    const move = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }
    const over = (e: PointerEvent) => setHovering(!!(e.target as Element)?.closest?.(INTERACTIVE))
    const down = () => setPressed(true)
    const up = () => setPressed(false)
    const leave = () => setVisible(false)
    window.addEventListener('pointermove', move)
    document.addEventListener('pointerover', over)
    window.addEventListener('pointerdown', down)
    window.addEventListener('pointerup', up)
    document.documentElement.addEventListener('pointerleave', leave)
    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerover', over)
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
      document.documentElement.removeEventListener('pointerleave', leave)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  const ringScale = (hovering ? 1.8 : 1) * (pressed ? 0.75 : 1)

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999]" style={{ opacity: visible ? 1 : 0, transition: 'opacity .2s' }}>
      <motion.div
        className="absolute left-0 top-0 -ml-5 -mt-5 size-10 rounded-full border border-lavender"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: ringScale,
          backgroundColor: hovering ? 'rgba(191,166,238,0.16)' : 'rgba(191,166,238,0)',
          boxShadow: hovering ? '0 0 24px rgba(191,166,238,0.45)' : '0 0 0 rgba(191,166,238,0)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      />
      <motion.div
        className="absolute left-0 top-0 -ml-[3px] -mt-[3px] size-1.5 rounded-full bg-white mix-blend-difference"
        style={{ x, y }}
        animate={{ scale: pressed ? 0.6 : hovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
    </div>
  )
}
