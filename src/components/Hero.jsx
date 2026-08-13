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
          Associate Consultant · Professional Services
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-white mb-6"
        >
          Brijesh Poojary
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-zinc-200 text-xl md:text-1xl max-w-2xl leading-relaxed mb-10"
        >
          I deploy production OpenShift / Nutanix Kubernetes platforms — hybrid, air-gapped, and edge — for enterprises across industries.
        </motion.p>

        {/* Highlight metrics */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap gap-8 mb-12"
        >
          {[
            { value: '3', label: 'Production OCP clusters' },
            { value: '80M+', label: 'Users impacted' },
            { value: '100%', label: 'SLA delivery' },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-2xl md:text-3xl font-display font-semibold text-white">
                {item.value}
              </p>
              <p className="text-sm text-zinc-400 mt-1">{item.label}</p>
            </div>
          ))}
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="px-7 py-3.5 bg-rose-600 hover:bg-rose-500 text-white text-sm font-medium rounded-full transition-colors"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="px-7 py-3.5 border border-white/10 hover:border-rose-500/40 text-zinc-200 hover:text-white text-sm font-medium rounded-full transition-colors"
          >
            View work →
          </a>
        </motion.div>
      </div>
    </section>
  )
}