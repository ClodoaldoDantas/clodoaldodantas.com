import { Fragment } from 'react'
import { workExperiences } from '@/data/experiences'
import styles from './WorkExperiences.module.scss'

export function WorkExperiences() {
  return (
    <section className="section-page">
      <h2 className="title">Experiência</h2>
      <div className="line-break"></div>

      {workExperiences.map((experience, index) => {
        const lastChild = workExperiences.length - 1 === index

        return (
          <Fragment key={experience.period}>
            <div className={styles.card}>
              <strong>
                🚧 {experience.role} | {experience.company}
              </strong>

              <p>{experience.period}</p>

              {experience.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <div className={styles.skills}>
                <strong>Competências:</strong>
                <ul>
                  {experience.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>

            {!lastChild && <div className="line-break"></div>}
          </Fragment>
        )
      })}
    </section>
  )
}
