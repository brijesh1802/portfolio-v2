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
    desc: 'DNS, HAProxy, Ingress',
  },
  {
    title: 'Kubernetes Core',
    desc: 'Pods, services, workloads, and the building blocks operators rely on.',
  },
  {
    title: 'Day-2 Operations',
    desc: 'Monitoring, logging, troubleshooting, and production readiness checks.',
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
          <p className="text-zinc-200 text-base md:text-lg leading-relaxed max-w-2xl mb-14">
            Hands-on sessions for individuals and teams who want real deployment skills —
            hybrid, edge, and air-gapped environments included.
          </p>
        </FadeIn>

        {/* Topic cards — different from Contact */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {topics.map((t, i) => (
            <FadeIn key={t.title} delay={i * 0.05}>
              <div className="card h-full">
                <h3 className="text-base font-medium text-white mb-2">{t.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{t.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Compact CTA strip */}
        <FadeIn delay={0.15}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-6 md:px-8">
            <div>
              <p className="text-white font-medium mb-1">Open to conducting training</p>
              <p className="text-sm text-zinc-400">
                Online
              </p>
            </div>
            <a
              href="mailto:brijeshpujari333@gmail.com?subject=OpenShift%20/%20Kubernetes%20Training"
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