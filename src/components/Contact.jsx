import { useState } from 'react'
import FadeIn from './FadeIn'

export default function Contact() {
  const [status, setStatus] = useState('')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'feabdc64-d1da-4f1c-b129-cafbcd943fb9',
          subject: `Portfolio message from ${form.name}`,
          from_name: form.name,
          ...form,
        }),
      })

      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Header */}
        <FadeIn>
          <p className="text-rose-400 font-mono text-sm tracking-[0.2em] uppercase mb-4">
            Contact
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Let’s talk
          </h2>
          <p className="text-zinc-200 text-base md:text-lg leading-relaxed max-w-xl mb-14">
            Open to OpenShift, infrastructure, and platform engineering opportunities.
            Send a message — I’ll get back to you.
          </p>
        </FadeIn>

        {/* Layout: form left, info card right */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-14 items-start">
          
          {/* Form */}
          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-rose-500/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-rose-500/50 transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-zinc-400 mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-rose-500/50 transition-colors resize-none"
                  placeholder="Tell me about the role, project, or training need..."
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-8 py-3.5 bg-rose-600 hover:bg-rose-500 disabled:opacity-60 text-white text-sm font-medium rounded-full transition-colors"
                >
                  {status === 'sending' ? 'Sending...' : 'Send message'}
                </button>

                {status === 'success' && (
                  <p className="text-sm text-emerald-400">Message sent — I’ll reply soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-rose-400">Something went wrong. Try email instead.</p>
                )}
              </div>
            </form>
          </FadeIn>

          {/* Info card */}
          <FadeIn delay={0.2}>
            <div className="card space-y-6 sticky top-28">

              <div className="h-px bg-white/5" />

              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Email</p>
                <a
                  href="mailto:brijeshpujari333@gmail.com"
                  className="text-zinc-200 hover:text-rose-400 transition-colors break-all"
                >
                  brijeshpujari333@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/brijesh-poojary3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-200 hover:text-rose-400 transition-colors"
                >
                  brijesh-poojary3 →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}