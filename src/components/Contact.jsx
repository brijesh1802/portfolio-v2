import FadeIn from './FadeIn'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <FadeIn>
          <p className="text-rose-400 font-mono text-sm tracking-[0.2em] uppercase mb-4">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white mb-10">
            Let’s talk
          </h2>
          <p className="text-zinc-200 text-base md:text-lg leading-relaxed">
            Open to infrastructure challenges and new opportunities.
              Feel free to reach out.
          </p>
        </FadeIn>

<FadeIn delay={0.15}>
  <div className="flex flex-col gap-5">
    <a
      href="mailto:brijeshpujari333@gmail.com"
      className="group flex items-center gap-3 text-white hover:text-rose-400 transition-colors"
    >
      <span className="flex h-10 w-10 items-center mt-3 justify-center rounded-full bg-zinc-800/80 text-zinc-400 group-hover:bg-rose-500/10 group-hover:text-rose-400 transition-colors">
        ✉
      </span>
      <span className="text-base md:text-lg font-medium tracking-tight mt-3">
        brijeshpujari333@gmail.com
      </span>
    </a>

    <a
      href="https://linkedin.com/in/brijesh-poojary3"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 text-zinc-300 hover:text-white transition-colors"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800/80 text-zinc-400 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors">
        in
      </span>
      <span className="text-base md:text-lg font-medium tracking-tight">
        LinkedIn
      </span>
    </a>

  </div>
</FadeIn>
      </div>
    </section>
  )
}