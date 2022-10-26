import { contact } from '@/data/contact'
import styles from './Navbar.module.scss'

export function Navbar() {
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
      </nav>
    </section>
  )
}
