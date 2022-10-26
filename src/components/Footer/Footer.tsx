import { FiLinkedin, FiGithub, FiMail, FiFileText } from 'react-icons/fi'
import { contact } from '@/data/contact'
import styles from './Footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.navbar}>
        <a href={contact.linkedin} target="_blank" rel="noreferrer">
          <FiLinkedin size={20} /> Linkedin
        </a>

        <a href={contact.github} target="_blank" rel="noreferrer">
          <FiGithub size={20} /> Github
        </a>

        <a href="/resume.pdf" target="_blank">
          <FiFileText size={20} /> Currículo
        </a>

        <a href={`mailto:${contact.email}`} target="_blank" rel="noreferrer">
          <FiMail size={20} /> E-mail
        </a>
      </nav>
    </footer>
  )
}
