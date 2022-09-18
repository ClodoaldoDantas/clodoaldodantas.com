import { contact } from '@/data/contact'
import { useKBar } from 'kbar'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import styles from './Hero.module.scss'

function Hero() {
  const { query } = useKBar()
  const isMac = /(Mac)/i.test(navigator.userAgent)
  const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)

  return (
    <section className={styles.container}>
      <Image
        className={styles.profile}
        src="/profile.jpeg"
        alt="Foto do autor do site"
        width={150}
        height={150}
      />

      <div>
        <h1 className={styles.name}>Clodoaldo Dantas</h1>

        <p className={styles.bio}>
          Desenvolvedor Front-end, atuando na{' '}
          <a href={contact.work} target="_blank" rel="noreferrer">
            TQI
          </a>
          , e sempre buscando programar de maneira simples, organizada e com
          boas práticas de código ☕.
        </p>

        {isMobile ? (
          <button onClick={query.toggle} className={styles.openKbarButton}>
            Clique para começar →
          </button>
        ) : isMac ? (
          <button onClick={query.toggle} className={styles.openKbarButton}>
            Pressione <kbd>⌘</kbd> <kbd>K</kbd> para iniciar →
          </button>
        ) : (
          <button onClick={query.toggle} className={styles.openKbarButton}>
            Pressione <kbd>ctrl</kbd> <kbd>K</kbd> para iniciar →
          </button>
        )}
      </div>
    </section>
  )
}

export default dynamic(() => Promise.resolve(Hero), {
  ssr: false,
})
