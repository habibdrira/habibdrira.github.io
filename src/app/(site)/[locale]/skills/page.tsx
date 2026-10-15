import Link from 'next/link'
import type { Metadata } from 'next'
import { getContent, validLocale, words, type Locale } from '@/lib/content'
import { SkillGroup } from '@/components/SkillGroup'

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const validLoc = validLocale(locale) ? locale : 'fr'
  return {
    title: validLoc === 'fr' ? 'Toutes les compétences' : 'All skills',
    alternates: { canonical: `/${validLoc}/skills/`, languages: { fr: '/fr/skills/', en: '/en/skills/' } },
  }
}

export default async function SkillsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const currentLocale: Locale = validLocale(locale) ? locale : 'fr'
  const { skills } = getContent(currentLocale)
  const fr = currentLocale === 'fr'
  return (
    <main id="main-content" className="skills-page container">
      <Link className="text-link catalog-back" href={`/${currentLocale}#skills`}>← {words[currentLocale].home}</Link>
      <div className="catalog-heading">
        <h1>{fr ? 'Toutes mes compétences' : 'All my skills'}</h1>
        <p>{fr ? 'Mes technologies et outils, organisés par domaine.' : 'My technologies and tools, organised by area.'}</p>
      </div>
      <div className="skills-grid">
        {skills.map(group => <SkillGroup key={group.id} group={group} locale={currentLocale} />)}
      </div>
      {!skills.length && <p className="empty-state">{fr ? 'Aucune compétence publiée pour le moment.' : 'No skills published yet.'}</p>}
    </main>
  )
}
