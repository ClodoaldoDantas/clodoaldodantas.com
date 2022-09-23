import Image from 'next/image'
import { Recommendation } from '@/interfaces/recommentadion'
import styles from './Recommendation.module.scss'

export function Recommendation({ data }: { data: Recommendation }) {
  return (
    <div className={styles.recommendation}>
      <div className={styles.author}>
        <Image
          src={data.author.image}
          alt={`Foto de ${data.author.name}`}
          height={60}
          width={60}
        />

        <div>
          <a href={data.author.linkedin} target="_blank" rel="noreferrer">
            {data.author.name}
          </a>
          <p>{data.author.role}</p>
        </div>
      </div>

      <blockquote>{data.text}</blockquote>
    </div>
  )
}
