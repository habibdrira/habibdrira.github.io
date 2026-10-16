import type { ProjectData } from '@/lib/content'
import { words, type Locale } from '@/lib/content'
import { Icon } from './Icon'

const projectIcons = { pipeline: 'workflow', kubernetes: 'layers', containers: 'code', cloud: 'cloud' } as const

type Props = {
  project: ProjectData
  locale: Locale
  compact?: boolean
}

export function ProjectCard({ project, locale, compact = false }: Props) {
  const t = words[locale]
  const paragraphs = project.description?.split('\n\n').filter(Boolean) || []
  const summary = paragraphs[0] || project.description || ''

  if (compact) {
    return (
      <article className="project-card project-card-compact" id={`project-${project.slug || project.id}`}>
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
                  <span>Code</span>
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

  // Full view (for the Projects catalog page)
  return (
    <article className="project-card project-card-full" id={`project-${project.slug || project.id}`}>
      <div className="project-card-body">
        <div className="project-card-top">
          <span className="card-icon">
            <Icon name={projectIcons[project.visual || 'pipeline']} size={22} />
          </span>
          <div className="project-meta">
            <span>{project.category}</span>
            {project.year && <span>{project.year}</span>}
          </div>
        </div>

        <h3 className="project-heading">{project.title}</h3>

        <div className="project-description">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="project-stack">
          <h4>{t.technologies}</h4>
          <div className="project-tags">
            {project.technologies?.map(tech => (
              <span key={tech.name}>{tech.name}</span>
            ))}
          </div>
        </div>

        {(project.website || project.repository) && (
          <div className="project-links">
            {project.website && (
              <a className="project-repository" href={project.website} target="_blank" rel="noreferrer">
                <Icon name="globe" size={18} />
                <span>{t.website}</span>
              </a>
            )}
            {project.repository && (
              <a className="project-repository" href={project.repository} target="_blank" rel="noreferrer">
                <Icon name="github" size={18} />
                <span>{t.repository}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
