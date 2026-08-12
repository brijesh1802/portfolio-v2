import FadeIn from './FadeIn'

const certs = [
  {
    code: 'EX280',
    name: 'Red Hat Certified OpenShift Administrator',
    issuer: 'Red Hat',
    desc: 'Validates hands-on expertise in deploying, configuring, and managing OpenShift Container Platform clusters including networking, storage, security policies, and application lifecycle management.',
  },
  {
    code: 'NCP-MCI 6',
    name: 'Nutanix Certified Professional — Multicloud Infrastructure',
    issuer: 'Nutanix',
    desc: 'Demonstrates advanced proficiency in Nutanix HCI environments including AOS/AHV administration, cluster operations, data protection, and multicloud infrastructure management.',
  },
  {
    code: 'NCP-CN 6.10',
    name: 'Nutanix Certified Professional — Cloud Native',
    issuer: 'Nutanix',
    desc: 'Validates expertise in deploying, managing, and troubleshooting cloud-native applications on Nutanix Kubernetes Platform (NKP), including container orchestration and application lifecycle management.',
  },
  {
    code: 'NCA 6.10',
    name: 'Nutanix Certified Associate',
    issuer: 'Nutanix',
    desc: 'Validates foundational knowledge of Nutanix hyperconverged infrastructure, AHV hypervisor, Prism management, VM provisioning, and data resiliency fundamentals.',
  },
]

export default function Certifications() {
  return (
    <section id="certs" className="section">
      <div className="container">
        <FadeIn>
          <p className="text-rose-400 font-mono text-sm tracking-[0.2em] uppercase mb-4">Certifications</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white mb-10">
            Certifications
          </h2>
        </FadeIn>

        <div className="space-y-8">
          {certs.map((c, i) => (
            <FadeIn key={c.code} delay={i * 0.07}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <span className="font-mono text-xs text-rose-400 w-28 shrink-0 font-bold pt-1">
                  {c.code}
                </span>
                <div>
                  <p className="text-base text-white font-medium mb-0.5">{c.name}</p>
                  <p className="text-xs text-zinc-400 mb-2">{c.issuer}</p>
                  <p className="text-sm text-zinc-200 leading-relaxed max-w-2xl">{c.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}