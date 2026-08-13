import FadeIn from './FadeIn'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <FadeIn>
          <p className="text-rose-400 font-mono text-sm tracking-[0.2em] uppercase mb-4">
            Contact
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Let’s talk
          </h2>
          <p className="text-zinc-200 text-base md:text-lg leading-relaxed max-w-xl mb-4">
            Open to OpenShift, infrastructure, and platform engineering opportunities.
            Whether it’s a role, a project, or a quick technical discussion — reach out.
          </p>
          <p className="text-zinc-400 text-sm mb-12">
            Currently based in Hyderabad · Available for remote or hybrid work
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-14">
            <a
              href="mailto:brijeshpujari333@gmail.com"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-rose-600 hover:bg-rose-500 text-white text-sm font-medium rounded-full transition-colors"
            >
              Email me
            </a>
            <a
              href="https://linkedin.com/in/brijesh-poojary3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/10 hover:border-rose-500/40 text-zinc-200 hover:text-white text-sm font-medium rounded-full transition-colors"
            >
              LinkedIn →
            </a>
          </div>
        </FadeIn>

        {/* <FadeIn delay={0.2}>
          <div className="space-y-4 border-t border-white/5 pt-10">
            <a
              href="mailto:brijeshpujari333@gmail.com"
              className="block text-lg md:text-xl text-white hover:text-rose-400 transition-colors"
            >
              brijeshpujari333@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/brijesh-poojary3"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-zinc-400 hover:text-white transition-colors"
            >
              linkedin.com/in/brijesh-poojary3
            </a>
            <p className="text-zinc-500 text-sm">+91 89717 72728</p>
          </div>
        </FadeIn> */}
      </div>
    </section>
  )
}