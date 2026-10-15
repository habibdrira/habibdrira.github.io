import Link from 'next/link'
import type { SkillGroupData } from '@/lib/content'
import type { Locale } from '@/lib/content'
import { Icon } from './Icon'
import { TechnologyIcon } from './TechnologyIcon'

export function SkillGroup({ group, locale, limit }: { group: SkillGroupData; locale: Locale; limit?: number }) {
  const items = group.items || []
  const visible = limit ? items.slice(0, limit) : items
  const remaining = items.length - visible.length
  return <article className="skill-group" id={`skill-${group.id}`}>
    <div className="skill-heading"><Icon name={group.icon || 'code'} size={25} /><h3>{group.title}</h3></div>
    <ul className="skill-items">{visible.map(item => <li key={item.name}><TechnologyIcon name={item.name} /><span>{item.name}</span></li>)}</ul>
    {remaining > 0 && <Link className="skill-more" href={`/${locale}/skills#skill-${group.id}`}>+ {remaining} {locale === 'fr' ? 'autres compétences' : 'more skills'}<Icon size={14} /></Link>}
  </article>
}
