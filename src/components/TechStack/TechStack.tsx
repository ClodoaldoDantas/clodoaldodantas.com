import styles from './TechStack.module.scss'
import { techStack } from '@/data/tech-stack'

export function TechStack() {
  return (
    <section className="section-page">
      <h2 className="title">Tecnologias</h2>

      <div className={styles.wrapper}>
        {techStack.map(({ icon: Icon, content }) => (
          <div key={content} className={styles.card}>
            <Icon size={24} />
            <span>{content}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
