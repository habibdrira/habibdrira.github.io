export type Locale = 'fr' | 'en'

export interface ProfileData {
  name: string
  role: string
  headline?: string
  intro: string
  about: string
  location: string
  availability?: string
  email: string
  contactIntro?: string
  phone?: string
  github?: string
  linkedin?: string
  cvUrl?: string
  portraitUrl?: string
  languages: { name: string; level: string }[]
  seoDescription: string
}

export interface ProjectData {
  id: string
  slug: string
  title: string
  category: string
  year?: string
  description: string
  technologies: { name: string }[]
  visual?: 'pipeline' | 'kubernetes' | 'containers' | 'cloud'
  repository?: string
  website?: string
  featured: boolean
  order: number
}

export interface ExperienceData {
  id: string
  company: string
  title: string
  period: string
  description: string
  highlights?: { text: string }[]
  order: number
}

export interface SkillItem {
  name: string
}

export interface SkillGroupData {
  id: string
  title: string
  icon?: 'cloud' | 'layers' | 'workflow' | 'activity' | 'code' | 'server'
  items: SkillItem[]
  order: number
}

export interface EducationData {
  id: string
  school: string
  title: string
  period: string
  description: string
  order: number
}

export interface CertificationData {
  id: string
  title: string
  issuer: string
  year: string
  badgeUrl?: string
  credential?: string
  order: number
}

export interface HomepageSection {
  section: 'about' | 'projects' | 'skills' | 'certifications' | 'experience' | 'education' | 'contact'
  visible: boolean
}
