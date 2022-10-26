export interface WorkExperience {
  title: string
  period: string
  content?: string[]
  skills?: string[]
  timeline?: Array<{
    title: string
    period: string
    content: string[]
    skills: string[]
  }>
}
