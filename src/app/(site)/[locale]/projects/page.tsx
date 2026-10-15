import Link from 'next/link'
import type { Metadata } from 'next'
import { getContent, validLocale, words, type Locale } from '@/lib/content'
import { ProjectCard } from '@/components/ProjectCard'

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const validLoc = validLocale(locale) ? locale : 'fr'
  return {
    title: validLoc === 'fr' ? 'Tous les projets' : 'All projects',
    alternates: { canonical: `/${validLoc}/projects/`, languages: { fr: '/fr/projects/', en: '/en/projects/' } },
  }
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const currentLocale: Locale = validLocale(locale) ? locale : 'fr'
  const { projects } = getContent(currentLocale)
  const fr = currentLocale === 'fr'
  return (
    <main id="main-content" className="projects-page container">
      <Link className="text-link catalog-back" href={`/${currentLocale}#projects`}>← {words[currentLocale].home}</Link>
      <div className="catalog-heading">
        <h1>{fr ? 'Tous mes projets' : 'All my projects'}</h1>
        <p>{fr ? 'Cloud, DevOps, développement et systèmes embarqués.' : 'Cloud, DevOps, software development and embedded systems.'}</p>
        <span className="catalog-count">{projects.length} {fr ? 'projets' : 'projects'}</span>
      </div>
      <div className="projects-grid">
        {projects.map(project => <ProjectCard key={project.id} project={project} locale={currentLocale} />)}
      </div>
      {!projects.length && <p className="empty-state">{words[currentLocale].empty}</p>}
    </main>
  )
}
