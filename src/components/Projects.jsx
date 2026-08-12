import FadeIn from './FadeIn'

const projects = [
  {
    title: 'Hybrid OpenShift Platform Deployment',
    client: 'Banking Client — RHEL KVM Infrastructure',
    points: [
      'Architected and deployed 3 production-grade Hybrid OCP clusters on RHEL KVM for a banking enterprise serving 80M+ customers, enabling a next-generation UPI payment platform.',
      'Configured enterprise-grade Compliance Operator, Loki logging, and OpenShift monitoring stack to ensure operational visibility and regulatory compliance.',
      'Delivered full end-to-end deployment, cluster validation, and production handover within a strict one-month timeline.',
    ],
    tags: ['OpenShift', 'RHEL KVM', 'Compliance', 'Banking'],
  },
  {
    title: 'RHOSO v18 Deployment',
    client: 'Banking Client — Red Hat OpenStack Services on OpenShift',
    points: [
      'Delivered an enterprise-grade RHOSO v18 deployment on OCP, providing a cloud-native OpenStack foundation for banking workloads.',
      'Provisioned a 3-node highly available Ceph Storage cluster delivering resilient block, file, and object storage for OpenStack services.',
      'Deployed OpenShift using Assisted Installer and configured the NMState Operator for lifecycle-managed network configuration.',
      'Integrated 7 Data Plane nodes with full network fabric validation.',
      'Automated deployment of Nova, Neutron, Glance, Keystone, and Cinder services via the OpenStack Operator.',
    ],
    tags: ['RHOSO', 'Ceph', 'OpenStack Operator', 'Assisted Installer'],
  },
  {
    title: 'MicroShift Edge Platform Deployment',
    client: 'Retail Edge Infrastructure — Red Hat Device Edge',
    points: [
      'Deployed Red Hat Device Edge environments with MicroShift for lightweight Kubernetes orchestration across geographically distributed retail locations.',
      'Implemented disconnected image distribution workflows using Podman and Quay Registry mirroring to support restricted network environments.',
      'Performed platform validation, cluster monitoring, log collection, troubleshooting, and lifecycle management to ensure high service reliability at the edge.',
    ],
    tags: ['MicroShift', 'Device Edge', 'Podman', 'Air-gapped'],
  },
  {
    title: 'Air-Gapped OpenShift Deployment',
    client: 'Banking Client — Disconnected Environment',
    points: [
      'Executed OCP deployment in a fully air-gapped, disconnected environment using both UPI and Agent-Based Installer methodologies.',
      'Configured internal proxy services and controlled outbound access mechanisms in compliance with strict banking network isolation policies.',
      'Managed secure platform provisioning, validation, and operational readiness for production in a highly regulated environment.',
    ],
    tags: ['UPI', 'Agent-Based Installer', 'Air-gapped', 'Security'],
  },
  {
    title: 'AI-Powered Knowledge Assistant',
    client: 'Internal Tool — Infrastructure Consultants',
    points: [
      'Built a Retrieval-Augmented Generation (RAG) platform using LangChain, FAISS, Ollama, and FastAPI with local LLMs to accelerate consultant access to Red Hat and Nutanix technical documentation.',
      'Implemented document ingestion and semantic search pipelines using pdfplumber and unstructured.io for contextual knowledge retrieval from enterprise documentation corpora.',
      'Designed the solution for deployment on OpenShift Container Platform to support scalable, self-hosted AI workloads within enterprise environments.',
    ],
    tags: ['RAG', 'LangChain', 'FAISS', 'Ollama', 'FastAPI'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <FadeIn>
          <p className="text-rose-400 font-mono text-sm tracking-[0.2em] uppercase mb-4">Projects</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white mb-10">
            Selected work
          </h2>
        </FadeIn>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.06}>
              <article className="card group">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-white group-hover:text-rose-300 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-zinc-400 mt-1">{p.client}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 shrink-0">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {p.points.map((point) => (
                    <li key={point} className="text-base text-zinc-200 leading-relaxed flex gap-3">
                      <span className="text-rose-500/60 mt-1.5 shrink-0">–</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}