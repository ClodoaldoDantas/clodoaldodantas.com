import Image from 'next/image'
import { recommendations } from '@/data/recommendations'
import styles from './Recommendations.module.scss'

export function Recommendations() {
  return (
    <section className="section-page">
      <h2 className="title">Recomendações</h2>

      {recommendations.map((recommendation) => (
        <div className={styles.recommendation} key={recommendation.author}>
          <div className={styles.author}>
            <Image
              src={recommendation.image}
              alt={`Foto de ${recommendation.author}`}
              height={60}
              width={60}
            />

            <div>
              <strong>{recommendation.author}</strong>
              <p>{recommendation.role}</p>
            </div>
          </div>

          <blockquote>{recommendation.text}</blockquote>
        </div>
      ))}
    </section>
  )
}
