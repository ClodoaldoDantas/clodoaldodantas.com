import dynamic from 'next/dynamic'
import { useEffect } from 'react'

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { contact } from '@/data/contact'
import styles from './Navbar.module.scss'

type Theme = 'light' | 'dark'

function Navbar() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  const [theme, setTheme] = useLocalStorage<Theme>(
    '@clodoaldodantas:theme',
    defaultDark ? 'dark' : 'light'
  )

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [theme])

  function handleChangeTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <section className="section-page">
      <nav className={styles.navbar}>
        <a href={contact.linkedin} target="_blank" rel="noreferrer">
          💬 Linkedin
        </a>

        <a href={contact.github} target="_blank" rel="noreferrer">
          💬 Github
        </a>

        <a href="/resume.pdf" target="_blank">
          📝 Currículo
        </a>

        <a href={`mailto:${contact.email}`} target="_blank" rel="noreferrer">
          📬 E-mail
        </a>

        <button onClick={handleChangeTheme}>
          {theme === 'light' ? '🌙 Tema Dark' : '🌞 Tema Light'}
        </button>
      </nav>
    </section>
  )
}

export default dynamic(() => Promise.resolve(Navbar), {
  ssr: false,
})
