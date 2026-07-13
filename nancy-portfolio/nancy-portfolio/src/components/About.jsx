import { profile, counters } from '../data/resumeData'
import useCounter from '../hooks/useCounter'

function Counter({ value, suffix, label }) {
  const [ref, count] = useCounter(value)
  return (
    <div className="counter-card glass glass-card reveal" ref={ref}>
      <div className="counter-value">
        {count}
        <span className="gradient-text">{suffix}</span>
      </div>
      <div className="counter-label">{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <span className="eyebrow">About</span>
        <h2 className="section-title reveal">
          Turning designs into <span className="gradient-text">production-ready</span> UI.
        </h2>
        <p className="about-text reveal">{profile.about}</p>

        <div className="counter-grid">
          {counters.map((c) => (
            <Counter key={c.label} value={c.value} suffix={c.suffix} label={c.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
