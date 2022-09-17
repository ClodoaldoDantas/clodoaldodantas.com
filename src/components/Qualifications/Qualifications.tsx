import styles from './Qualifications.module.scss'
import { qualifications } from 'data/qualifications'

export function Qualifications() {
  return (
    <section className="section-page">
      <h2 className="title">Habilidades</h2>
      <ul className={styles.list}>
        {qualifications.map((qualification) => (
          <li key={qualification}>✔️ {qualification}</li>
        ))}
      </ul>
    </section>
  )
}
