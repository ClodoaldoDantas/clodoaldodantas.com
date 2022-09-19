import Image from 'next/image'
import { recommendations } from '@/data/recommendations'
import styles from './Recommendations.module.scss'

export function Recommendations() {
  return (
    <section className="section-page">
      <h2 className="title">Recomendações</h2>

      {recommendations.map((recommendation) => (
        <div className={styles.recommendation} key={recommendation.author.name}>
          <div className={styles.author}>
            <Image
              src={recommendation.author.image}
              alt={`Foto de ${recommendation.author.name}`}
              height={60}
              width={60}
            />

            <div>
              <a
                href={recommendation.author.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {recommendation.author.name}
              </a>
              <p>{recommendation.author.role}</p>
            </div>
          </div>

          <blockquote>{recommendation.text}</blockquote>
        </div>
      ))}
    </section>
  )
}
