import dynamic from 'next/dynamic'
import { contact } from '@/data/contact'
import { useTheme } from '@/hooks/useTheme'

import styles from './Navbar.module.scss'

function Navbar() {
  const { theme, changeTheme } = useTheme()

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

        {theme === 'light' ? (
          <button onClick={changeTheme}>🌙 Tema Dark</button>
        ) : (
          <button onClick={changeTheme}>🌞 Tema Light</button>
        )}
      </nav>
    </section>
  )
}

export default dynamic(() => Promise.resolve(Navbar), {
  ssr: false,
})
