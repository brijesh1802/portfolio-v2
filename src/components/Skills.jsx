import FadeIn from './FadeIn'

const groups = [
  {
    title: 'Container Platforms',
    items: ['Red Hat OpenShift (RHOCP)', 'MicroShift', 'Red Hat Device Edge', 'Kubernetes'],
  },
  {
    title: 'Container Tools',
    items: ['Podman', 'Docker', 'Quay Registry', 'Image Mirroring'],
  },
  {
    title: 'Virtualization & Storage',
    items: ['RHEL KVM', 'VMware vSphere', 'Nutanix AHV', 'Red Hat Ceph Storage', 'OpenShift Data Foundation'],
  },
  {
    title: 'Automation & OS',
    items: ['Ansible', 'Bash Scripting', 'RHEL 8 / 9'],
  },
  {
    title: 'Networking & Deployment',
    items: ['DNS', 'HAProxy', 'Ingress Routing', 'NMState Operator', 'UPI', 'Agent-Based Installer', 'Air-Gapped'],
  },
  {
    title: 'OpenStack & Observability',
    items: ['RHOSO v18', 'Nova / Neutron / Glance / Keystone / Cinder', 'Loki', 'Compliance Operator', 'OpenShift Monitoring'],
  },
  {
    title: 'Cloud & AI/ML',
    items: ['Google Cloud Platform', 'LangChain', 'FAISS', 'Ollama', 'RAG', 'FastAPI'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT', 'MongoDB'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <FadeIn>
          <p className="text-rose-400 font-mono text-sm tracking-[0.2em] uppercase mb-4">Skills</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white mb-10">
            What I work with
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-10">
          {groups.map((g, i) => (
            <FadeIn key={g.title} delay={i * 0.06}>
              <div>
                <h3 className="text-sm text-zinc-400 mb-4">{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg text-sm text-zinc-200 bg-white/[0.04] border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}