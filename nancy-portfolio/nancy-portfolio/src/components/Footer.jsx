import { profile } from '../data/resumeData'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-brand">
          nancy<span className="gradient-text"></span>
        </span>
        <span className="footer-note">
          Designed &amp; built by {profile.name} · React + CSS
        </span>
        <span className="footer-year">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
