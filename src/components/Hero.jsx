import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center section">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-rose-400 font-mono text-sm tracking-[0.2em] uppercase mb-6"
        >
          Associate Consultant
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white mb-10"
        >
          Brijesh Poojary
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-zinc-200 text-base md:text-lg leading-relaxed"
        >
          Building enterprise OpenShift platforms for banking & retail —
          hybrid, air-gapped, and edge.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center gap-6"
        >
          <a
            href="#contact"
            className="px-6 py-3 mt-3 bg-rose-600 hover:bg-rose-500 text-white text-sm font-medium rounded-full transition-colors"
          >
            Get in touch
          </a>
          <a href="#projects" className="text-sm text-zinc-400 hover:text-white transition-colors mt-3">
            View work →
          </a>
        </motion.div>
      </div>
    </section>
  )
}