import FadeIn from './FadeIn'

const topics = [
  {
    title: 'OpenShift Fundamentals',
    desc: 'Platform architecture, operators, projects, and day-1 cluster concepts.',
  },
  {
    title: 'Cluster Deployment',
    desc: 'UPI, Assisted Installer, Agent-Based Installer — including air-gapped setups.',
  },
  {
    title: 'Networking',
    desc: 'DNS, HAProxy, Ingress routing for production clusters.',
  },
  {
    title: 'Kubernetes Core',
    desc: 'Pods, services, workloads, and operator building blocks.',
  },
  {
    title: 'Day-2 Operations',
    desc: 'Monitoring, logging, troubleshooting, and production readiness.',
  },
]

export default function Training() {
  return (
    <section id="training" className="section">
      <div className="container">
        <FadeIn>
          <p className="text-rose-400 font-mono text-sm tracking-[0.2em] uppercase mb-4">
            Training
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Learn OpenShift the production way
          </h2>
          <p className="text-zinc-200 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
            Hands-on sessions for individuals and teams who want real deployment skills —
            hybrid, edge, and air-gapped environments included.
          </p>
        </FadeIn>

        {/* Single glass container with all topics */}
        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 mb-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((t) => (
                <div key={t.title}>
                  <h3 className="text-sm font-medium text-white mb-1.5">{t.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* CTA — scrolls to contact form */}
        <FadeIn delay={0.15}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-6 py-5 md:px-8">
            <div>
              <p className="text-white font-medium mb-0.5">Open to conducting training</p>
              <p className="text-sm text-zinc-400">Online · Flexible schedule</p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center shrink-0 px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white text-sm font-medium rounded-full transition-colors"
            >
              Request a session
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}