import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CustomCursor from './components/CustomCursor'
import Loader from './components/Loader'
import Toast from './components/Toast'
import useTheme from './hooks/useTheme'
import useActiveSection from './hooks/useActiveSection'
import useReveal from './hooks/useReveal'

const SECTION_IDS = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact']

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const active = useActiveSection(SECTION_IDS)
  const [loading, setLoading] = useState(true)
  const [toastVisible, setToastVisible] = useState(false)

  useReveal([loading])

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(t)
  }, [])

  const handleContactSuccess = () => {
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 3200)
  }

  return (
    <>
      <Loader visible={loading} />
      <CustomCursor />
      <Navbar active={active} theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact onSubmitSuccess={handleContactSuccess} />
      </main>

      <Footer />
      <ScrollToTop />
      <Toast message="Message sent — thanks for reaching out! I'll reply soon." visible={toastVisible} />
    </>
  )
}
