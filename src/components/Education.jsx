import FadeIn from './FadeIn'

const edu = [
  {
    school: 'Manipal Institute of Technology',
    degree: 'Master of Computer Applications (MCA)',
    period: 'Aug 2023 — Aug 2025',
    location: 'Manipal, Karnataka',
    score: 'CGPA: 8.13 / 10',
  },
  {
    school: 'Mahatma Gandhi Memorial College',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: 'Aug 2020 — Jul 2023',
    location: 'Udupi, Karnataka',
    score: 'CGPA: 8.25 / 10',
  },
]

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <FadeIn>
          <p className="text-rose-400 font-mono text-sm tracking-[0.2em] uppercase mb-4">Education</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white mb-10">
            Education
          </h2>
        </FadeIn>

        <div className="space-y-10">
          {edu.map((e, i) => (
            <FadeIn key={e.school} delay={i * 0.1}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">{e.degree}</h3>
                  <p className="text-sm text-rose-400 mb-1">{e.school}</p>
                  <p className="text-sm text-zinc-400">{e.location}</p>
                </div>
                <div className="text-sm text-zinc-400 sm:text-right shrink-0">
                  <p>{e.period}</p>
                  <p className="text-zinc-200 mt-1">{e.score}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}