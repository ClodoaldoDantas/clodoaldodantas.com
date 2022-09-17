import Image from 'next/image'
import styles from './Hero.module.scss'
import { contact } from 'data/contact'

export function Hero() {
  return (
    <section className={styles.heroContainer}>
      <Image
        className={styles.profile}
        src="/profile.jpeg"
        alt="Foto do autor do site"
        width={150}
        height={150}
      />

      <div>
        <h1 className={styles.userName}>Clodoaldo Dantas</h1>

        <p className={styles.bio}>
          Desenvolvedor Front-end, atuando na <a href="#">TQI</a>, e sempre
          buscando programar de maneira simples, organizada e com boas práticas
          de código ☕.
        </p>

        <a href={`mailto:${contact.email}`} className={styles.email}>
          👉 {contact.email}
        </a>
      </div>
    </section>
  )
}
