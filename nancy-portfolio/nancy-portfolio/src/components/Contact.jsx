import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react'
import { profile } from '../data/resumeData'

export default function Contact({ onSubmitSuccess }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mlgqrvev'
  const [error, setError] = useState('')
  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
  e.preventDefault()
  if (!form.name || !form.email || !form.message) return

  setSubmitting(true)
  setError('')

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(e.target),
    })

    if (!res.ok) throw new Error('Submission failed')

    setForm({ name: '', email: '', message: '' })
    onSubmitSuccess()
  } catch (err) {
    setError("Something went wrong — please email me directly instead.")
  } finally {
    setSubmitting(false)
  }
}

  return (
    <section id="contact" className="section">
      <div className="orb-field">
        <div className="orb" style={{ width: 300, height: 300, bottom: '-10%', left: '10%', background: 'var(--accent-violet)' }} />
      </div>
      <div className="container">
        <span className="eyebrow">Contact</span>
        <h2 className="section-title reveal">Let's build something together.</h2>
        <p className="section-lead reveal">
          Open to frontend and full-stack opportunities. Reach out and I'll get back to you
          shortly.
        </p>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <a href={`mailto:${profile.email}`} className="contact-info-row cursor-hover">
              <span className="contact-info-icon">
                <Mail size={17} />
              </span>
              {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="contact-info-row cursor-hover">
              <span className="contact-info-icon">
                <Phone size={17} />
              </span>
              {profile.phone}
            </a>
            <div className="contact-info-row">
              <span className="contact-info-icon">
                <MapPin size={17} />
              </span>
              {profile.location}
            </div>

            <div className="contact-socials">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-social cursor-hover" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="contact-social cursor-hover" aria-label="GitHub">
                <Github size={18} />
              </a>
            </div>
          </div>

          <form className="contact-form glass glass-card reveal" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Tell me about the opportunity..." required />
            </div>
            {error && <p className="form-error">{error}</p>}
            <button type="submit" className="btn btn-primary cursor-hover" disabled={submitting}>
              {submitting ? 'Sending...' : (<>Send Message <Send size={15} /></>)}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
