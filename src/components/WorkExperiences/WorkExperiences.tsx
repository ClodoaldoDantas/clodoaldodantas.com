import { workExperiences } from '@/data/experiences'
import styles from './WorkExperiences.module.scss'

interface ExperienceHeaderProps {
  title: string
  period: string
}

const ExperienceHeader = (props: ExperienceHeaderProps) => {
  return (
    <>
      <strong>{props.title}</strong>
      <p>{props.period}</p>
    </>
  )
}

const ExperienceContent = ({ content }: { content?: string[] }) => {
  return (
    <>
      {content?.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </>
  )
}

const ExperienceSkills = ({ skills }: { skills?: string[] }) => {
  if (!skills) return null

  return (
    <div className={styles.skills}>
      <strong>Competências:</strong>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export function WorkExperiences() {
  return (
    <section className="section-page">
      <h2 className="title">Experiência</h2>

      {workExperiences.map((experience) => (
        <div key={experience.period} className={styles.card}>
          <ExperienceHeader
            title={`💼 ${experience.title}`}
            period={experience.period}
          />
          <ExperienceContent content={experience.content} />
          <ExperienceSkills skills={experience.skills} />

          {experience.timeline && (
            <div className={styles.timeline}>
              {experience.timeline.map((item) => (
                <div className={styles.timelineRow} key={item.period}>
                  <div className={styles.timelineContent}>
                    <ExperienceHeader title={item.title} period={item.period} />
                    <ExperienceContent content={item.content} />
                    <ExperienceSkills skills={item.skills} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  )
}
