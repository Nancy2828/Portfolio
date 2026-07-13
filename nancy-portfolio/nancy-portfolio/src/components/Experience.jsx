import { experience } from '../data/resumeData'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <span className="eyebrow">Experience</span>
        <h2 className="section-title reveal">Where the work happened.</h2>
        <p className="section-lead reveal">
          One role, two chapters — from a WordPress internship to shipping React features in
          production.
        </p>

        <div className="timeline">
          {experience.map((job, i) => (
            <div className="timeline-item reveal" key={i}>
              <div className="timeline-marker">
                <Briefcase size={16} />
              </div>
              <div className="timeline-card glass glass-card">
                <div className="timeline-card-head">
                  <div>
                    <h3 className="timeline-role">{job.role}</h3>
                    <span className="timeline-company">{job.company}</span>
                  </div>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <ul className="timeline-points">
                  {job.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
