import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const leave = () => setVisible(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', leave)
    }
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-[2] hidden md:block"
      animate={{
        x: pos.x - 200,
        y: pos.y - 200,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
      style={{
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(225,29,72,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
      }}
    />
  )
}