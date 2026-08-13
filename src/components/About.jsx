import FadeIn from './FadeIn'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <FadeIn>
          <p className="text-rose-400 font-mono text-sm tracking-[0.2em] uppercase mb-4">About</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white mb-10">
            Who I am
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-5 text-zinc-200 text-base md:text-lg leading-relaxed max-w-3xl">
            <p>
              Results-driven Associate Consultant in Professional Services with hands-on experience
              deploying and managing enterprise-grade OpenShift Container Platform (OCP) clusters
              across banking and retail sectors.
            </p>
            <p>
              Proven ability to deliver complex, time-sensitive infrastructure projects in disconnected
              and air-gapped environments. Certified Red Hat OpenShift Administrator (EX280) and
              Nutanix Certified Professional (NCP-MCI 6).
            </p>
            <p>
              Skilled in RHOCP, MicroShift, RHEL KVM, Ceph Storage, and edge
              computing — with a track record of meeting 100% of customer-defined SLAs and acceptance
              criteria on every enterprise engagement.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {[
              { label: 'Role', value: 'Associate Consultant' },
              { label: 'Focus', value: 'OpenShift / Nutanix Kubernetes Platform' },
              { label: 'Certs', value: '4 Active' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-sm text-zinc-200">{item.value}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}