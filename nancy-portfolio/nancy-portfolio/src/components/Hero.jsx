import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { profile } from '../data/resumeData'

const CODE_LINES = [
  { indent: 0, content: [{ t: 'kw', v: 'const' }, { t: 'plain', v: ' developer ' }, { t: 'op', v: '=' }, { t: 'plain', v: ' {' }] },
  { indent: 1, content: [{ t: 'prop', v: 'name' }, { t: 'op', v: ':' }, { t: 'str', v: " 'Nancy M'" }, { t: 'op', v: ',' }] },
  { indent: 1, content: [{ t: 'prop', v: 'role' }, { t: 'op', v: ':' }, { t: 'str', v: " 'Frontend Developer'" }, { t: 'op', v: ',' }] },
  { indent: 1, content: [{ t: 'prop', v: 'stack' }, { t: 'op', v: ':' }, { t: 'plain', v: ' [' }, { t: 'str', v: "'React'" }, { t: 'op', v: ', ' }, { t: 'str', v: "'JavaScript'" }, { t: 'op', v: ', ' }, { t: 'str', v: "'ASP.NET Core'" }, { t: 'plain', v: '],' }] },
  { indent: 1, content: [{ t: 'prop', v: 'basedIn' }, { t: 'op', v: ':' }, { t: 'str', v: " 'Coimbatore, IN'" }, { t: 'op', v: ',' }] },
  { indent: 1, content: [{ t: 'prop', v: 'available' }, { t: 'op', v: ':' }, { t: 'kw', v: ' true' }] },
  { indent: 0, content: [{ t: 'plain', v: '};' }] },
]

const TOKEN_CLASS = {
  kw: 'tok-kw',
  prop: 'tok-prop',
  str: 'tok-str',
  op: 'tok-op',
  plain: 'tok-plain',
}

export default function Hero() {
  const [linesShown, setLinesShown] = useState(0)

  useEffect(() => {
    if (linesShown >= CODE_LINES.length) return
    const t = setTimeout(() => setLinesShown((n) => n + 1), 260)
    return () => clearTimeout(t)
  }, [linesShown])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero">
      <div className="orb-field">
        <div className="orb" style={{ width: 420, height: 420, top: '-8%', left: '-6%', background: 'var(--accent-violet)' }} />
        <div className="orb" style={{ width: 360, height: 360, bottom: '-10%', right: '-4%', background: 'var(--accent-cyan)', animationDelay: '4s' }} />
        <div className="orb" style={{ width: 220, height: 220, top: '40%', left: '55%', background: 'var(--accent-coral)', animationDelay: '8s' }} />
      </div>

      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">Frontend Developer · Coimbatore</span>
          <h1 className="hero-title">
            Hi, I'm {profile.name.split(' ')[0]}. I craft
            <span className="gradient-text"> interfaces </span>
            that feel effortless.
          </h1>
          <p className="hero-lead">{profile.tagline}</p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn-primary cursor-hover"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('projects')
              }}
            >
              View Projects
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Resume/Nancy.pdf`}
              download
              className="btn btn-ghost cursor-hover"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="btn btn-ghost cursor-hover"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('contact')
              }}
            >
              <Mail size={16} /> Say Hello
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-panel glass"
          initial={{ opacity: 0, scale: 0.92, rotate: -1.5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-panel-bar">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
            <span className="hero-panel-filename">profile.js</span>
          </div>
          <pre className="hero-panel-code">
            {CODE_LINES.slice(0, linesShown).map((line, i) => (
              <div className="code-line" key={i}>
                <span className="code-line-num">{i + 1}</span>
                <span style={{ paddingLeft: `${line.indent * 20}px` }}>
                  {line.content.map((tok, j) => (
                    <span key={j} className={TOKEN_CLASS[tok.t]}>
                      {tok.v}
                    </span>
                  ))}
                </span>
              </div>
            ))}
            {linesShown < CODE_LINES.length && <span className="code-caret" />}
          </pre>
        </motion.div>
      </div>

      <button className="hero-scroll-cue cursor-hover" onClick={() => scrollTo('about')} aria-label="Scroll to About section">
        <ArrowDown size={18} />
      </button>
    </section>
  )
}
