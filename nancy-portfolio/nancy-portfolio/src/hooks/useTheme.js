import { useEffect, useState, useCallback } from 'react'

export default function useTheme() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved) {
      setTheme(saved)
      return
    }
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
    setTheme(prefersLight ? 'light' : 'dark')
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}
