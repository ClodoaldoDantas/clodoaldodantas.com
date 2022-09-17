import styles from './TechStack.module.scss'
import { techStack } from 'data/tech-stack'

export function TechStack() {
  return (
    <section className="section-page">
      <h2 className="title">Tech stack</h2>

      <div className={styles.wrapper}>
        {techStack.map((stack) => (
          <div key={stack} className={styles.card}>
            <span>{stack}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
