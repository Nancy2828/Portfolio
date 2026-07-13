import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ active, theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-inner glass">
        <a href="#home" className="navbar-logo" onClick={(e) => { e.preventDefault(); handleClick('home') }}>
          <span className="navbar-logo-mark">N</span>
          <span className="navbar-logo-text">Nancy<span className="gradient-text"></span></span>
        </a>

        <nav className="navbar-links">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`navbar-link ${active === link.id ? 'navbar-link--active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                handleClick(link.id)
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            className="theme-toggle cursor-hover"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            className="navbar-burger cursor-hover"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className={`navbar-mobile glass-strong ${open ? 'navbar-mobile--open' : ''}`}>
        {LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`navbar-mobile-link ${active === link.id ? 'navbar-link--active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              handleClick(link.id)
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
