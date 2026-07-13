import { education, languages } from '../data/resumeData'
import { GraduationCap, Languages } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="section-tight">
      <div className="container">
        <div className="education-grid">
          <div className="education-card glass glass-card reveal">
            <div className="education-icon">
              <GraduationCap size={20} />
            </div>
            <h3 className="education-degree">{education.degree}</h3>
            <p className="education-school">{education.school}</p>
            <span className="education-period">{education.period}</span>
          </div>

          <div className="education-card glass glass-card reveal">
            <div className="education-icon">
              <Languages size={20} />
            </div>
            <h3 className="education-degree">Languages</h3>
            <div className="language-chips">
              {languages.map((lang) => (
                <span className="language-chip" key={lang}>
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
