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
            Open to infrastructure challenges and OpenShift opportunities.
            Feel free to reach out.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="space-y-4">
            <a
              href="mailto:brijeshpujari333@gmail.com"
              className="block text-lg text-white hover:text-rose-400 transition-colors italic"
            >
              brijeshpujari333@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/brijesh-poojary3"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-zinc-400 hover:text-white transition-colors"
            >
              LinkedIn →
            </a>
            <p className="text-zinc-400 text-sm">+91 89717 72728</p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}