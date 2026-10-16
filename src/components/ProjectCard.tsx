import type { ProjectData } from '@/lib/content'
import { words, type Locale } from '@/lib/content'
import { Icon } from './Icon'

const projectIcons = { pipeline: 'workflow', kubernetes: 'layers', containers: 'code', cloud: 'cloud' } as const

export function ProjectCard({ project, locale }: { project: ProjectData; locale: Locale }) {
  const t = words[locale]
  // Extract primary description summary
  const summary = project.description?.split('\n\n')[0] || project.description || ''

  return (
    <article className="project-card" id={`project-${project.slug || project.id}`}>
      <div className="project-card-body">
        <div className="project-card-top">
          <span className="card-icon">
            <Icon name={projectIcons[project.visual || 'pipeline']} size={20} />
          </span>
          <div className="project-meta">
            <span className="project-category">{project.category}</span>
            {project.year && <span className="project-year">{project.year}</span>}
          </div>
        </div>

        <h3 className="project-heading">{project.title}</h3>

        <div className="project-description">
          <p>{summary}</p>
        </div>

        <div className="project-stack">
          <div className="project-tags">
            {project.technologies?.slice(0, 5).map(tech => (
              <span key={tech.name}>{tech.name}</span>
            ))}
            {project.technologies && project.technologies.length > 5 && (
              <span className="project-tag-more">+{project.technologies.length - 5}</span>
            )}
          </div>
        </div>

        {(project.website || project.repository) && (
          <div className="project-links">
            {project.repository && (
              <a className="project-repository" href={project.repository} target="_blank" rel="noreferrer">
                <Icon name="github" size={16} />
                <span>{locale === 'fr' ? 'Code' : 'Code'}</span>
              </a>
            )}
            {project.website && (
              <a className="project-repository" href={project.website} target="_blank" rel="noreferrer">
                <Icon name="globe" size={16} />
                <span>{locale === 'fr' ? 'Démo' : 'Demo'}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
