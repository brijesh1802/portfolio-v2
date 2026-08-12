import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }

    const down = () => setHovering(true)
    const up = () => setHovering(false)

    const over = (e) => {
      const t = e.target
      if (
        t.tagName === 'A' ||
        t.tagName === 'BUTTON' ||
        t.closest('a') ||
        t.closest('button')
      ) {
        setHovering(true)
      }
    }

    const out = (e) => {
      const t = e.target
      if (
        t.tagName === 'A' ||
        t.tagName === 'BUTTON' ||
        t.closest('a') ||
        t.closest('button')
      ) {
        setHovering(false)
      }
    }

    const leave = () => setVisible(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    window.addEventListener('mouseover', over)
    window.addEventListener('mouseout', out)
    document.body.addEventListener('mouseleave', leave)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      window.removeEventListener('mouseover', over)
      window.removeEventListener('mouseout', out)
      document.body.removeEventListener('mouseleave', leave)
    }
  }, [])

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: pos.x - 16,
          y: pos.y - 16,
          scale: hovering ? 1.8 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.4 }}
        style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '1.5px solid rgba(251, 113, 133, 0.8)',
        }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: hovering ? 0.5 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.2 }}
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#e11d48',
          boxShadow: '0 0 12px 2px rgba(225, 29, 72, 0.6)',
        }}
      />
    </>
  )
}