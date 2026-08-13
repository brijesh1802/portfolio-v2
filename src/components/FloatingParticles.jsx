import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const particles = Array.from({ length: 32 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 5 + 3,
  duration: Math.random() * 10 + 8,
  delay: Math.random() * 4,
}))

export default function FloatingParticles() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Only enable on desktop with fine pointer
    const isDesktop = window.matchMedia('(min-width: 768px) and (pointer: fine)').matches
    setEnabled(isDesktop)
  }, [])

  if (!enabled) return null

  return (
    <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: 'radial-gradient(circle, #fb7185 0%, #e11d48 60%, transparent 100%)',
            boxShadow: '0 0 12px 2px rgba(225, 29, 72, 0.5)',
          }}
          animate={{
            y: [0, -60, 25, -30, 0],
            x: [0, 25, -18, 12, 0],
            opacity: [0.35, 0.85, 0.5, 0.75, 0.35],
            scale: [1, 1.5, 0.9, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}