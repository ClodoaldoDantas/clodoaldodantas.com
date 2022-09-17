import styles from './Navbar.module.scss'
import { contact } from '@/data/contact'

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

        <a href={contact.instagram} target="_blank" rel="noreferrer">
          💬 Instagram
        </a>

        <a href="/resume.pdf" target="_blank">
          📝 Currículo
        </a>

        <a href="#">📬 Fale comigo</a>
      </nav>
    </section>
  )
}
