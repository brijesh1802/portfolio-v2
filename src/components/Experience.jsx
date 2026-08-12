import FadeIn from './FadeIn'

const jobs = [
  {
    role: 'Associate Consultant',
    company: 'KubeRox Technologies',
    period: 'Oct 2025 — Present',
    points: [
      'Deployed 3 production Hybrid OCP clusters on RHEL KVM for a banking client serving 80M+ customers.',
      'Built enterprise networking (DNS, HAProxy, ingress) under banking security standards.',
      'Delivered RHOSO v18 with 3-node HA Ceph and automated OpenStack services.',
      'Executed fully air-gapped OpenShift deployments using UPI & Agent-Based Installer.',
    ],
  },
  {
    role: 'Professional Services Intern',
    company: 'KubeRox Technologies',
    period: 'Apr 2025 — Oct 2025',
    points: [
      'Deployed Red Hat Device Edge with MicroShift across retail edge locations.',
      'Managed disconnected image mirroring with Podman & Quay Registry.',
      'Supported OpenShift deployments on GCP and edge platform operations.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Aroha Group',
    period: 'Jan 2025 — Apr 2025',
    points: [
      'Built RESTful APIs for a job portal using Node.js, Express & MongoDB.',
      'Implemented JWT auth supporting 100+ concurrent sessions.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <FadeIn>
          <p className="text-rose-400 font-mono text-sm tracking-[0.2em] uppercase mb-4">Experience</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white mb-10">
            Work
          </h2>
        </FadeIn>

        <div className="space-y-16">
          {jobs.map((job, i) => (
            <FadeIn key={job.role + job.period} delay={i * 0.08}>
              <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-10">
                <div>
                  <p className="text-sm text-zinc-400">{job.period}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-0.5">{job.role}</h3>
                  <p className="text-sm text-rose-400/80 mb-5">{job.company}</p>
                  <ul className="space-y-2.5">
                    {job.points.map((p) => (
                      <li key={p} className="text-[15px] text-zinc-400 leading-relaxed flex gap-3">
                        <span className="text-rose-500/50 mt-1.5 shrink-0">–</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}