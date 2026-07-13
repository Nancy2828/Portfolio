import { skills } from '../data/resumeData'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <span className="eyebrow">Skills</span>
        <h2 className="section-title reveal">The toolkit behind the interface.</h2>
        <p className="section-lead reveal">
          Primary strength in React and the modern JS ecosystem, with working range across a
          full-stack toolchain.
        </p>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category} className="skills-category glass glass-card reveal">
              <h3 className="skills-category-title">{category}</h3>
              <div className="skills-list">
                {list.map((skill) => (
                  <div key={skill.name} className="skill-row">
                    <div className="skill-row-top">
                      <span>{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-track">
                      <div
                        className="skill-fill"
                        style={{ '--target-width': `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
