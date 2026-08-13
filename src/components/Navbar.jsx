import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'training', label: 'Training' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 md:px-6 pt-3">
      <nav
        className={`max-w-4xl mx-auto flex items-center justify-between h-14 px-5 md:px-8 rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'bg-white/[0.04] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'bg-transparent border border-transparent'
        }`}
        style={
          scrolled
            ? {
                background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(225,29,72,0.04) 50%, rgba(255,255,255,0.03) 100%)',
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              }
            : {}
        }
      >
        <button
          onClick={() => go('home')}
          className="font-display font-semibold text-lg tracking-tight text-white"
        >
          BP<span className="text-rose-500">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`text-sm transition-colors ${
                  activeSection === l.id
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-zinc-400" onClick={() => setOpen(!open)}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu — same liquid glass */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-4xl mx-auto mt-2 rounded-2xl overflow-hidden border border-white/10"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(225,29,72,0.05) 100%)',
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
            }}
          >
            <div className="px-5 py-3 space-y-1">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="block w-full text-left py-2.5 text-sm text-zinc-400 hover:text-white"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}