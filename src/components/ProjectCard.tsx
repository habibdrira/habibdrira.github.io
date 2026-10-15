import type { ProjectData } from '@/lib/content'
import { words, type Locale } from '@/lib/content'
import { Icon } from './Icon'

const projectIcons = { pipeline: 'workflow', kubernetes: 'layers', containers: 'code', cloud: 'cloud' } as const

export function ProjectCard({ project, locale }: { project: ProjectData; locale: Locale }) {
  const t = words[locale]
  return <article className="project-card" id={`project-${project.slug || project.id}`}>
    <div className="project-card-body">
      <div className="project-card-top"><span className="card-icon"><Icon name={projectIcons[project.visual || 'pipeline']} size={24} /></span><div className="project-meta"><span>{project.category}</span>{project.year && <span>{project.year}</span>}</div></div>
      <h3 className="project-heading">{project.title}</h3>
      <div className="project-description">{project.description?.split('\n\n').filter(Boolean).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
      <div className="project-stack"><h4>{t.technologies}</h4><div className="project-tags">{project.technologies?.map(tech => <span key={tech.name}>{tech.name}</span>)}</div></div>
      {(project.website || project.repository) && <div className="project-links">
        {project.website && <a className="project-repository" href={project.website} target="_blank" rel="noreferrer"><Icon name="globe" size={18} />{t.website}<Icon size={16} /></a>}
        {project.repository && <a className="project-repository" href={project.repository} target="_blank" rel="noreferrer"><Icon name="github" size={18} />{t.repository}<Icon size={16} /></a>}
      </div>}
    </div>
  </article>
}
