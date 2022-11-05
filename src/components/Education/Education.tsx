import { courses } from '@/data/courses'
import styles from './Education.module.scss'

export function Education() {
  return (
    <section className="section-page">
      <h2 className="title">Formação Acadêmica</h2>

      <div className={styles.courses}>
        {courses.map((course) => (
          <div className={styles.course} key={course.name}>
            <strong>{course.institution}</strong>
            <p>{course.name}</p>
            <p>{course.period}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
